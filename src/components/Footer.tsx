import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-white/30 backdrop-blur-sm border-t border-payra-purple/10 px-6 py-3 flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
    >
      <p className="text-payra-text/60 text-sm font-medium">
        Made with ❤️ by <span className="text-payra-purple font-semibold">Payra</span>
      </p>
    </motion.footer>
  )
}

export default Footer 