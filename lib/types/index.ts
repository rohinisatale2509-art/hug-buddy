// Common types used throughout the app
export interface Feature {
    id: string
    icon: string
    title: string
    description: string
  }
  
  export interface TeamMember {
    id: string
    name: string
    role: string
    bio: string
    image?: string
  }
  
  export interface Solution {
    id: string
    title: string
    icon: string
    description: string
    features: string[]
  }
  
  export interface ContactFormData {
    name: string
    email: string
    company?: string
    subject: string
    message: string
  }
  
  export interface ApiResponse<T> {
    success: boolean
    data?: T
    error?: string
  }