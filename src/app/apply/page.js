'use client';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    availability: '',
    resume: null,
    coverLetter: '',
    certifications: '',
    references: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showJobs, setShowJobs] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: 'Registered Nurse - ICU',
      location: 'Baltimore, MD',
      type: 'Full-time',
      shift: 'Night Shift',
      salary: '$75,000 - $85,000',
      requirements: ['BSN preferred', '2+ years ICU experience', 'BLS/ACLS certified'],
      description: 'Join our dynamic ICU team providing critical care to patients in a state-of-the-art facility.'
    },
    {
      id: 2,
      title: 'Physical Therapist',
      location: 'Rockville, MD',
      type: 'Contract',
      shift: 'Day Shift',
      salary: '$40-50/hour',
      requirements: ['DPT degree', 'MD state license', 'Outpatient experience preferred'],
      description: 'Opportunity to work in a modern rehabilitation center with the latest equipment and technology.'
    },
    {
      id: 3,
      title: 'Medical Assistant',
      location: 'Silver Spring, MD',
      type: 'Part-time',
      shift: 'Flexible',
      salary: '$18-22/hour',
      requirements: ['Medical Assistant certification', 'EHR experience', 'Excellent communication skills'],
      description: 'Support our primary care team in providing exceptional patient care in a friendly environment.'
    },
    {
      id: 4,
      title: 'Nurse Practitioner - Family Medicine',
      location: 'Annapolis, MD',
      type: 'Full-time',
      shift: 'Day Shift',
      salary: '$110,000 - $130,000',
      requirements: ['MSN/DNP', 'Family NP certification', 'MD state license', '3+ years experience'],
      description: 'Lead primary care services in a growing family medicine practice with excellent benefits.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Application submitted successfully! We will contact you within 24-48 hours.');
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #0d74bb0d, white, #0d74bb0d)'}}>
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{backgroundColor: '#f0f8ff'}}>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{background: 'linear-gradient(to right, #0d74bb, #0d74bb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Start Your Career Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Join the Upscale Staffing network and discover exciting healthcare opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowJobs(false)}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300"
              style={!showJobs 
                ? {background: 'linear-gradient(to right, #0d74bb, #0d74bb)', color: 'white', boxShadow: '0 10px 25px rgba(13, 116, 187, 0.3)'} 
                : {backgroundColor: 'white', color: '#6b7280'}}
              onMouseEnter={(e) => !showJobs ? null : e.target.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => !showJobs ? null : e.target.style.backgroundColor = 'white'}
            >
              Apply Now
            </button>
            <button 
              onClick={() => setShowJobs(true)}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300"
              style={showJobs 
                ? {background: 'linear-gradient(to right, #0d74bb, #0d74bb)', color: 'white', boxShadow: '0 10px 25px rgba(13, 116, 187, 0.3)'} 
                : {backgroundColor: 'white', color: '#6b7280'}}
              onMouseEnter={(e) => showJobs ? null : e.target.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => showJobs ? null : e.target.style.backgroundColor = 'white'}
            >
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {!showJobs ? (
        /* Application Form */
        <section className="py-20 px-4" style={{backgroundColor: '#f0f8ff'}}>
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-center items-center space-x-4 mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                      style={currentStep >= step 
                        ? {background: 'linear-gradient(to right, #0d74bb, #0d74bb)', color: 'white'} 
                        : {backgroundColor: '#e5e7eb', color: '#6b7280'}}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className="w-16 h-1 mx-2"
                        style={currentStep > step ? {background: 'linear-gradient(to right, #0d74bb, #0d74bb)'} : {backgroundColor: '#e5e7eb'}}></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {currentStep === 1 && 'Personal Information'}
                  {currentStep === 2 && 'Professional Details'}
                  {currentStep === 3 && 'Additional Information'}
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                        style={{'--focus-ring-color': '#0d74bb'}}
                        onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                        onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                        onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                        onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                        onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                        onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                        onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                        onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Location *</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                      onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                      onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                      required
                    >
                      <option value="">Select a location</option>
                      <option value="baltimore">Baltimore, MD</option>
                      <option value="rockville">Rockville, MD</option>
                      <option value="silver-spring">Silver Spring, MD</option>
                      <option value="annapolis">Annapolis, MD</option>
                      <option value="frederick">Frederick, MD</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position of Interest *</label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                      onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                      onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                      required
                    >
                      <option value="">Select a position</option>
                      <option value="rn">Registered Nurse (RN)</option>
                      <option value="lpn">Licensed Practical Nurse (LPN)</option>
                      <option value="cna">Certified Nursing Assistant (CNA)</option>
                      <option value="np">Nurse Practitioner</option>
                      <option value="pt">Physical Therapist</option>
                      <option value="ot">Occupational Therapist</option>
                      <option value="ma">Medical Assistant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                      onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                      onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="entry">Entry Level (0-1 years)</option>
                      <option value="junior">Junior (1-3 years)</option>
                      <option value="mid">Mid-level (3-5 years)</option>
                      <option value="senior">Senior (5-10 years)</option>
                      <option value="expert">Expert (10+ years)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Availability *</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                      onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                      onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                      required
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="2weeks">2 weeks notice</option>
                      <option value="1month">1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Resume *</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                      onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                      onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                      onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                      onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                      placeholder="Tell us why you're interested in working with Upscale Staffing..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Certifications & Licenses</label>
                    <textarea
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                      onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                      onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                      placeholder="List your relevant certifications, licenses, and credentials..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Professional References</label>
                    <textarea
                      name="references"
                      value={formData.references}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300"
                      onFocus={(e) => {e.target.style.outline = `2px solid #0d74bb`; e.target.style.borderColor = 'transparent'}}
                      onBlur={(e) => {e.target.style.outline = 'none'; e.target.style.borderColor = '#d1d5db'}}
                      placeholder="Provide contact information for 2-3 professional references..."
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    currentStep === 1 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 text-white rounded-full font-semibold transition-all duration-300"
                    style={{background: 'linear-gradient(to right, #0d74bb, #0d74bb)'}}
                    onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 25px rgba(13, 116, 187, 0.3)'}
                    onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 text-white rounded-full font-semibold transition-all duration-300"
                    style={{background: 'linear-gradient(to right, #16a34a, #0d74bb)'}}
                    onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 25px rgba(13, 116, 187, 0.3)'}
                    onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      ) : (
        /* Job Openings */
        <section className="py-20 px-4" style={{backgroundColor: '#f0f8ff'}}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Current Opportunities</h2>
              <p className="text-xl text-gray-600">Discover exciting healthcare positions available now</p>
            </div>
            
            <div className="grid gap-8">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-sm">
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">📍</span>
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">🕐</span>
                          {job.shift}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">💰</span>
                          {job.salary}
                        </div>
                        <div className="flex items-center text-green-600 font-semibold">
                          <span className="mr-2">✅</span>
                          Now Hiring
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <button 
                        className="w-full lg:w-auto px-8 py-3 text-white rounded-full font-semibold transition-all duration-300"
                        style={{background: 'linear-gradient(to right, #0d74bb, #0d74bb)'}}
                        onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 25px rgba(13, 116, 187, 0.3)'}
                        onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4" style={{background: 'linear-gradient(to right, #0d74bb, #0d74bb)'}}>
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Upscale Staffing?</h2>
            <p className="text-xl opacity-90">Join our network and enjoy these exclusive benefits</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💰', title: 'Competitive Pay', desc: 'Top market rates and performance bonuses' },
              { icon: '🏥', title: 'Premium Facilities', desc: 'Work at leading healthcare institutions' },
              { icon: '📚', title: 'Career Growth', desc: 'Continuous learning and development opportunities' },
              { icon: '🤝', title: 'Personal Support', desc: '24/7 support from dedicated recruiters' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="opacity-90">{benefit.desc}</p>
              </div>
            ))}
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
                <li><a href="/about" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>About Us</a></li>
                <li><a href="/about" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Our Team</a></li>
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
                <li><a href="/industries" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Flexible Coverage</a></li>
                <li><a href="/industries" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Workforce Compliance</a></li>
                <li><a href="/industries" className="transition-colors duration-300 flex items-center" onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}><span className="mr-2">→</span>Talent Acquisition</a></li>
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