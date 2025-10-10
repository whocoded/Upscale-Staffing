'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style jsx>{`
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
        .animate-slideInDown {
          animation: slideInDown 0.6s ease-out forwards;
        }
      `}</style>
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b animate-slideInDown sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img src="/logo.png" alt="Upscale Staffing" className="h-10 w-auto" />
                </a>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/' ? {color: '#0d74bb'} : {'--hover-color': '#0d74bb'}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Home</a>
                <a href="/about" className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === '/about' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/about' ? {color: '#0d74bb'} : {'--hover-color': '#0d74bb'}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/about' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>About Us</a>
                <a href="/services" className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === '/services' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/services' ? {color: '#0d74bb'} : {'--hover-color': '#0d74bb'}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/services' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Services</a>
                <a href="/industries" className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === '/industries' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/industries' ? {color: '#0d74bb'} : {'--hover-color': '#0d74bb'}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/industries' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Industries</a>
                <a href="/apply" className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === '/apply' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/apply' ? {color: '#0d74bb'} : {'--hover-color': '#0d74bb'}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/apply' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Apply</a>
                <a href="/contact" className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === '/contact' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/contact' ? {color: '#0d74bb'} : {'--hover-color': '#0d74bb'}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/contact' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Contact Us</a>
              </div>
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/apply" className="text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 inline-block" style={{backgroundColor: '#0d74bb'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#0a5d96'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0d74bb'}>
                Get Started
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 focus:outline-none transition-colors duration-200"
                style={{'--hover-color': '#0d74bb', '--focus-color': '#0d74bb'}}
                onMouseEnter={(e) => e.target.style.color = '#0d74bb'}
                onMouseLeave={(e) => e.target.style.color = ''}
                onFocus={(e) => e.target.style.color = '#0d74bb'}
                onBlur={(e) => e.target.style.color = ''}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/' ? {color: '#0d74bb'} : {}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Home</a>
              <a href="/about" className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${pathname === '/about' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/about' ? {color: '#0d74bb'} : {}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/about' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>About Us</a>
              <a href="/services" className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${pathname === '/services' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/services' ? {color: '#0d74bb'} : {}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/services' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Services</a>
              <a href="/industries" className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${pathname === '/industries' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/industries' ? {color: '#0d74bb'} : {}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/industries' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Industries</a>
              <a href="/apply" className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${pathname === '/apply' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/apply' ? {color: '#0d74bb'} : {}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/apply' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Apply</a>
              <a href="/contact" className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${pathname === '/contact' ? 'text-blue-600' : 'text-gray-500'}`} style={pathname === '/contact' ? {color: '#0d74bb'} : {}} onMouseEnter={(e) => e.target.style.color = '#0d74bb'} onMouseLeave={(e) => pathname === '/contact' ? e.target.style.color = '#0d74bb' : e.target.style.color = ''}>Contact Us</a>
              <div className="px-3 py-2">
                <a href="/apply" className="w-full text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 inline-block text-center" style={{backgroundColor: '#0d74bb'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#0a5d96'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0d74bb'}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}