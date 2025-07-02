import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Phone, 
  Video,
  CheckCircle,
  AlertCircle,
  Plus,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { mockBookings } from '../../data/mockData'
import { Booking } from '../../types'
import SearchInput from '../common/SearchInput'
import StatusBadge from '../common/StatusBadge'
import EmptyState from '../common/EmptyState'

interface BookingsViewProps {
  onBack: () => void
}

const BookingsView: React.FC<BookingsViewProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [activeTab, setActiveTab] = useState<'upcoming' | 'outstanding' | 'past'>('upcoming')

  const filteredBookings = useMemo(() => {
    const today = new Date().toISOString().split('T')[0]
    
    return mockBookings.filter(booking => {
      const matchesSearch = booking.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           booking.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           booking.participants.teacher?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           booking.participants.school?.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesType = filterType === 'all' || booking.type === filterType
      const matchesStatus = filterStatus === 'all' || booking.status === filterStatus
      
      // Tab-based filtering
      let matchesTab = false
      switch (activeTab) {
        case 'upcoming':
          matchesTab = booking.date >= today && booking.status !== 'cancelled'
          break
        case 'outstanding':
          matchesTab = (booking.status === 'pending' || 
                       (booking.date < today && booking.status === 'confirmed') ||
                       booking.priority === 'high')
          break
        case 'past':
          matchesTab = booking.date < today && booking.status === 'completed'
          break
      }
      
      return matchesSearch && matchesType && matchesStatus && matchesTab
    })
  }, [searchTerm, filterType, filterStatus, activeTab])

  const getBookingTypeColor = (type: string) => {
    switch (type) {
      case 'placement': return 'bg-green-100 text-green-700 border-green-200'
      case 'interview': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'school_visit': return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'follow_up': return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'training': return 'bg-pink-100 text-pink-700 border-pink-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getBookingTypeIcon = (type: string) => {
    switch (type) {
      case 'placement': return <Users size={16} />
      case 'interview': return <Video size={16} />
      case 'school_visit': return <MapPin size={16} />
      case 'follow_up': return <Phone size={16} />
      case 'training': return <CheckCircle size={16} />
      default: return <Calendar size={16} />
    }
  }

  const formatTime = (time: string) => {
    return new Date(`2024-01-01T${time}`).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  const getNextDay = () => {
    const next = new Date(selectedDate)
    next.setDate(next.getDate() + 1)
    return next.toISOString().split('T')[0]
  }

  const getPrevDay = () => {
    const prev = new Date(selectedDate)
    prev.setDate(prev.getDate() - 1)
    return prev.toISOString().split('T')[0]
  }

  const today = new Date().toISOString().split('T')[0]
  const upcomingBookings = mockBookings.filter(booking => booking.date >= today && booking.status !== 'cancelled')
  const outstandingBookings = mockBookings.filter(booking => 
    booking.status === 'pending' || 
    (booking.date < today && booking.status === 'confirmed') ||
    booking.priority === 'high'
  )
  const pastBookings = mockBookings.filter(booking => booking.date < today && booking.status === 'completed')

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
              <h1 className="text-2xl font-bold text-payra-text">Bookings & Schedule</h1>
              <p className="text-sm text-payra-text/60 mt-1">Manage placements, interviews, and appointments</p>
            </div>
          </div>
          
          <motion.button
            className="payra-button flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={16} />
            New Booking
          </motion.button>
        </div>
      </motion.div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar with filters and stats */}
        <motion.div 
          className="w-80 glass-panel border-r border-payra-purple/10 p-6 overflow-y-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Quick Stats */}
          <div className="mb-6">
            <h3 className="font-semibold text-payra-text mb-4">Overview</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <div className="text-xl font-bold text-green-600">{upcomingBookings.length}</div>
                <div className="text-xs text-payra-text/60">Upcoming</div>
              </div>
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <div className="text-xl font-bold text-orange-600">{outstandingBookings.length}</div>
                <div className="text-xs text-payra-text/60">Outstanding</div>
              </div>
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <div className="text-xl font-bold text-blue-600">{pastBookings.length}</div>
                <div className="text-xs text-payra-text/60">Past</div>
              </div>
              <div className="text-center p-3 bg-white/60 rounded-lg">
                <div className="text-xl font-bold text-payra-purple">{mockBookings.filter(b => b.status === 'confirmed').length}</div>
                <div className="text-xs text-payra-text/60">Confirmed</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search bookings..."
              className="w-full"
            />
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="payra-select w-full"
            >
              <option value="all">All Types</option>
              <option value="placement">Placements</option>
              <option value="interview">Interviews</option>
              <option value="school_visit">School Visits</option>
              <option value="follow_up">Follow-ups</option>
              <option value="training">Training</option>
            </select>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="payra-select w-full"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Booking Type Legend */}
          <div className="mt-8">
            <h4 className="font-medium text-payra-text mb-3">Booking Types</h4>
            <div className="space-y-2">
              {[
                { type: 'placement', label: 'Placements' },
                { type: 'interview', label: 'Interviews' },
                { type: 'school_visit', label: 'School Visits' },
                { type: 'follow_up', label: 'Follow-ups' },
                { type: 'training', label: 'Training' }
              ].map(({ type, label }) => (
                <div key={type} className="flex items-center gap-2">
                  <div className={`px-2 py-1 rounded text-xs ${getBookingTypeColor(type)} flex items-center gap-1`}>
                    {getBookingTypeIcon(type)}
                    <span>{label}</span>
                  </div>
                  <span className="text-xs text-payra-text/60">
                    {mockBookings.filter(b => b.type === type).length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="flex-1 flex flex-col overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Tabs */}
          <div className="p-6 pb-0">
            <div className="flex bg-white/60 rounded-xl p-1 border border-payra-purple/20 mb-6">
              {([
                { key: 'upcoming', label: 'Upcoming', count: upcomingBookings.length, color: 'text-green-600' },
                { key: 'outstanding', label: 'Outstanding', count: outstandingBookings.length, color: 'text-orange-600' },
                { key: 'past', label: 'Past', count: pastBookings.length, color: 'text-blue-600' }
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    activeTab === tab.key 
                      ? 'bg-payra-purple text-white shadow-sm' 
                      : 'text-payra-text/70 hover:text-payra-purple hover:bg-payra-purple/10'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeTab === tab.key 
                      ? 'bg-white/20 text-white' 
                      : `bg-gray-100 ${tab.color}`
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredBookings.length === 0 ? (
                  <EmptyState
                    icon={Calendar}
                    title={
                      activeTab === 'upcoming' ? 'No upcoming bookings' :
                      activeTab === 'outstanding' ? 'No outstanding bookings' :
                      'No past bookings'
                    }
                    description={
                      activeTab === 'upcoming' ? 'All your future bookings will appear here' :
                      activeTab === 'outstanding' ? 'Pending bookings and overdue items will appear here' :
                      'Completed bookings will appear here'
                    }
                    action={{
                      label: "Add Booking",
                      onClick: () => console.log("Add booking")
                    }}
                  />
                ) : (
                  filteredBookings
                    .sort((a, b) => {
                      // Sort by date first, then by time
                      const dateCompare = activeTab === 'past' 
                        ? b.date.localeCompare(a.date) // Past: newest first
                        : a.date.localeCompare(b.date) // Others: oldest first
                      return dateCompare || a.time.localeCompare(b.time)
                    })
                    .map((booking, index) => (
                      <motion.div
                        key={booking.id}
                        className="payra-card-mini p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`px-3 py-1 rounded-lg text-sm font-medium ${getBookingTypeColor(booking.type)} flex items-center gap-2`}>
                                {getBookingTypeIcon(booking.type)}
                                {booking.type.replace('_', ' ')}
                              </div>
                              <StatusBadge status={booking.status} variant="availability" />
                              {booking.priority === 'high' && (
                                <AlertCircle size={16} className="text-red-500" />
                              )}
                            </div>
                            
                            <h3 className="font-semibold text-payra-text text-lg mb-2">
                              {booking.title}
                            </h3>
                            <p className="text-payra-text/70 text-sm mb-3">
                              {booking.description}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm text-payra-text/70 mb-3">
                              <div className="flex items-center gap-2">
                                <Calendar size={14} />
                                <span>{new Date(booking.date).toLocaleDateString('en-GB')}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock size={14} />
                                <span>{formatTime(booking.time)} ({booking.duration}min)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={14} />
                                <span>{booking.location}</span>
                              </div>
                              {booking.participants.teacher && (
                                <div className="flex items-center gap-2">
                                  <Users size={14} />
                                  <span>{booking.participants.teacher}</span>
                                </div>
                              )}
                            </div>
                            
                            {booking.participants.school && (
                              <div className="flex items-center gap-2 text-sm text-payra-text/70 mb-3">
                                <Users size={14} />
                                <span>{booking.participants.school}</span>
                              </div>
                            )}
                            
                            {booking.notes && (
                              <div className="mt-3 p-3 bg-payra-lavender/20 rounded-lg">
                                <p className="text-sm text-payra-text/80">{booking.notes}</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-col gap-2 ml-4">
                            <motion.button
                              className="payra-button-small bg-payra-purple text-white"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Edit
                            </motion.button>
                            {activeTab !== 'past' && (
                              <>
                                {booking.location === 'Phone Call' ? (
                                  <motion.button
                                    className="payra-button-small bg-green-600 text-white flex items-center gap-1"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Phone size={14} />
                                    Call
                                  </motion.button>
                                ) : (
                                  <motion.button
                                    className="payra-button-small bg-blue-600 text-white flex items-center gap-1"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <MapPin size={14} />
                                    Directions
                                  </motion.button>
                                )}
                                {activeTab === 'outstanding' && booking.status === 'pending' && (
                                  <motion.button
                                    className="payra-button-small bg-green-600 text-white"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    Confirm
                                  </motion.button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BookingsView 