import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Building, Phone, Mail, CheckCircle, Clock, AlertTriangle } from 'lucide-react'
import { mockSchools } from '../../data/mockData'
import { School } from '../../types'

interface ServiceClientsViewProps {
  onBack: () => void
}

const ServiceClientsView: React.FC<ServiceClientsViewProps> = ({ onBack }) => {
  const [selectedClient, setSelectedClient] = useState<School | null>(null)
  
  // Filter for existing clients (active and pending status)
  const existingClients = mockSchools.filter(school => 
    school.status === 'active' || school.status === 'pending'
  )

  const handleContact = (client: School, method: 'phone' | 'email') => {
    console.log(`Contacting ${client.name} via ${method}`)
    // In a real app, this would initiate contact
  }

  const handleMarkComplete = (client: School) => {
    console.log(`Marking follow-up complete for ${client.name}`)
    // In a real app, this would update the database
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-orange-600 bg-orange-100'
      case 'inactive': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getLastContactStatus = (lastContact?: string) => {
    if (!lastContact) return { color: 'text-red-600', icon: AlertTriangle, text: 'No contact' }
    
    const contactDate = new Date(lastContact)
    const daysSince = Math.floor((Date.now() - contactDate.getTime()) / (1000 * 60 * 60 * 24))
    
    if (daysSince > 14) return { color: 'text-red-600', icon: AlertTriangle, text: `${daysSince} days ago` }
    if (daysSince > 7) return { color: 'text-orange-600', icon: Clock, text: `${daysSince} days ago` }
    return { color: 'text-green-600', icon: CheckCircle, text: `${daysSince} days ago` }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <motion.div 
        className="bg-white/80 backdrop-blur-sm border-b border-payra-purple/10 p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-payra-purple hover:text-payra-purple/80 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Dashboard</span>
            </button>
            <div className="w-px h-6 bg-payra-purple/20"></div>
            <h1 className="text-2xl font-bold text-payra-text">Service Existing Clients</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-payra-text/70">
              {existingClients.length} active clients
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-1 overflow-hidden">
        {/* Clients List */}
        <motion.div 
          className="w-2/3 flex flex-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Summary Cards */}
          <div className="p-6 bg-white/40 backdrop-blur-sm border-b border-payra-purple/10">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="font-medium text-payra-text">Active Clients</span>
                </div>
                <p className="text-2xl font-bold text-payra-text">
                  {existingClients.filter(c => c.status === 'active').length}
                </p>
              </div>
              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={20} className="text-orange-600" />
                  <span className="font-medium text-payra-text">Pending</span>
                </div>
                <p className="text-2xl font-bold text-payra-text">
                  {existingClients.filter(c => c.status === 'pending').length}
                </p>
              </div>
              <div className="bg-white/60 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={20} className="text-red-600" />
                  <span className="font-medium text-payra-text">Need Follow-up</span>
                </div>
                <p className="text-2xl font-bold text-payra-text">
                  {existingClients.filter(c => !c.lastContact || 
                    Math.floor((Date.now() - new Date(c.lastContact).getTime()) / (1000 * 60 * 60 * 24)) > 7
                  ).length}
                </p>
              </div>
            </div>
          </div>

          {/* Clients List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {existingClients.map((client, index) => {
              const contactStatus = getLastContactStatus(client.lastContact)
              return (
                <motion.div
                  key={client.id}
                  className={`payra-card p-4 cursor-pointer transition-all duration-200 ${
                    selectedClient?.id === client.id ? 'ring-2 ring-payra-purple/50 bg-payra-lavender/50' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedClient(client)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <h3 className="font-semibold text-payra-text">{client.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                          {client.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-payra-text/70 mb-2">
                        <div className="flex items-center gap-1">
                          <Building size={14} />
                          <span>{client.headteacher}</span>
                        </div>
                        <div className={`flex items-center gap-1 ${contactStatus.color}`}>
                          <contactStatus.icon size={14} />
                          <span>Last contact: {contactStatus.text}</span>
                        </div>
                      </div>
                      <p className="text-sm text-payra-text/80">{client.notes}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleContact(client, 'phone')
                        }}
                        className="flex items-center gap-1 px-3 py-1 bg-payra-purple text-white rounded-lg hover:bg-payra-purple/90 transition-colors text-sm"
                      >
                        <Phone size={14} />
                        Call
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleContact(client, 'email')
                        }}
                        className="flex items-center gap-1 px-3 py-1 bg-payra-lavender text-payra-text rounded-lg hover:bg-payra-lavender/80 transition-colors text-sm"
                      >
                        <Mail size={14} />
                        Email
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Client Details Panel */}
        <motion.div 
          className="w-1/3 bg-white/60 backdrop-blur-sm border-l border-payra-purple/10 p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {selectedClient ? (
            <div>
              <h2 className="text-xl font-bold text-payra-text mb-4">{selectedClient.name}</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-payra-text mb-1">Contact Information</label>
                  <div className="space-y-1">
                    <p className="text-payra-text/80">{selectedClient.headteacher}</p>
                    <p className="text-payra-text/80">{selectedClient.phone}</p>
                    <p className="text-payra-text/80">{selectedClient.email}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-payra-text mb-1">Address</label>
                  <p className="text-payra-text/80">{selectedClient.address}</p>
                  <p className="text-payra-text/80">{selectedClient.postcode}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-payra-text mb-1">Current Needs</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedClient.subjects.map((subject) => (
                      <span key={subject} className="px-2 py-1 bg-payra-lavender/50 text-payra-text rounded-lg text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-payra-text mb-1">Last Contact</label>
                  <p className="text-payra-text/80">
                    {selectedClient.lastContact ? new Date(selectedClient.lastContact).toLocaleDateString() : 'No previous contact'}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-payra-text mb-1">Notes</label>
                  <p className="text-payra-text/80">{selectedClient.notes}</p>
                </div>
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => handleContact(selectedClient, 'phone')}
                    className="w-full payra-button flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Call Client
                  </button>
                  <button
                    onClick={() => handleContact(selectedClient, 'email')}
                    className="w-full bg-payra-lavender hover:bg-payra-lavender/80 text-payra-text font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Mail size={18} />
                    Send Email
                  </button>
                  <button
                    onClick={() => handleMarkComplete(selectedClient)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={18} />
                    Mark Follow-up Complete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-payra-text/60 mt-20">
              <Building size={48} className="mx-auto mb-4 opacity-50" />
              <p>Select a client to view details</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ServiceClientsView 