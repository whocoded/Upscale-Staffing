'use client';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  // Add custom animations
  const animationStyles = `
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
      }
      50% {
        box-shadow: 0 0 20px rgba(239, 68, 68, 0.8), 0 0 30px rgba(239, 68, 68, 0.6);
      }
    }
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
    @keyframes continuousPulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
    .animate-fadeInDown {
      animation: fadeInDown 0.8s ease-out forwards;
      opacity: 0;
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    .animate-fadeInUp.visible {
      opacity: 1 !important;
    }
    .animate-fadeInLeft {
      animation: fadeInLeft 0.8s ease-out forwards;
      opacity: 0;
    }
    .animate-fadeInRight {
      animation: fadeInRight 0.8s ease-out forwards;
      opacity: 0;
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out forwards;
      opacity: 0;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animate-rotate {
      animation: rotate 8s linear infinite;
    }
    .animate-glow {
      animation: glow 2s ease-in-out infinite;
    }
    .animate-shimmer {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
    .animate-continuousPulse {
      animation: continuousPulse 2s ease-in-out infinite;
    }
  `;

  const industries = [
    {
      id: 'hospitals',
      title: 'Hospitals & Health Systems',
      icon: '🏥',
      description: 'Comprehensive staffing solutions for acute care facilities, medical centers, and health system networks.',
      specialties: ['Emergency Medicine', 'ICU/Critical Care', 'Surgery', 'Medical/Surgical Units', 'Pediatrics', 'Maternity'],
      stats: { facilities: '50+', placements: '200+' },
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ltc',
      title: 'Long-Term Care',
      icon: '🏡',
      description: 'Specialized staffing for nursing homes, assisted living facilities, and rehabilitation centers.',
      specialties: ['Geriatric Care', 'Rehabilitation', 'Memory Care', 'Skilled Nursing', 'Physical Therapy', 'Occupational Therapy'],
      stats: { facilities: '30+', placements: '150+' },
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'outpatient',
      title: 'Outpatient Clinics',
      icon: '🏢',
      description: 'Staffing solutions for ambulatory care centers, specialty clinics, and outpatient facilities.',
      specialties: ['Primary Care', 'Cardiology', 'Orthopedics', 'Dermatology', 'Oncology', 'Radiology'],
      stats: { facilities: '40+', placements: '100+' },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'homecare',
      title: 'Home Healthcare',
      icon: '🏠',
      description: 'Qualified professionals for in-home care services and community health programs.',
      specialties: ['Home Health Nursing', 'Personal Care', 'Companion Care', 'Hospice Care', 'Medical Equipment', 'Therapy Services'],
      stats: { facilities: '25+', placements: '80+' },
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'mental-health',
      title: 'Mental Health Facilities',
      icon: '🧠',
      description: 'Specialized staffing for psychiatric hospitals, behavioral health centers, and addiction treatment facilities.',
      specialties: ['Psychiatric Nursing', 'Behavioral Health', 'Addiction Counseling', 'Crisis Intervention', 'Group Therapy', 'Case Management'],
      stats: { facilities: '20+', placements: '60+' },
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'urgent-care',
      title: 'Urgent Care Centers',
      icon: '⚡',
      description: 'Fast-paced staffing solutions for urgent care and walk-in medical centers.',
      specialties: ['Urgent Care Medicine', 'Family Practice', 'Nurse Practitioners', 'Medical Assistants', 'Radiology Tech', 'Lab Technicians'],
      stats: { facilities: '35+', placements: '90+' },
      color: 'from-orange-500 to-red-500'
    }
  ];

  const positions = [
    { category: 'Nursing', roles: ['Registered Nurses (RN)', 'Licensed Practical Nurses (LPN)', 'Certified Nursing Assistants (CNA)', 'Nurse Practitioners (NP)', 'Clinical Nurse Specialists'] },
    { category: 'Allied Health', roles: ['Physical Therapists', 'Occupational Therapists', 'Respiratory Therapists', 'Medical Technologists', 'Radiology Technicians'] },
    { category: 'Administrative', roles: ['Medical Assistants', 'Health Information Technicians', 'Medical Secretaries', 'Billing Specialists', 'Case Managers'] },
    { category: 'Specialized', roles: ['Pharmacists', 'Social Workers', 'Dietitians', 'Speech Therapists', 'Mental Health Counselors'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <Navigation />
      {/* Hero Section - Healthcare Industries Solution */}
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
                Healthcare Industries
                <span className="block" style={{color: '#0d74bb'}}>
                  Staffing Solution
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Comprehensive staffing solutions across diverse healthcare sectors with specialized expertise and rapid deployment capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{background: '#0d74bb'}}
                  onMouseEnter={(e) => e.target.style.background = '#0a5a94'}
                  onMouseLeave={(e) => e.target.style.background = '#0d74bb'}
                >
                  Explore Industries
                </button>
                <button className="px-8 py-4 rounded-full font-semibold text-white border-2 border-gray-400 hover:border-white transition-all duration-300">
                  View Specialties
                </button>
              </div>
            </div>
            
            {/* Right Content - Interactive Visual */}
            <div className="relative">
              <div className="relative rounded-3xl p-6 shadow-2xl min-h-[350px]" style={{background: 'linear-gradient(135deg, #1e293b, #334155)'}}>
                {/* Healthcare Decision Flow */}
                <div className="relative h-full">
                  {/* Top - Healthcare Professional Profile */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-700 rounded-xl p-4 shadow-lg max-w-xs transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInDown">
                      <div className="flex justify-center mb-3">
                        <div className="w-16 h-16 rounded-full border-3 border-white overflow-hidden transition-all duration-300 hover:border-blue-400">
                          <img 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e5e7eb'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%236b7280'/%3E%3Cpath d='M20 85 Q50 65 80 85' fill='%236b7280'/%3E%3C/svg%3E" 
                            alt="Healthcare Professional" 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="text-center text-white">
                        <div className="font-medium text-sm mb-1 transition-colors duration-300 hover:text-blue-300">No Placement in</div>
                        <div className="font-medium text-sm transition-colors duration-300 hover:text-blue-300">Last 3 Months</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting Line Down */}
                  <div className="flex justify-center mb-4">
                    <div className="w-1 h-6" style={{background: '#ef4444'}}></div>
                  </div>
                  
                  {/* Decision Node */}
                  <div className="flex justify-center mb-4">
                    <div className="px-6 py-3 rounded-full text-white font-medium text-sm shadow-lg relative transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-continuousPulse animate-glow cursor-pointer animate-fadeInUp" style={{background: '#ef4444', zIndex: 10, animationDelay: '0.3s'}}>
                      Healthcare Experience {'>'} 5 Years
                    </div>
                  </div>
                  
                  {/* Connecting Lines to Yes/No */}
                  <div className="flex justify-center mb-4">
                    <div className="w-1 h-6 animate-fadeIn" style={{background: '#ef4444', animationDelay: '0.6s'}}></div>
                  </div>
                  
                  {/* Yes/No Branches */}
                  <div className="flex justify-center items-center mb-6 gap-24">
                    <div className="bg-white rounded-full px-6 py-2 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-green-50 cursor-pointer animate-fadeInLeft" style={{animationDelay: '0.9s'}}>
                      <span className="font-medium text-gray-800 text-sm transition-colors duration-300 hover:text-green-600">Yes</span>
                    </div>
                    <div className="bg-white rounded-full px-6 py-2 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-red-50 cursor-pointer animate-fadeInRight" style={{animationDelay: '0.9s'}}>
                      <span className="font-medium text-gray-800 text-sm transition-colors duration-300 hover:text-red-600">No</span>
                    </div>
                  </div>
                  
                  {/* Action Outcomes */}
                  <div className="flex justify-between items-start px-8">
                    {/* Left Branch - Yes Actions */}
                     <div className="space-y-3">
                       <div className="bg-gray-700 rounded-lg p-3 shadow-lg max-w-[160px] transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-600 cursor-pointer animate-fadeInUp animate-shimmer visible" style={{animationDelay: '1.2s', opacity: 1}}>
                         <div className="flex items-center text-white">
                           <div className="w-6 h-6 rounded flex items-center justify-center mr-2 transition-colors duration-300 hover:bg-green-400 animate-float" style={{background: '#10b981', animationDelay: '1.5s'}}>
                             <span className="text-xs">📧</span>
                           </div>
                           <span className="font-medium text-xs transition-colors duration-300 hover:text-green-200">Priority Placement</span>
                         </div>
                       </div>
                       
                       <div className="bg-gray-700 rounded-lg p-3 shadow-lg max-w-[160px] transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-600 cursor-pointer animate-fadeInUp animate-shimmer visible" style={{animationDelay: '1.4s', opacity: 1}}>
                         <div className="flex items-center text-white">
                           <div className="w-6 h-6 rounded flex items-center justify-center mr-2 transition-colors duration-300 hover:bg-green-400 animate-rotate" style={{background: '#10b981'}}>
                             <span className="text-xs">🏥</span>
                           </div>
                           <span className="font-medium text-xs transition-colors duration-300 hover:text-green-200">Specialty Match</span>
                         </div>
                       </div>
                     </div>
                     
                     {/* Right Branch - No Actions */}
                      <div className="space-y-3">
                        <div className="bg-gray-700 rounded-lg p-3 shadow-lg max-w-[160px] transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-600 cursor-pointer animate-fadeInUp animate-shimmer" style={{animationDelay: '1.2s'}}>
                          <div className="flex items-center text-white">
                            <div className="w-6 h-6 rounded flex items-center justify-center mr-2 transition-colors duration-300 hover:bg-green-400 animate-continuousPulse" style={{background: '#10b981'}}>
                              <span className="text-xs">📧</span>
                            </div>
                            <span className="font-medium text-xs transition-colors duration-300 hover:text-green-200">Skills Assessment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  {/* Enhanced Flow Lines SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                    <defs>
                      <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3">
                          <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6">
                          <animate attributeName="stop-opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.3">
                          <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                        </stop>
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                      </filter>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                              refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                      </marker>
                    </defs>
                    
                    {/* Main vertical flow line */}
                    <line x1="250" y1="120" x2="250" y2="200" 
                          stroke="url(#redGradient)" 
                          strokeWidth="4" 
                          filter="url(#glow)"
                          strokeLinecap="round" 
                          strokeDasharray="5,5"
                          markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-dashoffset" values="0;10;0" dur="1.5s" repeatCount="indefinite"/>
                    </line>
                    
                    {/* Horizontal line connecting Yes/No with smooth curves */}
                    <path d="M 250 240 Q 215 240 180 240" 
                          stroke="url(#flowGradient)" 
                          strokeWidth="4" 
                          fill="none" 
                          filter="url(#glow)"
                          strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <path d="M 250 240 Q 285 240 320 240" 
                          stroke="url(#flowGradient)" 
                          strokeWidth="4" 
                          fill="none" 
                          filter="url(#glow)"
                          strokeLinecap="round">
                      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                    </path>
                    
                    {/* Vertical lines down from Yes/No with arrows */}
                    <line x1="180" y1="240" x2="180" y2="290" 
                          stroke="url(#redGradient)" 
                          strokeWidth="4" 
                          filter="url(#glow)"
                          strokeLinecap="round" 
                          markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite"/>
                    </line>
                    <line x1="320" y1="240" x2="320" y2="290" 
                          stroke="url(#redGradient)" 
                          strokeWidth="4" 
                          filter="url(#glow)"
                          strokeLinecap="round" 
                          markerEnd="url(#arrowhead)">
                      <animate attributeName="stroke-opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" begin="1s"/>
                    </line>
                    

                  </svg>
                </div>
              </div>
              
              {/* Floating Industry Stats */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-2 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{color: '#0d74bb'}}>6+</div>
                  <div className="text-xs text-gray-600">Sectors</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 right-8 bg-white rounded-lg shadow-lg px-4 py-2 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">680+</div>
                  <div className="text-xs text-gray-600">Placements</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-lg shadow-lg px-3 py-2" style={{animationDelay: '2s'}}>
                <div className="text-center">
                  <div className="text-xl font-bold text-orange-600">200+</div>
                  <div className="text-xs text-gray-600">Facilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Healthcare Sectors Table */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Healthcare Sectors We Specialize In</h2>
            <p className="text-xl text-gray-600">Comprehensive overview of our specialized healthcare services</p>
          </div>
          
          {/* Advanced Table Design - Mobile Responsive */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Table Header - Hidden on Mobile */}
             <div className="hidden lg:block bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-8 py-6">
               <div className="grid grid-cols-10 gap-4 items-center text-white font-semibold">
                 <div className="col-span-4">
                   <span className="text-sm uppercase tracking-wider">Healthcare Sector</span>
                 </div>
                 <div className="col-span-4">
                   <span className="text-sm uppercase tracking-wider">Description</span>
                 </div>
                 <div className="col-span-1 text-center">
                   <span className="text-sm uppercase tracking-wider">Facilities</span>
                 </div>
                 <div className="col-span-1 text-center">
                   <span className="text-sm uppercase tracking-wider">Placements</span>
                 </div>
               </div>
             </div>
            
            {/* Table Body - Responsive Layout */}
            <div className="divide-y divide-gray-100">
              {industries.map((industry, index) => (
                 <div
                   key={industry.id}
                   className={`transition-all duration-300 cursor-pointer group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 ${
                     selectedIndustry === industry.id 
                       ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500' 
                       : 'hover:shadow-lg'
                   }`}
                   onClick={() => setSelectedIndustry(selectedIndustry === industry.id ? null : industry.id)}
                 >
                   {/* Desktop Layout */}
                   <div className="hidden lg:grid lg:grid-cols-10 gap-4 items-center px-8 py-6">
                     {/* Sector Name Column */}
                     <div className="col-span-4">
                       <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                         {industry.title}
                       </h3>
                       <div className="flex flex-wrap gap-1 mt-2">
                         {industry.specialties.slice(0, 3).map((specialty, idx) => (
                           <span key={idx} className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300">
                             {specialty}
                           </span>
                         ))}
                         {industry.specialties.length > 3 && (
                           <span className="inline-block bg-gray-200 text-gray-500 text-xs px-2 py-1 rounded-full">
                             +{industry.specialties.length - 3} more
                           </span>
                         )}
                       </div>
                     </div>
                     
                     {/* Description Column */}
                     <div className="col-span-4">
                       <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                         {industry.description}
                       </p>
                     </div>
                     
                     {/* Facilities Column */}
                     <div className="col-span-1 text-center">
                       <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl px-4 py-3 shadow-md group-hover:shadow-lg transition-all duration-300">
                         <div className="text-2xl font-bold">{industry.stats.facilities}</div>
                         <div className="text-xs opacity-90">Facilities</div>
                       </div>
                     </div>
                     
                     {/* Placements Column */}
                     <div className="col-span-1 text-center">
                       <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl px-4 py-3 shadow-md group-hover:shadow-lg transition-all duration-300">
                         <div className="text-2xl font-bold">{industry.stats.placements}</div>
                         <div className="text-xs opacity-90">Placements</div>
                       </div>
                     </div>
                   </div>

                   {/* Mobile Layout */}
                   <div className="lg:hidden p-6 space-y-4">
                     {/* Sector Name and Stats Row */}
                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                       <div className="flex-1">
                         <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                           {industry.title}
                         </h3>
                         <div className="flex flex-wrap gap-1">
                           {industry.specialties.slice(0, 2).map((specialty, idx) => (
                             <span key={idx} className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300">
                               {specialty}
                             </span>
                           ))}
                           {industry.specialties.length > 2 && (
                             <span className="inline-block bg-gray-200 text-gray-500 text-xs px-2 py-1 rounded-full">
                               +{industry.specialties.length - 2} more
                             </span>
                           )}
                         </div>
                       </div>
                       
                       {/* Stats Cards */}
                       <div className="flex gap-3 sm:flex-col">
                         <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg px-3 py-2 shadow-md text-center min-w-[80px]">
                           <div className="text-lg font-bold">{industry.stats.facilities}</div>
                           <div className="text-xs opacity-90">Facilities</div>
                         </div>
                         <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg px-3 py-2 shadow-md text-center min-w-[80px]">
                           <div className="text-lg font-bold">{industry.stats.placements}</div>
                           <div className="text-xs opacity-90">Placements</div>
                         </div>
                       </div>
                     </div>
                     
                     {/* Description */}
                     <div>
                       <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                         {industry.description}
                       </p>
                     </div>
                   </div>
                 </div>
               ))}
            </div>
            
            {/* Table Footer with Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-8 py-6 border-t border-gray-200">
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                <div className="col-span-5 flex items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Total Healthcare Sectors: {industries.length}</span>
                  </div>
                </div>
                <div className="col-span-4 text-center">
                  <span className="text-sm text-gray-600">Click any row to view detailed specialties</span>
                </div>
                <div className="col-span-3 flex justify-end space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {industries.reduce((sum, industry) => sum + parseInt(industry.stats.facilities.replace('+', '')), 0)}+
                    </div>
                    <div className="text-xs text-gray-500">Total Facilities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {industries.reduce((sum, industry) => sum + parseInt(industry.stats.placements.replace('+', '')), 0)}+
                    </div>
                    <div className="text-xs text-gray-500">Total Placements</div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Layout */}
              <div className="md:hidden space-y-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Total Healthcare Sectors: {industries.length}</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm text-gray-600">Tap any row to view detailed specialties</span>
                </div>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {industries.reduce((sum, industry) => sum + parseInt(industry.stats.facilities.replace('+', '')), 0)}+
                    </div>
                    <div className="text-xs text-gray-500">Total Facilities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {industries.reduce((sum, industry) => sum + parseInt(industry.stats.placements.replace('+', '')), 0)}+
                    </div>
                    <div className="text-xs text-gray-500">Total Placements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Industry Details */}
      {selectedIndustry && (
        <section className="py-16 px-4" style={{background: 'linear-gradient(to right, #0d74bb0d, #0d74bb0d)'}}>
          <div className="max-w-6xl mx-auto">
            {industries
              .filter(industry => industry.id === selectedIndustry)
              .map(industry => (
                <div key={industry.id} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  <div className="text-center mb-12">
                    <div className="text-8xl mb-4">{industry.icon}</div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">{industry.title}</h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{industry.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">Specialties We Cover</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {industry.specialties.map((specialty, index) => (
                        <div key={index} className="rounded-xl p-4 text-center" style={{background: 'linear-gradient(to right, #0d74bb0d, #0d74bb0d)'}}>
                          <div className="font-semibold text-gray-800">{specialty}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      )}

      {/* Positions We Fill */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Positions We Fill</h2>
            <p className="text-xl text-gray-600">From entry-level to executive positions across all healthcare disciplines</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {positions.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.category}</h3>
                <ul className="space-y-3">
                  {category.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4" style={{background: 'linear-gradient(to right, #0d74bb, #0d74bb)'}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're looking for temporary, permanent, or contract positions, we have opportunities across all healthcare sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-full font-semibold transition-colors duration-300"
              style={{backgroundColor: 'white', color: '#0d74bb'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              Browse Opportunities
            </button>
            <button 
              className="px-8 py-4 rounded-full font-semibold transition-colors duration-300"
              style={{border: '2px solid white', color: 'white', backgroundColor: 'transparent'}}
              onMouseEnter={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#0d74bb'}}
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'}}
            >
              Request Staffing
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