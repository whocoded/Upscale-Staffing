'use client';

import Image from "next/image";

export default function Home3() {
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
        .animate-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 animate-slideInDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-purple-600">UpStaffing</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Services</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">About</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Contact</a>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight animate-fadeInUp">
                Find Your Perfect
                <span className="text-purple-600 block">Healthcare Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fadeInUp animate-delay-200">
                Connect with top healthcare professionals and build your dream team. We specialize in matching the right talent with the right opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp animate-delay-400">
                <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Hiring
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-scaleIn animate-delay-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-purple-100 rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
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
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
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
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">A Leading Digital Provider Of Recruitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive recruitment solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-200">
              <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Talent Acquisition</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Find the best candidates for your company with our advanced screening process and AI-powered matching.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-400">
              <div className="w-full h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Background Verification</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive background checks and verification services to ensure you hire the right people.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-600">
              <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Building</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Build strong, cohesive teams with our expert guidance and cultural fit analysis.
              </p>
            </div>
          </div>
          
          {/* Second Row of Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-800">
              <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Hiring</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fast-track your hiring process with our streamlined recruitment solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-1000">
              <div className="w-full h-48 bg-gradient-to-br from-teal-200 to-teal-300 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reports</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get detailed insights and analytics on your recruitment performance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group animate-fadeInUp animate-delay-1200">
              <div className="w-full h-48 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee Care</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive employee support and wellness programs for better retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Section with Cards */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-white mb-6">Provide The Best Service</h2>
            <h3 className="text-3xl font-bold text-purple-200 mb-6">With Out Of The Box Thinking</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 animate-fadeInLeft animate-delay-200">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast & Efficient</h3>
              <p className="text-purple-100 leading-relaxed">
                Quick turnaround times with efficient processes that get results fast.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 animate-fadeInRight animate-delay-400">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Assured</h3>
              <p className="text-purple-100 leading-relaxed">
                Every candidate goes through rigorous screening to ensure top quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Your Recruitment Goals Are</h2>
            <h3 className="text-3xl font-bold text-purple-600 mb-6">Our Top Priority</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animate-delay-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animate-delay-400">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-semibold">Projects Done</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animate-delay-600">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-semibold">Success Rate</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animate-delay-800">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Manage The Best Recruiter</h2>
            <h3 className="text-3xl font-bold text-purple-600 mb-6">With The Best Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group animate-fadeInUp animate-delay-200">
              <div className="relative mb-6">
                <div className="w-64 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Professional</h4>
                    <p className="text-gray-600">Team Member</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
              <p className="text-blue-600 font-semibold mb-3">Senior Recruiter</p>
            </div>
            <div className="text-center group animate-fadeInUp animate-delay-400">
              <div className="relative mb-6">
                <div className="w-64 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Professional</h4>
                    <p className="text-gray-600">Team Member</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emily Davis</h3>
              <p className="text-green-600 font-semibold mb-3">HR Manager</p>
            </div>
            <div className="text-center group animate-fadeInUp animate-delay-600">
              <div className="relative mb-6">
                <div className="w-64 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Professional</h4>
                    <p className="text-gray-600">Team Member</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Brown</h3>
              <p className="text-purple-600 font-semibold mb-3">Specialist</p>
            </div>
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center group animate-fadeInUp animate-delay-800">
              <div className="relative mb-6">
                <div className="w-64 h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Professional</h4>
                    <p className="text-gray-600">Team Member</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-orange-600 font-semibold mb-3">Client Relations</p>
            </div>
            <div className="text-center group animate-fadeInUp animate-delay-1000">
              <div className="relative mb-6">
                <div className="w-64 h-80 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Professional</h4>
                    <p className="text-gray-600">Team Member</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">David Wilson</h3>
              <p className="text-teal-600 font-semibold mb-3">Analyst</p>
            </div>
            <div className="text-center group animate-fadeInUp animate-delay-1200">
              <div className="relative mb-6">
                <div className="w-64 h-80 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Professional</h4>
                    <p className="text-gray-600">Team Member</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lisa Chen</h3>
              <p className="text-pink-600 font-semibold mb-3">Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-6 animate-fadeInUp">Our Help Satisfaction For All</h2>
          <h3 className="text-4xl font-bold text-purple-200 mb-12 animate-fadeInUp animate-delay-200">Your HR Needs</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animate-delay-400">
            <button className="bg-white text-purple-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Explore Our Latest Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fadeInUp animate-delay-200">
              <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recruitment Trends 2024</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Discover the latest trends shaping the recruitment industry this year.
                </p>
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">Read More →</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fadeInUp animate-delay-400">
              <div className="w-full h-48 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Best Practices Guide</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Learn the best practices for effective talent acquisition and retention.
                </p>
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">Read More →</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fadeInUp animate-delay-600">
              <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation in HR</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Explore how technology is revolutionizing human resources management.
                </p>
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">Choose Plan That Is</h2>
          <h3 className="text-4xl font-bold text-purple-600 mb-12 animate-fadeInUp animate-delay-200">Your Match</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Basic</h4>
              <div className="text-4xl font-bold text-purple-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✓ Up to 10 job postings</li>
                <li>✓ Basic candidate screening</li>
                <li>✓ Email support</li>
                <li>✓ Standard reporting</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
            <div className="bg-purple-600 rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 text-white transform scale-105">
              <h4 className="text-2xl font-bold mb-4">Professional</h4>
              <div className="text-4xl font-bold mb-6">$199<span className="text-lg text-purple-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li>✓ Unlimited job postings</li>
                <li>✓ Advanced screening tools</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Custom branding</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h4>
              <div className="text-4xl font-bold text-purple-600 mb-6">$399<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✓ Everything in Professional</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom integrations</li>
                <li>✓ White-label solution</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                Contact Sales
              </button>
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
                Connecting exceptional professionals with leading companies. Your trusted partner in building world-class teams.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer">
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
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Our Team</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Job Search</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Post Jobs</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Talent Search</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Consulting</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 Upscale Staffing. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}