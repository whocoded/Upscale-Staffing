'use client';
import Navigation from '../components/Navigation';

export default function About() {

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      experience: "15+ years in healthcare staffing",
      image: "https://images.unsplash.com/photo-1494790108755-2616c669ac26?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Director of Operations",
      experience: "12+ years in workforce management",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Clinical Director",
      experience: "20+ years in healthcare",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      position: "Talent Acquisition Manager",
      experience: "10+ years in recruitment",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: <svg className="w-12 h-12" fill="#0d74bb" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      title: "Excellence",
      description: "We strive for excellence in every placement, ensuring the highest quality healthcare professionals for our clients."
    },
    {
      icon: <svg className="w-12 h-12" fill="#0d74bb" viewBox="0 0 24 24"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2c0 .74-.4 1.38-1 1.72v2.5L22 11v6c0 .55-.45 1-1 1s-1-.45-1-1v-4.5l-3-2.25V17c0 .55-.45 1-1 1s-1-.45-1-1V10.25L12 12.5V17c0 .55-.45 1-1 1s-1-.45-1-1v-4.5L7 15.75V17c0 .55-.45 1-1 1s-1-.45-1-1v-6l3-2.25V6.72c-.6-.34-1-.98-1-1.72 0-1.11.89-2 2-2s2 .89 2 2c0 .74-.4 1.38-1 1.72v2.5L12 10.5l2-1.28V6.72c-.6-.34-1-.98-1-1.72z"/></svg>,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our relationships."
    },
    {
      icon: <svg className="w-12 h-12" fill="#0d74bb" viewBox="0 0 24 24"><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.2 3-3.3 3-5.7 0-3.9-3.1-7-7-7z"/></svg>,
      title: "Innovation",
      description: "We embrace innovative solutions and technologies to improve healthcare staffing processes."
    },
    {
      icon: <svg className="w-12 h-12" fill="#0d74bb" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
      title: "Compassion",
      description: "We understand the critical nature of healthcare and approach every placement with care and empathy."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100">
      <Navigation />
      {/* Hero Section */}
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
                Connecting
                <br />
                healthcare talent
                <br />
                with purpose
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                At Upscale Staffing, we bridge the gap between exceptional healthcare professionals and the facilities that need them most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="/apply"
                  className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
                  style={{background: '#0d74bb'}}
                  onMouseEnter={(e) => e.target.style.background = '#0a5d96'}
                  onMouseLeave={(e) => e.target.style.background = '#0d74bb'}
                >
                  Join Our Team
                </a>
                <button className="px-8 py-4 rounded-full font-semibold text-white border-2 border-gray-400 hover:border-white transition-all duration-300 underline">
                  Our Story
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Nationwide Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Professional with Chat Interface */}
            <div className="relative">
              <div className="relative">
                {/* Main Image Container with Primary Blue Background */}
                 <div className="relative rounded-3xl p-8 shadow-2xl overflow-hidden" style={{background: 'linear-gradient(to bottom right, #0d74bb, #0a5d96)'}}>
                  {/* Professional Woman */}
                  <div className="relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face" 
                      alt="Professional Healthcare Consultant" 
                      className="w-full h-96 object-cover object-center rounded-2xl"
                    />
                  </div>
                  
                  {/* Floating Chat Interface */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800 leading-relaxed">
                            Hi! I'm here to help you find the perfect healthcare position. Let's discuss your career goals and preferences.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute top-16 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-50">
                  <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors animate-pulse">
                    <span className="text-white text-xs">📱</span>
                  </button>
                  <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors" style={{animation: 'bounce 2s infinite'}}>
                    <span className="text-white text-xs">💬</span>
                  </button>
                </div>
                
                {/* Custom Animation Styles */}
                <style jsx>{`
                  @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                      transform: translateY(0);
                    }
                    40% {
                      transform: translateY(-10px);
                    }
                    60% {
                      transform: translateY(-5px);
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 md:p-12 transform transition-all duration-500 mb-16 -mx-4 md:-mx-8 lg:-mx-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Upscale Staffing, a division of the Upscale Management Services group, delivers reliable, flexible, and compliant workforce solutions to healthcare systems and support service organizations. As part of the larger Upscale family, we uphold the same values of excellence, integrity, and community impact.
                  </p>
                  <p>
                    We are dedicated to helping facilities maintain consistent, high-quality care by connecting them with pre-vetted professionals who are skilled, dependable, and ready to step in when support is needed most. From hospitals and long-term care facilities to clinics and community programs, we understand that the right staff makes a critical difference in patient outcomes and organizational success.
                  </p>
                  <p>
                     We bring together talented professionals and the organizations that rely on them. By focusing on coverage, compliance, and peace of mind, we make sure our partners can operate smoothly while patients receive the attentive care they deserve. Upscale Staffing is not just about filling positions, it is about building trusted relationships, strengthening healthcare delivery, and ensuring that every shift is covered with confidence.
                   </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl p-8 h-96 flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #dbeafe, #e6f3ff)'}}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Since 2015</h3>
                    <p className="text-gray-600">Serving Healthcare Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl p-8 md:p-12 text-gray-800" style={{backgroundColor: '#ffb75a61'}}>
                <div className="text-5xl mb-6">🎯</div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  Our mission is to connect healthcare and support service organizations with qualified, dependable, and compassionate professionals. We aim to ensure facilities have the coverage and compliance they need to deliver excellent care while giving our workforce meaningful opportunities to grow and serve.
                </p>
              </div>
              <div className="rounded-3xl p-8 md:p-12 text-white" style={{background: 'linear-gradient(to bottom right, #0d74bb, #0a5d96)'}}>
                <div className="text-5xl mb-6">🔮</div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed opacity-90">
                  Our vision is to be the trusted staffing partner of choice for healthcare providers nationwide. We strive to redefine workforce solutions by building long-term relationships, advancing quality standards, and contributing to healthier communities where every patient receives safe, consistent, and dignified care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      {/* <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to healthcare excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #dbeafe, #e6f3ff)'}}>
                  <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold" style={{background: 'linear-gradient(to bottom right, #60a5fa, #0d74bb)'}}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="font-semibold mb-2" style={{color: '#0d74bb'}}>{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 px-4" style={{background: 'linear-gradient(to right, #2563eb, #0d74bb)'}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you’re a healthcare professional seeking your next opportunity or a business looking for skilled administrative or non-clinical talent, Upscale Staffing is here to help. We provide dependable staffing solutions across healthcare and non-healthcare sectors, connecting great people with organizations that rely on them every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block" style={{color: '#0d74bb'}}>
              Apply Now 
            </a>
            <a href="/about" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 inline-block" onMouseEnter={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#0d74bb';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white';}}>
              Learn More
            </a>
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
                Connecting exceptional professionals with organizations that value excellence. Your trusted partner in building high-performing teams across healthcare and beyond.
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
                <li><a href="/about" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>About Us</a></li>
                 
                <li><a href="/apply" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Careers</a></li>
                <li><a href="/contact" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Contact</a></li>
                <li><a href="/about" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>News & Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="/industries" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Clinical Staffing</a></li>
                <li><a href="/industries" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Non-Clinical Staff</a></li>
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
                    <span className="block">Upscale Staffing</span>
                    
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