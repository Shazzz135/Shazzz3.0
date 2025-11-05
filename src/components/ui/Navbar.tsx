import React, { useState, useEffect } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionIndex: number) => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      const pageDivs = mainElement.children;
      if (pageDivs[sectionIndex]) {
        const targetElement = pageDivs[sectionIndex] as HTMLElement;
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style>
        {`
          .navbar-star-border {
            position: relative;
            overflow: hidden;
            background: transparent !important;
          }
          .navbar-star-border::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(90deg, 
              transparent 0%, 
              #480385 10%, 
              #480385 20%, 
              transparent 30%,
              transparent 40%,
              #480385 50%,
              #480385 60%,
              transparent 70%,
              transparent 80%,
              #480385 90%,
              transparent 100%
            );
            background-size: 200% 100%;
            animation: starMove 4s linear infinite;
            z-index: 2;
          }
          @keyframes starMove {
            0% { background-position: 0% 0%; }
            100% { background-position: 200% 0%; }
          }
          .nav-link, .social-link {
            position: relative;
            transition: all 0.3s ease;
            color: #fff !important;
          }
          .nav-link:hover, .social-link:hover {
            box-shadow: 0 0 15px #480385;
            background: rgba(72, 3, 133, 0.12);
            border-radius: 8px;
            color: #fff !important;
          }
          .nav-link:hover svg, .social-link:hover svg {
            color: #480385 !important;
            fill: #480385 !important;
          }
          .social-link.linkedin:hover svg {
            color: #480385 !important;
            fill: #480385 !important;
          }
        `}
      </style>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] navbar-star-border transition-all duration-300 ${className}`} 
        style={{ 
          backgroundColor: `rgba(72, 3, 133, 0)`,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          position: 'fixed',
          top: 0,
          width: '100%'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Social Links (Left) */}
            <div className="navbar-social flex space-x-4">
              <a
                href="https://x.com/Shazzz135"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="social-link"
              >
                {/* X (Twitter) SVG */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 hover:text-white transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nick-shahbaz-b258b8241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link linkedin"
              >
                {/* LinkedIn SVG */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Shazzz135"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                {/* GitHub SVG */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 hover:text-white transition-colors">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection(0)} className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection(1)} className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection(2)} className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </button>
                <button onClick={() => scrollToSection(3)} className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Education
                </button>
                <button onClick={() => scrollToSection(4)} className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </button>
                <button onClick={() => scrollToSection(5)} className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-btn text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Toggle menu"
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

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-2 space-y-1 sm:px-2 flex flex-col items-center">
                <button onClick={() => scrollToSection(0)} className="mobile-nav-link text-gray-300 hover:text-white block text-sm font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection(1)} className="mobile-nav-link text-gray-300 hover:text-white block text-sm font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection(2)} className="mobile-nav-link text-gray-300 hover:text-white block text-sm font-medium">
                  Services
                </button>
                <button onClick={() => scrollToSection(3)} className="mobile-nav-link text-gray-300 hover:text-white block text-sm font-medium">
                  Education
                </button>
                <button onClick={() => scrollToSection(4)} className="mobile-nav-link text-gray-300 hover:text-white block text-sm font-medium">
                  Projects
                </button>
                <button onClick={() => scrollToSection(5)} className="mobile-nav-link text-gray-300 hover:text-white block text-sm font-medium">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
