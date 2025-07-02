import React from 'react'

interface StatusBadgeProps {
  status: string
  variant?: 'urgency' | 'availability' | 'general'
  className?: string
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, variant = 'general', className = '' }) => {
  const getStatusClass = () => {
    if (variant === 'urgency') {
      switch (status) {
        case 'high': return 'status-high'
        case 'medium': return 'status-medium'
        case 'low': return 'status-low'
        default: return 'status-medium'
      }
    }
    
    if (variant === 'availability') {
      switch (status) {
        case 'available': return 'status-available'
        case 'interviewing': return 'status-interviewing'
        case 'placed': return 'status-placed'
        case 'unavailable': return 'status-medium'
        case 'active': return 'status-active'
        case 'pending': return 'status-pending'
        default: return 'status-medium'
      }
    }
    
    return 'status-medium'
  }

  return (
    <span className={`status-badge ${getStatusClass()} ${className}`}>
      {status}
    </span>
  )
}

export default StatusBadge 