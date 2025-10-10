'use client';
import Navigation from '../components/Navigation';

export default function Services() {
  const animationStyles = `
    @keyframes bounce { 0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)} }
    @keyframes slideInDown { from{opacity:0;transform:translateY(-30px)} to{opacity:1;transform:translateY(0)} }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
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
                Our Services
                {/* <br /> */}
                
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                At Upscale Staffing, we provide comprehensive workforce solutions that help organizations operate with confidence and excellence. Whether your need is in healthcare, administration, or specialized non-clinical sectors, we deliver top-tier professionals who bring skill, reliability, and dedication to every role.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-lg">
                Our team combines years of staffing expertise with a people-first approach—ensuring that every placement is not just a match on paper, but a true fit for your culture, mission, and operational goals.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Clinical and Non-Clinical Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Compliance-Driven Processes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Nationwide Reach</span>
                </div>
              </div>
            </div>

            {/* Right Content - Decorative Card */}
            <div className="relative">
              <div className="relative rounded-3xl p-8 shadow-2xl overflow-hidden h-[480px] flex items-center" style={{background: 'linear-gradient(to bottom right, #0d74bb, #0a5d96)'}}>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute top-16 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
                {/* Decorative background image */}
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl">💼</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-md text-gray-800 leading-relaxed">
                        Tailored workforce solutions across clinical and non-clinical roles, supported by credentialing and compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Staffing */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 md:p-12 transform transition-all duration-500 mb-16 -mx-4 md:-mx-8 lg:-mx-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Clinical Staffing</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Delivering exceptional care starts with exceptional people. Upscale Staffing connects hospitals, nursing homes, clinics, and rehabilitation centers with highly qualified nurses, physicians, and allied health professionals committed to clinical excellence and patient safety.
                  </p>
                  <p>
                    Our clinical staffing services are designed to reduce turnover, improve care continuity, and help facilities meet both regulatory and operational standards with ease.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800">We provide:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Temporary, per diem, and contract coverage for short-term and long-term needs</li>
                    <li>Full-time and part-time placements for ongoing facility support</li>
                    <li>Crisis and rapid-response staffing to maintain compliance during peak demand</li>
                    <li>Credentialing and compliance management to ensure readiness for audits and surveys</li>
                  </ul>
                  <h3 className="text-2xl font-bold text-gray-800">Positions We Fill:</h3>
                  <ul className="list-disc list-inside grid md:grid-cols-2 gap-x-6">
                    <li>Registered Nurses (RNs) and Licensed Practical Nurses (LPNs)</li>
                    <li>Certified Nursing Assistants (CNAs) and Geriatric Nursing Assistants (GNAs)</li>
                    <li>Nurse Practitioners and Physician Assistants</li>
                    <li>Physicians and Medical Directors</li>
                    <li>Medical Assistants, Lab Technicians, and Radiology Techs</li>
                    <li>Physical, Occupational, and Speech Therapists</li>
                    <li>Case Managers, Clinical Coordinators, and Home Health Aides</li>
                  </ul>
                  <h3 className="text-2xl font-bold text-gray-800">Facility Types We Serve:</h3>
                  <ul className="list-disc list-inside grid md:grid-cols-2 gap-x-6">
                    <li>Hospitals and Specialty Clinics</li>
                    <li>Long-Term Care & Skilled Nursing Facilities</li>
                    <li>Assisted Living & Memory Care Communities</li>
                    <li>Home Health & Hospice Agencies</li>
                    <li>Rehabilitation & Therapy Centers</li>
                  </ul>
                  <p>
                    At Upscale Staffing, we handle the sourcing, screening, onboarding, and scheduling—so you can focus on delivering quality patient care with peace of mind.
                  </p>
                </div>
                {/* <div className="mt-8">
                  <a href="/industries" className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 inline-block" style={{background: '#0d74bb'}} onMouseEnter={(e) => e.target.style.background = '#0a5d96'} onMouseLeave={(e) => e.target.style.background = '#0d74bb'}>
                    Learn More About Clinical Staffing →
                  </a>
                </div> */}
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden h-96 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
                    alt="Clinical staffing professionals supporting patient care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Clinical & Administrative Staffing */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl p-8 md:p-12 text-white" style={{background: 'linear-gradient(to bottom right, #0d74bb, #0a5d96)'}}>
              <div className="text-5xl mb-6">🧩</div>
              <h2 className="text-3xl font-bold mb-6">Non-Clinical & Administrative Staffing</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Behind every successful organization is a team of capable professionals who keep operations running efficiently. Our Non-Clinical & Administrative Staffing Division provides experienced talent across multiple industries to support your back-office, customer-facing, and operational needs.
              </p>
              <p className="leading-relaxed opacity-90">
                We go beyond traditional recruitment by understanding your workflows, culture, and goals—then matching you with professionals who bring both expertise and reliability to your organization.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">We specialize in:</h3>
              <ul className="list-disc list-inside grid md:grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
                <li>Administrative & Clerical Support: Receptionists, Office Managers, Data Entry Clerks, Executive Assistants</li>
                <li>Customer Service & Call Centers: Customer Support Reps, Help Desk Agents, Client Success Associates</li>
                <li>Finance & Accounting: Bookkeepers, Payroll Specialists, Account Coordinators, Billing Analysts</li>
                <li>Information Technology: IT Support Technicians, System Analysts, Data Specialists</li>
                <li>Education & Training: Classroom Aides, Administrative Coordinators, Enrollment Specialists</li>
                <li>Hospitality & Events: Front Desk Staff, Housekeepers, Event Coordinators, Food Service Staff</li>
                <li>Light Industrial & Warehouse: Assemblers, Packers, Inventory Clerks, Forklift Operators</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Key Benefits of Our Non-Clinical Staffing Solutions:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Rapid fulfillment for both temporary and permanent roles</li>
                <li>Flexible staffing models that scale with your business cycles</li>
                <li>Pre-screened, reference-checked, and skills-verified candidates</li>
                <li>Seamless onboarding and timekeeping support</li>
                <li>Cost-effective solutions to boost productivity and reduce downtime</li>
              </ul>

              {/* <div className="mt-8">
                <a href="/industries" className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 inline-block" style={{background: '#0d74bb'}} onMouseEnter={(e) => e.target.style.background = '#0a5d96'} onMouseLeave={(e) => e.target.style.background = '#0d74bb'}>
                  Learn More About Non-Clinical Staffing →
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Advantages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compliance-Driven</h3>
              <p className="text-gray-600">Rigorous credentialing, background checks, and regulatory adherence for peace of mind.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rapid Placement</h3>
              <p className="text-gray-600">Accelerated sourcing and onboarding to fill roles quickly and effectively.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Talent</h3>
              <p className="text-gray-600">Pre-screened, skills-verified candidates matched to your culture and needs.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Models</h3>
              <p className="text-gray-600">Temporary, contract, and permanent placements tailored to your demand cycles.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nationwide Network</h3>
              <p className="text-gray-600">Access to a diverse talent pool across multiple states and specialties.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 responsiveness and partnership mindset to keep your operations moving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Upscale Staffing */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl p-8 md:p-12 text-gray-800" style={{backgroundColor: '#ffb75a61'}}>
                <div className="text-5xl mb-6">🌟</div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Upscale Staffing?</h2>
                <p className="text-lg leading-relaxed">
                  We’re not just another staffing agency—we’re your strategic workforce partner. Every client we serve benefits from our deep industry insight, rigorous recruitment process, and unwavering commitment to service excellence.
                </p>
                
              </div>
              <div className="rounded-3xl p-8 md:p-12 text-white" style={{background: 'linear-gradient(to bottom right, #0d74bb, #0a5d96)'}}>
                <div className="text-5xl mb-6">🤝</div>
                <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
                <p className="text-lg leading-relaxed opacity-90">
                  At Upscale Staffing, we understand that your success depends on the people you hire. That’s why we invest in finding, training, and supporting professionals who make a lasting impact on your organization.
                </p>
                {/* <div className="mt-8">
                  <a href="/contact" className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block" style={{color: '#0d74bb'}}>
                    Partner With Us →
                  </a>
                </div> */}
              </div>
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