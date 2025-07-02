import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  className = "" 
}) => {
  return (
    <motion.div
      className={`text-center py-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mx-auto mb-6 w-16 h-16 bg-payra-lavender/30 rounded-full flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Icon size={32} className="text-payra-purple/60" />
      </motion.div>
      
      <h3 className="text-lg font-semibold text-payra-text mb-2">{title}</h3>
      <p className="text-payra-text/60 text-sm mb-6 max-w-sm mx-auto">{description}</p>
      
      {action && (
        <motion.button
          onClick={action.onClick}
          className="payra-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {action.label}
        </motion.button>
      )}
    </motion.div>
  )
}

export default EmptyState 