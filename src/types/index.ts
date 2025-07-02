// School types
export interface CallNote {
  id: string
  timestamp: string
  note: string
  outcome: 'interested' | 'not_interested' | 'callback_requested' | 'no_answer' | 'wrong_number'
  duration?: number // in minutes
}

export interface Placement {
  id: string
  teacherName: string
  teacherId: string
  subject: string
  startDate: string
  endDate: string
  dailyRate: number
  status: 'active' | 'completed' | 'cancelled'
  feedback?: string
  rating?: number
}

export interface School {
  id: string
  name: string
  address: string
  postcode: string
  phone: string
  email: string
  headteacher: string
  subjects: string[]
  urgency: 'high' | 'medium' | 'low'
  lastContact?: string
  notes: string
  distance: number
  callHistory: CallNote[]
  // Client relationship properties
  status: 'active' | 'pending' | 'inactive' | 'prospect'
  relationshipStart?: string
  totalPlacements: number
  activePlacements: number
  totalRevenue: number
  lastPlacementDate?: string
  placementHistory: Placement[]
  preferredDailyRate?: { min: number; max: number }
  paymentTerms: 'weekly' | 'monthly' | 'end_of_assignment'
  invoiceContact?: string
  satisfactionRating?: number
}

// Staff/Candidate types
export interface Candidate {
  id: string
  name: string
  email: string
  phone: string
  subjects: string[]
  experience: number
  dailyRate: number
  location: string
  postcode: string
  availability: 'available' | 'interviewing' | 'placed' | 'unavailable'
  rating: number
  lastContact?: string
  notes: string
  qualifications: string[]
}

// Job types
export interface Job {
  id: string
  title: string
  school: string
  subject: string
  startDate: string
  endDate: string
  dailyRate: number
  requirements: string[]
  status: 'open' | 'filled' | 'cancelled'
  description: string
}

// Booking types
export interface Booking {
  id: string
  type: 'placement' | 'interview' | 'school_visit' | 'follow_up' | 'training'
  title: string
  description: string
  date: string
  time: string
  duration: number // in minutes
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed'
  participants: {
    teacher?: string
    school?: string
    contact?: string
  }
  location: string
  notes?: string
  reminder?: boolean
  priority: 'high' | 'medium' | 'low'
}

// Dashboard action types
export type DashboardAction = 'dashboard' | 'call-schools' | 'service-clients' | 'recruit-staff' | 'bookings' 