import { useState, useEffect } from 'react'
import { header as Header } from './Components/header.jsx'
import { About } from './Components/about.jsx'
import { Contact } from './Components/Contact.jsx'
import { Services } from './Components/services.jsx'
import { ApplyForJob } from './Components/ApplyForJob.jsx'
import { LatestNotice } from './Components/LatestNotice.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
      // Scroll to top
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial page
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'services':
        return <Services />
      case 'apply':
        return <ApplyForJob />
      case 'notice':
        return <LatestNotice />
      default:
        return (
          <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center px-5 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-6xl font-bold text-gray-900 mb-4">Welcome to Q-TECH INFO</h1>
              <p className="text-2xl text-gray-600 mb-8">Your Technology Information Hub</p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl">
                Discover cutting-edge technology solutions, expert services, and career opportunities.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="#about"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Learn About Us
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App
