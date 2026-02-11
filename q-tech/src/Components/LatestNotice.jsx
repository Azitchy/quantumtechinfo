import React from 'react'

export const LatestNotice = () => {
  const notices = [
    {
      id: 1,
      title: 'System Maintenance Schedule',
      date: '2026-02-15',
      category: 'Maintenance',
      content: 'Our systems will undergo scheduled maintenance on February 15-16, 2026. Services may be temporarily unavailable. We apologize for any inconvenience.',
      priority: 'high'
    },
    {
      id: 2,
      title: 'New AI Services Launch',
      date: '2026-02-12',
      category: 'New Feature',
      content: 'We are excited to announce the launch of our new AI-powered analytics service. Sign up now to get exclusive early-bird pricing.',
      priority: 'normal'
    },
    {
      id: 3,
      title: 'Recruitment Drive 2026',
      date: '2026-02-10',
      category: 'Recruitment',
      content: 'Join our team! We are hiring 50+ positions across various departments. Check our careers page and apply now.',
      priority: 'normal'
    },
    {
      id: 4,
      title: 'Security Update v2.5.1',
      date: '2026-02-08',
      category: 'Security',
      content: 'Important security update released. Please update your account password to ensure maximum security.',
      priority: 'high'
    },
    {
      id: 5,
      title: 'Q1 2026 Product Roadmap',
      date: '2026-02-05',
      category: 'Product Update',
      content: 'Check out our exciting plans for Q1 2026 including new features, improvements, and enhanced user experience.',
      priority: 'normal'
    },
    {
      id: 6,
      title: 'Client Success Stories',
      date: '2026-02-01',
      category: 'Client Highlight',
      content: 'Read how leading companies are achieving their goals with our solutions. Inspiring case studies inside.',
      priority: 'normal'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Maintenance': 'bg-yellow-100 text-yellow-800',
      'New Feature': 'bg-blue-100 text-blue-800',
      'Recruitment': 'bg-green-100 text-green-800',
      'Security': 'bg-red-100 text-red-800',
      'Product Update': 'bg-purple-100 text-purple-800',
      'Client Highlight': 'bg-pink-100 text-pink-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <section id="notice" className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Latest Notices</h1>
            <p className="text-xl text-gray-600">Stay updated with important announcements and news</p>
          </div>

          {/* Important Notices Highlight */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-600 mb-6">⚠️ Important Notices</h2>
            <div className="space-y-4">
              {notices
                .filter(notice => notice.priority === 'high')
                .map((notice) => (
                  <div
                    key={notice.id}
                    className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{notice.title}</h3>
                      <span className="text-red-600 font-semibold text-sm">HIGH PRIORITY</span>
                    </div>
                    <p className="text-gray-700 mb-3">{notice.content}</p>
                    <p className="text-sm text-gray-500">📅 {formatDate(notice.date)}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* All Notices */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-6">All Notices</h2>
            <div className="space-y-4">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{notice.title}</h3>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
                            notice.category
                          )}`}
                        >
                          {notice.category}
                        </span>
                        <span className="text-sm text-gray-500">📅 {formatDate(notice.date)}</span>
                      </div>
                    </div>
                    {notice.priority === 'high' && (
                      <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        URGENT
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 line-clamp-2 mb-3">{notice.content}</p>
                  <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Never Miss an Update</h2>
            <p className="mb-6 text-lg">Subscribe to our newsletter to get the latest notices and announcements directly to your inbox.</p>
            <form className="flex flex-col md:flex-row gap-3 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-gray-900 min-w-sm outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
