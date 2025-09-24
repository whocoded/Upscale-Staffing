'use client';

import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-slideInDown {
          animation: slideInDown 0.6s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        .animate-delay-700 {
          animation-delay: 0.7s;
        }
        .animate-delay-800 {
          animation-delay: 0.8s;
        }
        .animate-delay-900 {
          animation-delay: 0.9s;
        }
        .animate-delay-1000 {
          animation-delay: 1s;
        }
        .animate-delay-1100 {
          animation-delay: 1.1s;
        }
        
        .hero-slider {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }
        
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 100vh;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
        }
        
        .slide.active {
          position: relative;
          min-height: 100vh;
          opacity: 1;
          visibility: visible;
        }
        
        .slider-dot.active {
          background-color: #0d74bb !important;
        }
      `}</style>
      <Navigation />

      {/* Hero Slider Section */}
      <section className="relative overflow-hidden">
        <div className="hero-slider relative">
          {/* Slide 1 - Healthcare Team */}
          <div className="slide active bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fadeInLeft">
                  <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight animate-fadeInUp">
                    Reliable, Flexible &
                    <span style={{color: '#0d74bb'}} className="block">Workforce Solutions</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fadeInUp animate-delay-200">
                    Upscale Staffing provides pre-vetted healthcare professionals when and where they are needed most. From hospitals to home health agencies, our staffing solutions deliver consistent, high-quality care.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp animate-delay-400">
                    <button className="text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{backgroundColor: '#0d74bb'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#0a5d96'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0d74bb'}>
                      Start Hiring
                    </button>
                    <button className="border-2 px-10 py-4 rounded-full font-bold text-lg hover:text-white transition-all duration-300" style={{borderColor: '#0d74bb', color: '#0d74bb'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#0d74bb'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#0d74bb';}}>
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="relative animate-fadeInRight">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-scaleIn animate-delay-200">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-purple-100 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#0d74bb'}}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900">Dr. Sarah Johnson</h3>
                        <p className="text-sm text-gray-600">Cardiologist</p>
                      </div>
                      <div className="bg-blue-100 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900">Mike Chen</h3>
                        <p className="text-sm text-gray-600">Nurse Practitioner</p>
                      </div>
                      <div className="bg-green-100 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900">Lisa Rodriguez</h3>
                        <p className="text-sm text-gray-600">Physical Therapist</p>
                      </div>
                      <div className="bg-yellow-100 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900">David Kim</h3>
                        <p className="text-sm text-gray-600">Radiologist</p>
                      </div>
                    </div>
                  </div>
                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300 animate-scaleIn animate-delay-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#0d74bb'}}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">500+</p>
                        <p className="text-sm text-gray-600">Placements</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300 animate-scaleIn animate-delay-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">98%</p>
                        <p className="text-sm text-gray-600">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - General Recruitment */}
          <div className="slide bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fadeInLeft">
                  <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fadeInUp">
                    Strengthening Healthcare
                    <span style={{color: '#0d74bb'}}> Through People</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fadeInUp animate-delay-200">
                    We match great people with organizations that depend on them, ensuring coverage, compliance, and peace of mind. Part of the trusted Upscale family of companies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animate-delay-400">
                    <button className="text-white px-8 py-4 rounded-full font-semibold shadow-lg" style={{backgroundColor: '#0d74bb'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#0a5d96'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0d74bb'}>
                      Find Jobs
                    </button>
                    <button className="border-2 px-8 py-4 rounded-full font-semibold" style={{borderColor: '#0d74bb', color: '#0d74bb'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#f0f9ff';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';}}>
                      Post a Job
                    </button>
                  </div>
                </div>
                <div className="relative animate-fadeInRight">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10 animate-scaleIn animate-delay-200">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background: `linear-gradient(to bottom right, #0d74bb, #0a5d96)`}}>
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-white">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                        <p className="font-medium" style={{color: '#0d74bb'}}>Senior Developer</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600 font-medium">Experience</span>
                        <span className="font-bold text-gray-900">5+ Years</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600 font-medium">Skills</span>
                        <span className="font-bold text-gray-900">React, Node.js</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600 font-medium">Location</span>
                        <span className="font-bold text-gray-900">New York</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20 animate-scaleIn animate-delay-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Mike Chen</p>
                        <p className="text-gray-500 text-xs">UI Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20 animate-scaleIn animate-delay-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Lisa Park</p>
                        <p className="text-gray-500 text-xs">Product Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20" style={{backgroundColor: '#0d74bb'}}></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          <button className="slider-dot active w-3 h-3 rounded-full transition-all duration-300" style={{backgroundColor: '#0d74bb'}} data-slide="0"></button>
          <button className="slider-dot w-3 h-3 rounded-full transition-all duration-300" style={{backgroundColor: '#a3c9f0'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#0d74bb'} onMouseLeave={(e) => e.target.style.backgroundColor = '#a3c9f0'} data-slide="1"></button>
        </div>

        {/* Navigation Arrows */}


      </section>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            let currentSlide = 0;
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            
            function showSlide(index) {
              slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
              });
              dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
              });
              currentSlide = index;
            }
            
            function nextSlide() {
              showSlide((currentSlide + 1) % slides.length);
            }
            
            function prevSlide() {
              showSlide((currentSlide - 1 + slides.length) % slides.length);
            }
            
            // Auto-slide every 5 seconds
            setInterval(nextSlide, 5000);
            
            dots.forEach((dot, index) => {
              dot.addEventListener('click', () => showSlide(index));
            });
          });
        `
      }} />



      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Upscale Staffing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive recruitment solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Talent First</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A carefully curated pool of qualified clinicians and support staff, ready to deploy quickly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Built-In</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Joint Commission–aligned credentialing, expiring-document alerts, and primary source verification.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-600">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data-Driven</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Fill-rate tracking, SLA monitoring, and performance dashboards for smarter workforce planning.
              </p>
            </div>
            <div className="p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-800" style={{background: 'linear-gradient(to bottom right, #e6f3ff, #cce7ff)'}}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(to bottom right, #0d74bb, #0a5d96)'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local & Travel Coverage</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Regional availability to help clients manage seasonal surges and hard-to-fill shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-fadeInLeft">
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                About Upscale Staffing
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Founded with a mission to transform healthcare staffing, we are dedicated to connecting exceptional healthcare professionals with leading medical facilities across the nation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <a href="/about" className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center" style={{backgroundColor: '#0d74bb'}}>
                  Learn More About Us
                </a>
                <a href="/about#team" className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center">
                  Meet Our Team
                </a>
              </div>
              {/* Company Values */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 mr-3 flex items-center justify-center">
                    <span className="text-blue-400 text-sm">🎯</span>
                  </div>
                  <span className="text-sm">Mission Driven</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 mr-3 flex items-center justify-center">
                    <span className="text-blue-400 text-sm">🤝</span>
                  </div>
                  <span className="text-sm">Trust & Integrity</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 mr-3 flex items-center justify-center">
                    <span className="text-blue-400 text-sm">💡</span>
                  </div>
                  <span className="text-sm">Innovation</span>
                </div>
              </div>
            </div>
            {/* Right Side - Company Image with Info */}
            <div className="relative animate-fadeInRight">
              <div className="relative rounded-3xl overflow-hidden" style={{backgroundColor: '#0d74bb'}}>
                <div className="p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Upscale Staffing Team" 
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  {/* Company Info Interface */}
                   <div className="absolute bottom-4 left-4 right-4">
                     <div className="bg-white rounded-2xl p-4 shadow-lg animate-bounce" style={{
                         animationDuration: '3s'
                       }}>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">US</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 text-sm font-semibold mb-1">
                            Upscale Staffing - Your Healthcare Career Partner
                          </p>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            Connecting talent with purpose since 2008. Join thousands of healthcare professionals who trust us with their careers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Online Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">A Leading Digital Provider Of Recruitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by companies worldwide to deliver exceptional talent solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animate-delay-200">
              <div className="text-5xl font-bold mb-3" style={{background: 'linear-gradient(to right, #0d74bb, #1e90ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>100+</div>
              <div className="text-gray-600 font-semibold text-lg">Companies</div>
              <div className="text-sm text-gray-500 mt-2">Trusted Partners</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animate-delay-400">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-3">10K+</div>
              <div className="text-gray-600 font-semibold text-lg">Job Seekers</div>
              <div className="text-sm text-gray-500 mt-2">Successfully Placed</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animate-delay-600">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">95%</div>
              <div className="text-gray-600 font-semibold text-lg">Success Rate</div>
              <div className="text-sm text-gray-500 mt-2">Client Satisfaction</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animate-delay-800">
              <div className="text-5xl font-bold mb-3" style={{background: 'linear-gradient(to right, #4f46e5, #0d74bb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>24/7</div>
              <div className="text-gray-600 font-semibold text-lg">Support</div>
              <div className="text-sm text-gray-500 mt-2">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Processes Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-fadeInLeft">
              <div className="mb-12">
                <h2 className="text-5xl font-bold text-gray-900 mb-12 leading-tight">
                  Our Processes
                </h2>
                
                {/* Process List */}
                <div className="space-y-12">
                  {/* Process 01 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-bold text-gray-900">01</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We assess your staffing needs, census patterns, and workflows.
                      </p>
                    </div>
                  </div>
                  
                  {/* Process 02 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-bold text-gray-900">02</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Curation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We match pre-screened talent that fits your culture and care requirements.
                      </p>
                    </div>
                  </div>
                  
                  {/* Process 03 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-bold text-gray-900">03</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Onboarding</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Seamless orientation, policy acknowledgment, and schedule integration.
                      </p>
                    </div>
                  </div>
                  
                  {/* Process 04 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-bold text-gray-900">04</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Performance</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ongoing quality checks, proactive support, and compliance reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-fadeInRight">
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl overflow-hidden shadow-2xl">
                {/* Healthcare Recruitment Image */}
                <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Healthcare recruitment professionals connecting nurses with medical facilities"
              className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative animate-fadeInLeft">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Team collaboration illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-blue-300/30"></div>
                  <div className="relative z-10 grid grid-cols-2 gap-4 p-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-700">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">HR Manager</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-700">Mike Chen</p>
                      <p className="text-xs text-gray-500">Recruiter</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-700">Lisa Rodriguez</p>
                      <p className="text-xs text-gray-500">Consultant</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-700">David Kim</p>
                      <p className="text-xs text-gray-500">Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="animate-fadeInRight">
              <div className="mb-8">
                <span className="font-semibold text-lg animate-fadeInUp" style={{color: '#0d74bb'}}>/ who we are /</span>
                <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6 animate-fadeInUp animate-delay-200">
                  Upscale Staffing
                  <span className="block" style={{color: '#0d74bb'}}>Healthcare Recruitment Excellence</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 animate-fadeInUp animate-delay-400">
                  At Upscale Staffing, we are dedicated to connecting healthcare organizations with exceptional talent. Our mission is to provide personalized, reliable staffing solutions that enhance patient care and support healthcare professionals in achieving their career goals.
                </p>
              </div>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fadeInUp animate-delay-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We take the time to understand your unique needs and provide tailored staffing solutions.
                  </p>
                </div>
                <div className="animate-fadeInUp animate-delay-700">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Candidates</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our rigorous screening process ensures we connect you with top-tier healthcare professionals.
                  </p>
                </div>
                <div className="animate-fadeInUp animate-delay-800">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable Partnership</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Count on us for consistent, dependable staffing support when you need it most.
                  </p>
                </div>
                <div className="animate-fadeInUp animate-delay-900">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deep understanding of healthcare industry requirements and compliance standards.
                  </p>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-4 gap-6 mt-12 animate-fadeInUp animate-delay-1000">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: '#0d74bb'}}>500+</div>
                  <div className="text-sm text-gray-600">Healthcare Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: '#0d74bb'}}>98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: '#0d74bb'}}>150+</div>
                  <div className="text-sm text-gray-600">Healthcare Facilities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: '#0d74bb'}}>24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6 animate-fadeInUp animate-delay-200">
              Comprehensive Healthcare
              <span className="block" style={{color: '#0d74bb'}}>Staffing Solutions</span>
            </h2>
            <div className="flex justify-end">
              <button className="text-white px-6 py-3 rounded-full text-sm font-medium transition-colors animate-fadeInUp animate-delay-400" style={{backgroundColor: '#0d74bb'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#1e40af'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0d74bb'}>
                See All Services
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Clinical Staffing */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp animate-delay-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Staffing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connecting healthcare facilities with qualified nurses, physicians, and clinical specialists to ensure optimal patient care and operational efficiency.
              </p>
              <a href="#" className="font-semibold transition-colors inline-flex items-center" style={{color: '#0d74bb'}} onMouseEnter={(e) => e.target.style.color = '#1e40af'} onMouseLeave={(e) => e.target.style.color = '#0d74bb'}>
                Explore Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <div className="mt-6 relative">
                <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl p-6 h-48 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-300/50 to-green-400/50 rounded-xl flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 w-full h-full p-4">
                      <div className="bg-white/80 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="bg-white/60 rounded-lg"></div>
                      <div className="bg-white/60 rounded-lg"></div>
                      <div className="bg-white/80 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Clinical & Administrative */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp animate-delay-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Clinical & Administrative</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Providing skilled administrative and support staff to streamline operations and enhance the overall efficiency of healthcare organizations.
              </p>
              <a href="#" className="font-semibold transition-colors inline-flex items-center" style={{color: '#0d74bb'}} onMouseEnter={(e) => e.target.style.color = '#1e40af'} onMouseLeave={(e) => e.target.style.color = '#0d74bb'}>
                Explore Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <div className="mt-6 relative">
                <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 h-48 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-300/50 to-blue-400/50 rounded-xl flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 w-full h-full p-4">
                      <div className="bg-white/80 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="bg-white/60 rounded-lg"></div>
                      <div className="bg-white/80 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="bg-white/60 rounded-lg col-span-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>






          </div>
        </div>
      </section>

      {/* SMS Marketing Style Section */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Healthcare staffing that gets results fast.
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Connect with top healthcare professionals through our proven recruitment channels. 
                We place qualified candidates where they're needed most: hospitals, clinics, 
                long-term care facilities, and specialized healthcare settings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg transform hover:scale-105"
                  style={{backgroundColor: '#0d74bb'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1e40af'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0d74bb'}
                >
                  Start recruiting
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Contact our team
                </button>
              </div>
            </div>

            {/* Right Content - Image Area */}
            <div className="relative animate-fadeInRight">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                {/* Notification Badge */}
                <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#0d74bb'}}></div>
                    <span className="text-sm font-medium">HEALTHCARE JOBS</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">
                    New opportunities! 🏥 Premium positions available
                    <span className="block" style={{color: '#0d74bb'}}>Apply now</span>
                  </p>
                </div>

                {/* Main Image Placeholder */}
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img src="/logo.png" alt="Healthcare Professional" className="w-full h-full object-contain" />
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-12 h-12" style={{color: '#0d74bb'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-semibold">Healthcare Professional</p>
                    <p className="text-gray-500 text-sm">Ready for new opportunities</p>
                  </div>
                </div>

                {/* Chat Bubble */}
                <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#0d74bb'}}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800">Upscale Staffing</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Perfect match found! New RN position at top-rated facility. 
                    <span className="font-semibold" style={{color: '#0d74bb'}}>Apply today!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Proven Results, Trusted Reviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our clients have transformed their hiring process and achieved remarkable results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp animate-delay-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mr-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Director of Nursing</h4>
                  <p className="text-blue-600 font-semibold text-sm">Assisted Living Facility</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">"Upscale provided us with highly qualified nurses and caregivers right when we needed them most. Their team is reliable, responsive, and always goes above and beyond to ensure patients receive quality care. We've built a lasting partnership we can trust."</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp animate-delay-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mr-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Director of Nursing</h4>
                  <p className="text-green-600 font-semibold text-sm">Assisted Living Facility</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">"Upscale provided us with highly qualified nurses and caregivers right when we needed them most. Their team is reliable, responsive, and always goes above and beyond to ensure patients receive quality care. We've built a lasting partnership we can trust."</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp animate-delay-600">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl mr-4 flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #e6f3ff, #cce7ff)'}}>
                  <svg className="w-8 h-8" style={{color: '#0d74bb'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Operations Manager</h4>
                  <p className="font-semibold text-sm" style={{color: '#0d74bb'}}>Long-Term Care Facility</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">"The staffing support we received for our maintenance and dietary departments has been excellent. Upscale quickly understood our needs and sent dependable staff who blended seamlessly with our team. It saved us time and stress."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #0d74bb, #0a5d96, #4f46e5)'}}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-6 animate-fadeInUp">Ready to Advance Your Healthcare Career?</h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200" style={{color: '#e6f3ff'}}>
            Join thousands of healthcare professionals who have found their dream positions through our trusted placement services
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animate-delay-400">
            <button className="bg-white px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{color: '#0d74bb'}}>
              Browse Jobs
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105" onMouseEnter={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#0d74bb';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white';}}>
              Apply Now
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fadeInUp animate-delay-600">
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-sm" style={{color: '#cce7ff'}}>Job Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">48h</div>
              <div className="text-sm" style={{color: '#cce7ff'}}>Average Match Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1,200+</div>
              <div className="text-sm" style={{color: '#cce7ff'}}>Active Job Openings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-sm" style={{color: '#cce7ff'}}>Healthcare Professionals Placed</div>
            </div>
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
