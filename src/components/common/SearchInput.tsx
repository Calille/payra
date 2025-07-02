import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  value, 
  onChange, 
  placeholder = "Search...", 
  className = "" 
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = () => {
    onChange('')
  }

  return (
    <div className={`relative ${className}`}>
      <Search 
        size={18} 
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
          isFocused ? 'text-payra-purple' : 'text-payra-text/50'
        }`} 
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`payra-input pl-10 ${value ? 'pr-10' : 'pr-4'} ${
          isFocused ? 'ring-2 ring-payra-purple/50' : ''
        }`}
      />
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-payra-text/50 hover:text-payra-purple transition-colors duration-200"
          >
            <X size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchInput 