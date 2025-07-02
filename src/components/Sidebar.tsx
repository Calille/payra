import React from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  School, 
  Users, 
  Calendar, 
  Shield, 
  Settings 
} from 'lucide-react'
import { DashboardAction } from '../types'

interface SidebarItem {
  id: string
  label: string
  icon: React.ReactNode
  action: DashboardAction
}

const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, action: 'dashboard' },
  { id: 'schools', label: 'Schools', icon: <School size={20} />, action: 'call-schools' },
  { id: 'staff', label: 'Staff Pipeline', icon: <Users size={20} />, action: 'recruit-staff' },
  { id: 'bookings', label: 'Bookings', icon: <Calendar size={20} />, action: 'bookings' },
  { id: 'compliance', label: 'Compliance', icon: <Shield size={20} />, action: 'dashboard' },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} />, action: 'dashboard' },
]

interface SidebarProps {
  currentView: DashboardAction
  onNavigate: (view: DashboardAction) => void
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const getActiveItem = () => {
    switch (currentView) {
      case 'call-schools':
        return 'schools'
      case 'recruit-staff':
        return 'staff'
      case 'bookings':
        return 'bookings'
      default:
        return 'dashboard'
    }
  }

  const activeItem = getActiveItem()

  return (
    <motion.aside 
      className="w-64 bg-white/50 backdrop-blur-sm border-r border-payra-purple/10 p-4 flex flex-col"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <nav className="flex-1 space-y-2">
        {sidebarItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          >
            <button
              onClick={() => onNavigate(item.action)}
              className={`sidebar-item w-full text-left ${
                activeItem === item.id ? 'active' : ''
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          </motion.div>
        ))}
      </nav>
    </motion.aside>
  )
}

export default Sidebar 