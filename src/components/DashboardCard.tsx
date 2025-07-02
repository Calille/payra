import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface DashboardCardProps {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  delay: number
  onClick: () => void
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon,
  gradient,
  delay,
  onClick
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden payra-card cursor-pointer h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background Gradient Overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        initial={false}
      />
      
      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {icon}
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-payra-text mb-3 group-hover:text-payra-purple transition-colors duration-200">
            {title}
          </h2>
          <p className="text-payra-text/70 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Arrow */}
        <motion.div
          className="flex items-center justify-end mt-6"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          <motion.div
            className="flex items-center gap-2 text-payra-purple font-medium text-sm group-hover:gap-3 transition-all duration-200"
            whileHover={{ x: 5 }}
          >
            <span>Get Started</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.div>
        </motion.div>
      </div>

      {/* Hover Effect Ring */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-payra-purple/20 transition-all duration-300"
        initial={false}
      />
    </motion.div>
  )
}

export default DashboardCard 