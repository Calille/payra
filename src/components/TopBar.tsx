import React from 'react'
import { motion } from 'framer-motion'
import { Bell, User } from 'lucide-react'
import logo from '../assets/images/logo.webp'

const TopBar: React.FC = () => {
  return (
    <motion.header 
      className="w-full bg-white/70 backdrop-blur-md border-b border-payra-purple/10 px-6 py-4 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
             <motion.div 
         className="flex items-center"
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6, delay: 0.1 }}
       >
         <img 
           src={logo} 
           alt="Payra Logo" 
           className="h-14 w-auto object-contain"
         />
       </motion.div>

      {/* Right side - notifications and user */}
      <motion.div 
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Notifications */}
        <motion.button 
          className="relative p-2 text-payra-text hover:text-payra-purple transition-colors rounded-lg hover:bg-payra-purple/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </motion.button>

        {/* User Profile */}
        <motion.button 
          className="flex items-center gap-3 p-2 text-payra-text hover:text-payra-purple transition-colors rounded-lg hover:bg-payra-purple/10"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-8 h-8 bg-payra-purple/20 rounded-full flex items-center justify-center">
            <User size={16} className="text-payra-purple" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-sm font-medium">ConsultantName</div>
            <div className="text-xs text-payra-text/60">Senior Consultant</div>
          </div>
        </motion.button>
      </motion.div>
    </motion.header>
  )
}

export default TopBar 