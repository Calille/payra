import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import CallSchoolsView from './components/views/CallSchoolsView'
import ServiceClientsView from './components/views/ServiceClientsView'
import RecruitStaffView from './components/views/RecruitStaffView'
import BookingsView from './components/views/BookingsView'
import Footer from './components/Footer'
import { DashboardAction } from './types'

function App() {
  const [currentView, setCurrentView] = useState<DashboardAction>('dashboard')

  const handleNavigate = (view: DashboardAction) => {
    setCurrentView(view)
  }

  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
  }

  const renderMainContent = () => {
    switch (currentView) {
      case 'call-schools':
        return <CallSchoolsView onBack={handleBackToDashboard} />
      case 'service-clients':
        return <ServiceClientsView onBack={handleBackToDashboard} />
      case 'recruit-staff':
        return <RecruitStaffView onBack={handleBackToDashboard} />
      case 'bookings':
        return <BookingsView onBack={handleBackToDashboard} />
      default:
        return <Dashboard onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="h-full w-full flex flex-col bg-payra-offwhite overflow-hidden">
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar currentView={currentView} onNavigate={handleNavigate} />
        
        {/* Main Content */}
        <motion.main 
          className="flex-1 overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          key={currentView}
        >
          {renderMainContent()}
        </motion.main>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App 