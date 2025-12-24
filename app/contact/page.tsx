'use client'

import { useForm } from '@/hooks/useForm'
import Button from '@/components/common/Button'
import Container from '@/components/common/Container'

export default function ContactPage() {
  const { formData, handleChange, handleSubmit, loading, error, success } = useForm()

  return (
    <>
      <section className="bg-gray-50 py-20 px-4">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600">Have questions? Our team is ready to help.</p>
        </Container>
      </section>

      <section className="py-20 px-4">
        <Container>
          <div className="max-w-2xl">
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                Thank you! We'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}