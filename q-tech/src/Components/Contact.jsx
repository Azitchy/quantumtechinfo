import React, { useState } from 'react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-600 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">info@qtechinfo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-600 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
