import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Users, Phone, Mail, Star, MapPin, Clock, BookOpen, Award } from 'lucide-react'
import { mockCandidates } from '../../data/mockData'
import { Candidate } from '../../types'
import SearchInput from '../common/SearchInput'
import StatusBadge from '../common/StatusBadge'

interface RecruitStaffViewProps {
  onBack: () => void
}

const RecruitStaffView: React.FC<RecruitStaffViewProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'available' | 'interviewing' | 'placed' | 'unavailable'>('all')
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)

  const filteredCandidates = mockCandidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = filterStatus === 'all' || candidate.availability === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleContact = (candidate: Candidate, method: 'phone' | 'email') => {
    console.log(`Contacting ${candidate.name} via ${method}`)
  }

  const handleInterview = (candidate: Candidate) => {
    console.log(`Scheduling interview with ${candidate.name}`)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
          />
        ))}
        <span className="text-sm text-payra-text/70 ml-1">({rating})</span>
      </div>
    )
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
              <h1 className="text-2xl font-bold text-payra-text">Staff Pipeline</h1>
              <p className="text-sm text-payra-text/60 mt-1">Find and interview teaching candidates</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-payra-purple">{filteredCandidates.length}</div>
            <div className="text-xs text-payra-text/60">candidates found</div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-1 overflow-hidden">
        {/* Candidates List */}
        <motion.div 
          className="w-2/3 flex flex-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Summary Cards */}
          <div className="p-6 glass-panel border-b border-payra-purple/10">
            <div className="grid grid-cols-4 gap-4">
              <div className="glass-panel-strong rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={20} className="text-green-600" />
                  <span className="font-medium text-payra-text">Available</span>
                </div>
                <p className="text-2xl font-bold text-payra-text">
                  {mockCandidates.filter(c => c.availability === 'available').length}
                </p>
              </div>
              <div className="glass-panel-strong rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={20} className="text-blue-600" />
                  <span className="font-medium text-payra-text">Interviewing</span>
                </div>
                <p className="text-2xl font-bold text-payra-text">
                  {mockCandidates.filter(c => c.availability === 'interviewing').length}
                </p>
              </div>
              <div className="glass-panel-strong rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={20} className="text-purple-600" />
                  <span className="font-medium text-payra-text">Placed</span>
                </div>
                <p className="text-2xl font-bold text-payra-text">
                  {mockCandidates.filter(c => c.availability === 'placed').length}
                </p>
              </div>
              <div className="glass-panel-strong rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={20} className="text-yellow-600" />
                  <span className="font-medium text-payra-text">Avg Rating</span>
                </div>
                <p className="text-2xl font-bold text-payra-text">
                  {(mockCandidates.reduce((sum, c) => sum + c.rating, 0) / mockCandidates.length).toFixed(1)}
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="p-6 glass-panel border-b border-payra-purple/10">
            <div className="flex gap-4 mb-4">
              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search candidates by name, location, or subjects..."
                className="flex-1"
              />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="payra-select min-w-[160px]"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="interviewing">Interviewing</option>
                <option value="placed">Placed</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>

          {/* Candidates List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {filteredCandidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                className={`payra-card p-5 cursor-pointer ${
                  selectedCandidate?.id === candidate.id ? 'selected' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCandidate(candidate)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <h3 className="font-semibold text-payra-text text-lg">
                        {candidate.name}
                      </h3>
                      <StatusBadge status={candidate.availability} variant="availability" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-payra-text/70 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span className="font-medium">{candidate.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>{candidate.experience} years exp.</span>
                      </div>
                      <span className="font-semibold text-payra-purple">£{candidate.dailyRate}/day</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      {renderStars(candidate.rating)}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {candidate.subjects.map((subject) => (
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
                        handleContact(candidate, 'phone')
                      }}
                      className="payra-button-small bg-green-600 text-white hover:bg-green-700 flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone size={14} />
                      Call
                    </motion.button>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleInterview(candidate)
                      }}
                      className="payra-button-small bg-payra-purple text-white hover:bg-payra-purple/90 flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Users size={14} />
                      Interview
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Candidate Details Panel */}
        <motion.div 
          className="w-1/3 glass-panel-strong border-l border-payra-purple/10 overflow-y-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {selectedCandidate ? (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-payra-text mb-2">{selectedCandidate.name}</h2>
                <div className="flex items-center gap-2 mb-4">
                  <StatusBadge status={selectedCandidate.availability} variant="availability" />
                  <span className="text-sm text-payra-text/70">• {selectedCandidate.experience} years experience</span>
                </div>
                {renderStars(selectedCandidate.rating)}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-payra-text mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={14} className="text-payra-purple" />
                      <span>{selectedCandidate.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={14} className="text-payra-purple" />
                      <span>{selectedCandidate.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-payra-purple" />
                      <span>{selectedCandidate.location} ({selectedCandidate.postcode})</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-payra-text mb-3">Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCandidate.subjects.map((subject) => (
                      <span key={subject} className="px-3 py-1 bg-payra-purple/10 text-payra-purple rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-payra-text mb-3">Qualifications</h3>
                  <div className="space-y-2">
                    {selectedCandidate.qualifications.map((qual, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Award size={14} className="text-payra-purple" />
                        <span>{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-payra-text mb-3">Rate & Availability</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-payra-purple">£{selectedCandidate.dailyRate}/day</div>
                    <div className="text-sm text-payra-text/70">Current status: {selectedCandidate.availability}</div>
                    {selectedCandidate.lastContact && (
                      <div className="text-sm text-payra-text/70">Last contact: {selectedCandidate.lastContact}</div>
                    )}
                  </div>
                </div>

                {selectedCandidate.notes && (
                  <div>
                    <h3 className="font-semibold text-payra-text mb-3">Notes</h3>
                    <div className="p-3 bg-payra-lavender/20 rounded-lg text-sm">
                      {selectedCandidate.notes}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-4">
                  <motion.button
                    onClick={() => handleContact(selectedCandidate, 'phone')}
                    className="payra-button flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={16} />
                    Call {selectedCandidate.name}
                  </motion.button>
                  <motion.button
                    onClick={() => handleContact(selectedCandidate, 'email')}
                    className="payra-button-secondary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={16} />
                    Send Email
                  </motion.button>
                  <motion.button
                    onClick={() => handleInterview(selectedCandidate)}
                    className="payra-button flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users size={16} />
                    Schedule Interview
                  </motion.button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-payra-text/60">
              <Users size={48} className="mx-auto mb-4 text-payra-purple/30" />
              <p>Select a candidate to view details</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default RecruitStaffView 