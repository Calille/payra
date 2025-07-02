import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Clock, MessageSquare } from 'lucide-react'
import { School, CallNote } from '../../types'

interface CallNoteModalProps {
  isOpen: boolean
  onClose: () => void
  school: School
  onSaveNote: (note: CallNote) => void
}

const CallNoteModal: React.FC<CallNoteModalProps> = ({ isOpen, onClose, school, onSaveNote }) => {
  const [note, setNote] = useState('')
  const [outcome, setOutcome] = useState<CallNote['outcome']>('interested')
  const [duration, setDuration] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!note.trim()) return

    setIsSubmitting(true)
    
    const newCallNote: CallNote = {
      id: `call-${school.id}-${Date.now()}`,
      timestamp: new Date().toISOString(),
      note: note.trim(),
      outcome,
      duration: duration ? parseInt(duration) : undefined
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    onSaveNote(newCallNote)
    setIsSubmitting(false)
    
    // Reset form
    setNote('')
    setOutcome('interested')
    setDuration('')
    onClose()
  }

  const outcomeOptions = [
    { value: 'interested', label: 'Interested', color: 'text-green-600' },
    { value: 'not_interested', label: 'Not Interested', color: 'text-red-600' },
    { value: 'callback_requested', label: 'Callback Requested', color: 'text-blue-600' },
    { value: 'no_answer', label: 'No Answer', color: 'text-gray-600' },
    { value: 'wrong_number', label: 'Wrong Number', color: 'text-orange-600' }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-panel-strong rounded-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-payra-purple/10 rounded-lg">
                  <Phone size={20} className="text-payra-purple" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-payra-text">Call Note</h2>
                  <p className="text-sm text-payra-text/60">{school.name}</p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-payra-purple/10 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} className="text-payra-text/60" />
              </motion.button>
            </div>

            {/* School Info */}
            <div className="mb-6 p-4 bg-payra-lavender/10 rounded-lg">
              <div className="text-sm text-payra-text/70 mb-1">Calling</div>
              <div className="font-semibold text-payra-text">{school.phone}</div>
              <div className="text-sm text-payra-text/60">{school.headteacher}</div>
            </div>

            {/* Call Outcome */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-payra-text mb-3">
                Call Outcome *
              </label>
              <div className="grid grid-cols-1 gap-2">
                {outcomeOptions.map((option) => (
                  <motion.label
                    key={option.value}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      outcome === option.value
                        ? 'border-payra-purple bg-payra-purple/5'
                        : 'border-payra-purple/20 hover:border-payra-purple/40'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <input
                      type="radio"
                      name="outcome"
                      value={option.value}
                      checked={outcome === option.value}
                      onChange={(e) => setOutcome(e.target.value as CallNote['outcome'])}
                      className="sr-only"
                    />
                    <div className={`w-3 h-3 rounded-full border-2 ${
                      outcome === option.value ? 'bg-payra-purple border-payra-purple' : 'border-payra-purple/40'
                    }`} />
                    <span className={`font-medium ${option.color}`}>
                      {option.label}
                    </span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-payra-text mb-2">
                <Clock size={16} className="inline mr-1" />
                Call Duration (minutes)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Optional"
                min="1"
                max="120"
                className="payra-input w-full"
              />
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-payra-text mb-2">
                <MessageSquare size={16} className="inline mr-1" />
                Call Notes *
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What happened during the call? Any key points or follow-up actions needed..."
                rows={4}
                className="payra-input w-full resize-none"
                required
              />
              <div className="text-xs text-payra-text/50 mt-1">
                {note.length}/500 characters
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                onClick={onClose}
                className="payra-button-secondary flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={handleSubmit}
                className="payra-button flex-1 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!note.trim() || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Phone size={16} />
                    Save Call Note
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CallNoteModal 