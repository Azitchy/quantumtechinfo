import React from 'react'

export const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Q-TECH INFO, we are dedicated to empowering professionals and organizations with cutting-edge technology solutions and information. Our mission is to bridge the gap between innovation and accessibility.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe in continuous learning and growth, providing resources that help individuals and businesses stay ahead in the digital world.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To become a leading technology information hub that transforms ideas into reality and empowers communities through knowledge sharing.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We envision a world where technology is accessible to everyone, and expertise is shared freely to create a better tomorrow.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-purple-600 mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team consists of industry experts with years of experience in technology and innovation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Content</h3>
                <p className="text-gray-600">
                  We provide high-quality, up-to-date information and resources for all technology needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
                <p className="text-gray-600">
                  Join our growing community of tech enthusiasts and professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
