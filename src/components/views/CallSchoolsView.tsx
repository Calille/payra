import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Phone, MapPin, Clock, AlertCircle, Users, Star, History, MessageSquare } from 'lucide-react'
import { mockSchools, mockCandidates } from '../../data/mockData'
import { School, Candidate, CallNote } from '../../types'
import SearchInput from '../common/SearchInput'
import StatusBadge from '../common/StatusBadge'
import CallNoteModal from '../common/CallNoteModal'

interface CallSchoolsViewProps {
  onBack: () => void
}

const CallSchoolsView: React.FC<CallSchoolsViewProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterUrgency, setFilterUrgency] = useState<'all' | 'high' | 'medium' | 'low'>('all')
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null)
  const [schools, setSchools] = useState<School[]>(mockSchools)
  const [isCallModalOpen, setIsCallModalOpen] = useState(false)
  const [schoolToCall, setSchoolToCall] = useState<School | null>(null)

  // Sort schools by last contact date (oldest first)
  const sortedSchools = [...schools].sort((a, b) => {
    const getLastContactDate = (school: School) => {
      if (school.callHistory.length === 0) {
        return new Date('2000-01-01') // Very old date for schools never called
      }
      const lastCall = school.callHistory.sort((x, y) => 
        new Date(y.timestamp).getTime() - new Date(x.timestamp).getTime()
      )[0]
      return new Date(lastCall.timestamp)
    }

    const dateA = getLastContactDate(a)
    const dateB = getLastContactDate(b)
    return dateA.getTime() - dateB.getTime()
  })

  const filteredSchools = sortedSchools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.postcode.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterUrgency === 'all' || school.urgency === filterUrgency
    return matchesSearch && matchesFilter
  })

  const handleCall = (school: School) => {
    setSchoolToCall(school)
    setIsCallModalOpen(true)
  }

  const handleSaveCallNote = (callNote: CallNote) => {
    if (!schoolToCall) return

    // Update the school's call history
    const updatedSchools = schools.map(school => {
      if (school.id === schoolToCall.id) {
        return {
          ...school,
          callHistory: [callNote, ...school.callHistory],
          lastContact: new Date().toISOString().split('T')[0]
        }
      }
      return school
    })

    setSchools(updatedSchools)

    // Update selected school if it's the one we just called
    if (selectedSchool?.id === schoolToCall.id) {
      const updatedSchool = updatedSchools.find(s => s.id === schoolToCall.id)
      if (updatedSchool) {
        setSelectedSchool(updatedSchool)
      }
    }

    setSchoolToCall(null)
  }

  const handleContactTeacher = (candidate: Candidate, method: 'phone' | 'email') => {
    console.log(`Contacting ${candidate.name} via ${method}`)
  }

  // Function to get nearby teachers for a school
  const getNearbyTeachers = (school: School): Candidate[] => {
    return mockCandidates.filter(candidate => {
      // Check if candidate is available
      if (candidate.availability !== 'available') return false
      
      // Check if candidate teaches any of the subjects the school needs
      const hasMatchingSubject = candidate.subjects.some(subject => 
        school.subjects.includes(subject)
      )
      
      // Simple location matching (in a real app, this would use actual distance calculation)
      const isNearby = getLocationDistance(school, candidate) <= 10 // Within 10 miles
      
      return hasMatchingSubject && isNearby
    }).sort((a, b) => b.rating - a.rating) // Sort by rating
  }

  // Simple distance calculation based on location names (mock implementation)
  const getLocationDistance = (school: School, candidate: Candidate): number => {
    // Mock distance calculation - in a real app, you'd use actual coordinates
    const locationMappings: { [key: string]: { lat: number, lng: number } } = {
      'Central London': { lat: 51.5074, lng: -0.1278 },
      'North London': { lat: 51.5641, lng: -0.1408 },
      'South London': { lat: 51.4545, lng: -0.1008 },
      'East London': { lat: 51.5154, lng: 0.0048 },
      'West London': { lat: 51.5074, lng: -0.2417 },
    }
    
    // Default distances based on postcodes and areas
    const schoolPostcode = school.postcode.split(' ')[0]
    const candidateLocation = candidate.location
    
    // Simple matching logic for demo
    if (schoolPostcode.startsWith('SW') && candidateLocation === 'South London') return 3
    if (schoolPostcode.startsWith('N') && candidateLocation === 'North London') return 2
    if (schoolPostcode.startsWith('E') && candidateLocation === 'East London') return 4
    if (schoolPostcode.startsWith('W') && candidateLocation === 'West London') return 5
    if (candidateLocation === 'Central London') return 6
    
    return 8 // Default distance
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            className={star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
          />
        ))}
        <span className="text-xs text-payra-text/70 ml-1">({rating})</span>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const getOutcomeColor = (outcome: CallNote['outcome']) => {
    switch (outcome) {
      case 'interested': return 'text-green-600 bg-green-100'
      case 'not_interested': return 'text-red-600 bg-red-100'
      case 'callback_requested': return 'text-blue-600 bg-blue-100'
      case 'no_answer': return 'text-gray-600 bg-gray-100'
      case 'wrong_number': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getLastContactInfo = (school: School) => {
    if (school.callHistory.length === 0) {
      return { text: 'Never contacted', color: 'text-red-600', priority: 'high' }
    }
    
    const lastCall = school.callHistory.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )[0]
    
    const daysSince = Math.floor((new Date().getTime() - new Date(lastCall.timestamp).getTime()) / (1000 * 60 * 60 * 24))
    
    if (daysSince > 30) return { text: formatDate(lastCall.timestamp), color: 'text-red-600', priority: 'high' }
    if (daysSince > 14) return { text: formatDate(lastCall.timestamp), color: 'text-orange-600', priority: 'medium' }
    if (daysSince > 7) return { text: formatDate(lastCall.timestamp), color: 'text-yellow-600', priority: 'medium' }
    return { text: formatDate(lastCall.timestamp), color: 'text-green-600', priority: 'low' }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <motion.div 
        className="glass-panel-strong border-b border-payra-purple/10 p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-payra-purple hover:text-payra-purple/80 transition-all duration-200 hover:bg-payra-purple/10 px-3 py-2 rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Dashboard</span>
            </motion.button>
            <div className="w-px h-8 bg-payra-purple/20"></div>
            <div>
              <h1 className="text-2xl font-bold text-payra-text">Call New Schools</h1>
              <p className="text-sm text-payra-text/60 mt-1">Schools ordered by last contact (oldest first)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-payra-purple">{filteredSchools.length}</div>
              <div className="text-xs text-payra-text/60">schools found</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-1 overflow-hidden">
        {/* Schools List */}
        <motion.div 
          className="w-2/3 flex flex-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Search and Filters */}
          <div className="p-6 glass-panel border-b border-payra-purple/10">
            <div className="flex gap-4 mb-4">
              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search schools by name or postcode..."
                className="flex-1"
              />
              <select
                value={filterUrgency}
                onChange={(e) => setFilterUrgency(e.target.value as any)}
                className="payra-select min-w-[160px]"
              >
                <option value="all">All Urgency</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center p-3 glass-panel-strong rounded-lg">
                <div className="text-lg font-bold text-red-600">{schools.filter(s => s.urgency === 'high').length}</div>
                <div className="text-xs text-payra-text/60">High Priority</div>
              </div>
              <div className="text-center p-3 glass-panel-strong rounded-lg">
                <div className="text-lg font-bold text-orange-600">{schools.filter(s => s.urgency === 'medium').length}</div>
                <div className="text-xs text-payra-text/60">Medium Priority</div>
              </div>
              <div className="text-center p-3 glass-panel-strong rounded-lg">
                <div className="text-lg font-bold text-green-600">{schools.filter(s => s.urgency === 'low').length}</div>
                <div className="text-xs text-payra-text/60">Low Priority</div>
              </div>
              <div className="text-center p-3 glass-panel-strong rounded-lg">
                <div className="text-lg font-bold text-red-600">{schools.filter(s => s.callHistory.length === 0).length}</div>
                <div className="text-xs text-payra-text/60">Never Called</div>
              </div>
            </div>
          </div>

          {/* Schools List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {filteredSchools.map((school, index) => {
              const lastContactInfo = getLastContactInfo(school)
              
              return (
                <motion.div
                  key={school.id}
                  className={`payra-card p-5 cursor-pointer ${
                    selectedSchool?.id === school.id ? 'selected' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedSchool(school)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <h3 className="font-semibold text-payra-text text-lg">{school.name}</h3>
                        <StatusBadge status={school.urgency} variant="urgency" />
                        {school.callHistory.length === 0 && (
                          <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                            Never Called
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-payra-text/70 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span className="font-medium">{school.distance} miles away</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span className={`font-medium ${lastContactInfo.color}`}>
                            Last contact: {lastContactInfo.text}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <History size={14} className="text-payra-purple" />
                          <span className="text-sm text-payra-text/70">
                            {school.callHistory.length} call{school.callHistory.length !== 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {school.subjects.map((subject) => (
                          <span key={subject} className="px-2 py-1 bg-payra-pink/20 text-payra-text rounded-lg text-xs font-medium">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCall(school)
                        }}
                        className="payra-button-small bg-green-600 text-white hover:bg-green-700 flex items-center gap-1 min-w-[80px] justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Phone size={14} />
                        Call
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* School Details Panel */}
        <motion.div 
          className="w-1/3 glass-panel-strong border-l border-payra-purple/10 overflow-y-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {selectedSchool ? (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-payra-text mb-2">{selectedSchool.name}</h2>
                <div className="flex items-center gap-2 mb-4">
                  <StatusBadge status={selectedSchool.urgency} variant="urgency" />
                  <span className="text-sm text-payra-text/70">• {selectedSchool.distance} miles away</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-payra-text mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={14} className="text-payra-purple" />
                      <span>{selectedSchool.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-payra-purple" />
                      <span>{selectedSchool.address}, {selectedSchool.postcode}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Headteacher:</span> {selectedSchool.headteacher}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-payra-text mb-3">Subjects Needed</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSchool.subjects.map((subject) => (
                      <span key={subject} className="px-3 py-1 bg-payra-purple/10 text-payra-purple rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedSchool.notes && (
                  <div>
                    <h3 className="font-semibold text-payra-text mb-3">Notes</h3>
                    <div className="p-3 bg-payra-lavender/20 rounded-lg text-sm">
                      {selectedSchool.notes}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-payra-text mb-3 flex items-center gap-2">
                    <History size={16} />
                    Call History ({selectedSchool.callHistory.length})
                  </h3>
                  {selectedSchool.callHistory.length > 0 ? (
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {selectedSchool.callHistory
                        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                        .map((call) => (
                          <div key={call.id} className="p-3 bg-white/60 rounded-lg border border-payra-purple/10">
                            <div className="flex items-start justify-between mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOutcomeColor(call.outcome)}`}>
                                {call.outcome.replace('_', ' ')}
                              </span>
                              <div className="text-xs text-payra-text/60">
                                {formatDate(call.timestamp)}
                                {call.duration && (
                                  <span className="ml-2">• {call.duration}min</span>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-payra-text/80">{call.note}</p>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-payra-text/60">
                      <MessageSquare size={32} className="mx-auto mb-2 text-payra-purple/30" />
                      <p>No calls made yet</p>
                      <p className="text-xs">Make your first call to start tracking</p>
                    </div>
                  )}
                </div>

                {/* Nearby Teachers */}
                <div>
                  <h3 className="font-semibold text-payra-text mb-3">
                    Available Teachers Nearby ({getNearbyTeachers(selectedSchool).length})
                  </h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {getNearbyTeachers(selectedSchool).slice(0, 3).map((teacher) => (
                      <div key={teacher.id} className="p-3 bg-white/60 rounded-lg border border-payra-purple/10">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-payra-text">{teacher.name}</h4>
                          <div className="text-xs text-payra-purple font-medium">
                            £{teacher.dailyRate}/day
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                          {renderStars(teacher.rating)}
                          <span className="text-xs text-payra-text/60">
                            {teacher.experience}yr exp
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {teacher.subjects.slice(0, 3).map((subject) => (
                            <span key={subject} className="px-2 py-1 bg-payra-lavender/50 text-payra-text rounded text-xs">
                              {subject}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <motion.button
                            onClick={() => handleContactTeacher(teacher, 'phone')}
                            className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Phone size={12} />
                            Call
                          </motion.button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <motion.button
                    onClick={() => handleCall(selectedSchool)}
                    className="payra-button flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={16} />
                    Call {selectedSchool.name}
                  </motion.button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-payra-text/60">
              <Phone size={48} className="mx-auto mb-4 text-payra-purple/30" />
              <p>Select a school to view details</p>
              <p className="text-xs mt-1">Schools are sorted by last contact date</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Call Note Modal */}
      {schoolToCall && (
        <CallNoteModal
          isOpen={isCallModalOpen}
          onClose={() => {
            setIsCallModalOpen(false)
            setSchoolToCall(null)
          }}
          school={schoolToCall}
          onSaveNote={handleSaveCallNote}
        />
      )}
    </div>
  )
}

export default CallSchoolsView 