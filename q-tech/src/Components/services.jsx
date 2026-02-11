import React from 'react'

export const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Professional web development services using modern technologies and best practices.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile application development for iOS and Android.'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Increase your online visibility with our comprehensive SEO strategies.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.'
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity',
      description: 'Protect your business with our comprehensive security solutions and consulting.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud services for your business needs on AWS, Azure, or GCP.'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Implement intelligent solutions with our AI and ML expertise.'
    },
    {
      icon: '📚',
      title: 'Training & Workshops',
      description: 'Upskill your team with our comprehensive training programs and workshops.'
    }
  ]

  return (
    <section id="services" className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive technology solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-12 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our experienced professionals bring years of expertise to every project.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous testing and quality checks ensure excellent results every time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock support to ensure your success and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
