import React from 'react'
import { motion } from 'framer-motion'
import DashboardCard from './DashboardCard'
import { Phone, Building, UserPlus, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import { DashboardAction } from '../types'

interface DashboardProps {
  onNavigate: (view: DashboardAction) => void
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const currentTime = new Date().getHours()
  const greeting = currentTime < 12 ? 'Good morning' : currentTime < 18 ? 'Good afternoon' : 'Good evening'
  
  const actionCards = [
    {
      id: 'call-schools',
      title: 'Call New Schools in Range',
      description: 'Find and contact schools within range of available teachers',
      icon: <Phone size={32} />,
      gradient: 'from-blue-500 to-purple-600',
      delay: 0.1,
      action: 'call-schools' as DashboardAction
    },
    {
      id: 'service-clients', 
      title: 'Service Existing Clients',
      description: 'Check in with current school clients and manage relationships',
      icon: <Building size={32} />,
      gradient: 'from-purple-600 to-pink-500',
      delay: 0.2,
      action: 'service-clients' as DashboardAction
    },
    {
      id: 'recruit-staff',
      title: 'Staff Pipeline',
      description: 'Source and interview potential teaching candidates',
      icon: <UserPlus size={32} />,
      gradient: 'from-pink-500 to-orange-500',
      delay: 0.3,
      action: 'recruit-staff' as DashboardAction
    }
  ]

  return (
    <div className="h-full flex flex-col p-8 overflow-y-auto">
      {/* Greeting Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-payra-text mb-3">
              {greeting}, ConsultantName 👋
            </h1>
            <p className="text-payra-text/70 text-xl">
              Choose your primary action for today
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-payra-text/60 mb-1">Today's Date</div>
            <div className="text-lg font-semibold text-payra-text">
              {new Date().toLocaleDateString('en-GB', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <motion.div 
          className="grid grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-panel-strong p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle size={20} className="text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-payra-text">12</div>
                <div className="text-xs text-payra-text/60">Active Schools</div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel-strong p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserPlus size={20} className="text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-payra-text">8</div>
                <div className="text-xs text-payra-text/60">Available Teachers</div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel-strong p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock size={20} className="text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-payra-text">5</div>
                <div className="text-xs text-payra-text/60">Pending Placements</div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel-strong p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp size={20} className="text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-payra-text">£2.4k</div>
                <div className="text-xs text-payra-text/60">This Week</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Action Cards */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {actionCards.map((card) => (
          <DashboardCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            gradient={card.gradient}
            delay={card.delay}
            onClick={() => onNavigate(card.action)}
          />
        ))}
      </motion.div>

      {/* Today's Goals & Quick Stats */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="glass-panel-strong rounded-xl p-6">
          <h3 className="font-bold text-payra-text mb-4 text-lg flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            Today's Goals
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-payra-purple rounded-full"></div>
              <span className="text-payra-text/80">Make 10 new school contacts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-payra-purple rounded-full"></div>
              <span className="text-payra-text/80">Follow up with 3 pending placements</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-payra-purple rounded-full"></div>
              <span className="text-payra-text/80">Interview 2 new candidates</span>
            </div>
          </div>
        </div>
        
        <div className="glass-panel-strong rounded-xl p-6">
          <h3 className="font-bold text-payra-text mb-4 text-lg flex items-center gap-2">
            <TrendingUp size={20} className="text-purple-600" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-payra-text/80 text-sm">St. Mary's Primary contacted</span>
              <span className="text-payra-text/60 text-xs">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-payra-text/80 text-sm">James Mitchell interviewed</span>
              <span className="text-payra-text/60 text-xs">Yesterday</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-payra-text/80 text-sm">New teacher registered</span>
              <span className="text-payra-text/60 text-xs">2 days ago</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard 