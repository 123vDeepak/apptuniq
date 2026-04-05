import { useState } from 'react';
import logo from '../../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fffaf0] backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Apptunix" className="h-10 sm:h-12 w-auto" />
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#services" className="text-gray-700 hover:text-[#0F9D58] transition-colors">Services</a>
            <a href="#industries" className="text-gray-700 hover:text-[#0F9D58] transition-colors">Industries</a>
            <a href="#about" className="text-gray-700 hover:text-[#0F9D58] transition-colors">About Us</a>
            <a href="#portfolio" className="text-gray-700 hover:text-[#0F9D58] transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#0F9D58] transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-[#0F9D58] transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:block">
            <button className="bg-[#0F9D58] text-white px-6 py-3 rounded-lg hover:bg-[#0D8A4D] transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              <a href="#services" className="text-gray-700 hover:text-[#0F9D58] hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#industries" className="text-gray-700 hover:text-[#0F9D58] hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Industries</a>
              <a href="#about" className="text-gray-700 hover:text-[#0F9D58] hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#portfolio" className="text-gray-700 hover:text-[#0F9D58] hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#0F9D58] hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-[#0F9D58] hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="bg-[#0F9D58] text-white px-6 py-3 rounded-lg hover:bg-[#0D8A4D] transition-all shadow-md mt-4">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
