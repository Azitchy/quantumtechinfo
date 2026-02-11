import React, { useState } from 'react'

export const header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Our Services', href: '#services' },
    { label: 'Apply for Job', href: '#apply' },
    { label: 'Latest Notice', href: '#notice' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-purple-800 shadow-lg animate-in fade-in duration-600">
      <div className="max-w-6xl mx-auto px-5 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center animate-in fade-in slide-in-from-left-12 duration-800">
          <h1 className="text-3xl font-black text-white uppercase tracking-widest cursor-pointer hover:drop-shadow-lg hover:scale-105 transition-all duration-300">
            <span a href="">Q-TECH</span>
          </h1>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2.5 transition-all duration-300 animate-in fade-in slide-in-from-right-12 duration-800 ${
            isOpen ? 'gap-2' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          ></span>
          <span
            className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          ></span>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-gradient-to-r from-purple-600 to-purple-800 md:bg-none flex flex-col md:flex-row transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0 md:max-h-full'
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-0 md:gap-1 py-3 md:py-0 md:m-0">
            {menuItems.map((item, index) => (
              <li key={index} className="w-full md:w-auto animate-in fade-in slide-in-from-right-8 duration-800">
                <a
                  href={item.href}
                  className="block px-5 md:px-4 py-4 md:py-3 text-white font-semibold text-base md:text-sm tracking-tight hover:text-yellow-300 hover:bg-white/10 md:hover:bg-white/10 transition-all duration-300 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-5 md:left-4 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-300 group-hover:w-[calc(100%-40px)] md:group-hover:w-[calc(100%-32px)]"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
