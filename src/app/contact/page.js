'use client';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['(301) 798-7191', 'Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@upscalemsgroup.com', 'careers@upscalemsgroup.com', 'Response within 24 hours'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Healthcare Blvd, Suite 200', 'Baltimore, MD 21201', 'United States'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const offices = [
    {
      name: 'Baltimore Office',
      address: '123 Healthcare Blvd, Suite 200',
      city: 'Baltimore, MD 21201',
      phone: '(301) 798-7191',
      email: 'baltimore@upscalemsgroup.com',
      manager: 'Sarah Johnson, Regional Director'
    },
    {
      name: 'Rockville Office',
      address: '456 Medical Center Dr, Suite 150',
      city: 'Rockville, MD 20850',
      phone: '(301) 798-7192',
      email: 'rockville@upscalemsgroup.com',
      manager: 'Michael Chen, Branch Manager'
    },
    {
      name: 'Annapolis Office',
      address: '789 Capital Way, Suite 300',
      city: 'Annapolis, MD 21401',
      phone: '(301) 798-7193',
      email: 'annapolis@upscalemsgroup.com',
      manager: 'Dr. Emily Rodriguez, Clinical Director'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you fill a position?',
      answer: 'We typically fill positions within 24-72 hours for urgent needs, and 1-2 weeks for regular placements, depending on the specific requirements and availability.'
    },
    {
      question: 'Do you provide temporary or permanent placements?',
      answer: 'We offer both temporary and permanent placements, as well as temp-to-perm opportunities to meet your specific staffing needs.'
    },
    {
      question: 'What is your screening process?',
      answer: 'Our comprehensive screening includes background checks, license verification, skills assessment, reference checks, and clinical competency evaluations.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 support for urgent staffing needs and any issues that may arise with our placed professionals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      {/* Hero Section - Healthcare Staffing Solution */}
      <section className="relative py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional Healthcare
                <span className="block" style={{color: '#0d74bb'}}>
                  Staffing Solution
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Connect with our expert team to streamline your healthcare staffing needs with AI-powered matching and 24/7 support while reducing time-to-hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{background: '#0d74bb'}}
                  onMouseEnter={(e) => e.target.style.background = '#0a5a94'}
                  onMouseLeave={(e) => e.target.style.background = '#0d74bb'}
                >
                  Contact Our Team
                </button>
                <button className="px-8 py-4 rounded-full font-semibold text-white border-2 border-gray-400 hover:border-white transition-all duration-300">
                  View Our Services
                </button>
              </div>
            </div>
            
            {/* Right Content - Interactive Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                {/* Professional Avatar */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mr-4">
                    👩‍⚕️
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Sarah Johnson</div>
                    <div className="text-gray-400">Healthcare Staffing Specialist</div>
                  </div>
                </div>
                
                {/* Chat Bubbles */}
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-yellow-500 text-black px-4 py-3 rounded-2xl rounded-bl-sm max-w-xs">
                      <div className="flex items-center mb-1">
                        <span className="text-sm">👋</span>
                        <span className="ml-2 font-medium">Hello! How can I help you with staffing today?</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-br-sm max-w-xs">
                      I need to fill 5 nursing positions urgently
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-yellow-500 text-black px-4 py-3 rounded-2xl rounded-bl-sm max-w-xs">
                      <div className="font-medium mb-1">Perfect! Let me connect you with our rapid placement team.</div>
                    </div>
                  </div>
                </div>
                
                {/* Status Indicators */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl animate-pulse">
                  🚨
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm">
                  ✓
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-2">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{color: '#0d74bb'}}>24/7</div>
                  <div className="text-xs text-gray-600">Available</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 right-8 bg-white rounded-lg shadow-lg px-4 py-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">&lt;2hrs</div>
                  <div className="text-xs text-gray-600">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Form and Map */}
      <section className="py-20 px-4" style={{background: 'linear-gradient(to right, #eff6ff, #f0f9ff)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-semibold mb-2" style={{color: '#0d74bb'}}>Contact us</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch with Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to answer your questions, discuss your project, and help you find the best solutions for your software needs.
              Reach out to us, and let's start building something great together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Let's Talk About Your Project</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                  <div className="flex items-center">
                    <span className="mr-2">✅</span>
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{'--tw-ring-color': '#0d74bb'}}
                    onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                    onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{'--tw-ring-color': '#0d74bb'}}
                    onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                    onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                    placeholder="We'll get back to you here"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{'--tw-ring-color': '#0d74bb'}}
                    onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                    onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                    placeholder="Let us know who you represent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{'--tw-ring-color': '#0d74bb'}}
                    onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                    onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{'--tw-ring-color': '#0d74bb'}}
                    onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                    onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                    placeholder="Tell us how we can help"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 text-white rounded-lg font-semibold transition-all duration-300"
                  style={{backgroundColor: '#0d74bb'}}
                  onMouseEnter={(e) => {e.target.style.backgroundColor = '#0a5a94'}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = '#0d74bb'}}
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info and Map */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Prefer a Direct Approach?</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-3" style={{color: '#0d74bb'}}>📞</span>
                    <span>+62-8234-5674-8901</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-3" style={{color: '#0d74bb'}}>✉️</span>
                    <span>info@upscalemsgroup.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-3" style={{color: '#0d74bb'}}>🕒</span>
                    <span>Monday to Friday, 9 AM - 6 PM (GMT)</span>
                  </div>
                </div>
              </div>
              
              {/* Map Section */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-128 bg-gray-200 relative overflow-hidden">
                  {/* Embedded Google Map */}
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.2900839254753!2d-76.90142262405783!3d39.00869577170047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c3e962c19465%3A0xe604245a23713c56!2s6301%20Ivy%20Ln%20%23512%2C%20Greenbelt%2C%20MD%2020770%2C%20USA!5e0!3m2!1sen!2sng!4v1757769392756!5m2!1sen!2sng"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     className="rounded-lg"
                   ></iframe>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
        <section className="py-20 px-4" style={{background: '#0d74bb'}}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">🚨</div>
            <h2 className="text-4xl font-bold mb-6">Emergency Staffing Needs?</h2>
            <p className="text-xl mb-8 opacity-90">
              We understand that healthcare emergencies don't wait. Our 24/7 emergency line ensures you get the staff you need, when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13017987191" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300" style={{color: '#0d74bb'}}>
                📞 Call Emergency Line
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors duration-300" style={{'--hover-color': '#0d74bb'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#0d74bb'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'}}>
                📧 Emergency Email
              </button>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                 <img src="/logo.png" alt="Upscale Staffing" className="h-12 w-auto" />
               </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
                Connecting exceptional healthcare professionals with leading medical institutions. Your trusted partner in building world-class medical teams.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer" style={{background: 'linear-gradient(to bottom right, #3b82f6, #0d74bb)'}}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>About Us</a></li>
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Our Team</a></li>
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Careers</a></li>
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Contact</a></li>
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>News & Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Clinical Staffing</a></li>
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Non-Clinical Staff</a></li>
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Flexible Coverage</a></li>
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Workforce Compliance</a></li>
                <li><a href="#" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Talent Acquisition</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Contact Info</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{color: '#0d74bb'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(301) 798-7191</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{color: '#0d74bb'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@upscalemsgroup.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1" style={{color: '#0d74bb'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="block">Upscale Management Solutions</span>
                    <span className="block">Healthcare Staffing Division</span>
                    <span className="block">6301 Ivy Lane Suite 512</span>
                <span className="block">Greenbelt Maryland 20770</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">&copy; 2024 Upscale Staffing. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 transition-colors duration-300" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Privacy Policy</a>
                <a href="#" className="text-gray-400 transition-colors duration-300" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Terms of Service</a>
                <a href="#" className="text-gray-400 transition-colors duration-300" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}