import React, { useState } from 'react'

export const ApplyForJob = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: ''
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
    alert('Thank you for your application! We will review it and contact you soon.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: ''
    })
  }

  const positions = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Mobile Developer',
    'DevOps Engineer',
    'Data Scientist',
    'UI/UX Designer',
    'QA Engineer',
    'Project Manager',
    'Business Analyst'
  ]

  return (
    <section id="apply" className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-5">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600">Apply for an exciting career opportunity at Q-TECH INFO</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Available Positions */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-600 mb-6">Open Positions</h2>
              <div className="space-y-3">
                {positions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-600"
                  >
                    <h3 className="font-semibold text-gray-900">{position}</h3>
                    <p className="text-sm text-gray-600 mt-1">Full-time | Remote/On-site</p>
                    <button className="text-purple-600 text-sm font-semibold mt-2 hover:text-purple-800">
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-600 mb-6">Apply Now</h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position Applied *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a position</option>
                    {positions.map((pos, index) => (
                      <option key={index} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    placeholder="5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume / Cover Letter</label>
                  <textarea
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your experience and why you're a great fit..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 bg-purple-50 p-8 rounded-lg border border-purple-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Working with Us</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span className="text-gray-700">Competitive salary and benefits package</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <span className="text-gray-700">Continuous learning opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏢</span>
                <span className="text-gray-700">Remote and flexible work options</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤝</span>
                <span className="text-gray-700">Collaborative and supportive team</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="text-gray-700">Career growth and advancement</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <span className="text-gray-700">Team events and celebrations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
