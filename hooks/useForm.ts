'use client'

import { useState } from 'react'
import { ContactFormData, ApiResponse } from '@/lib/types'

export function useForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result: ApiResponse<null> = await response.json()

      if (result.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setError(result.error || 'Something went wrong')
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { formData, handleChange, handleSubmit, loading, error, success }
}