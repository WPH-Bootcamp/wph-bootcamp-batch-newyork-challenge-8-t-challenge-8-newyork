import { useState, useEffect } from 'react'
import { navLinks } from '../../data/navigation';
import { Button } from '../ui/Button';
import logoIcon from '../../assets/icon/logoSymbol.png';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
    document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  
  return (
    <header className={`fixed top-0 left-0 right-0 h-20 z-50 bg-bg-navbar backdrop-blur-md transition-all duration-300 ${
      isOpen 
        ? 'h-screen bg-bg-main overflow-y-auto lg:h-20 lg:bg-bg-navbar lg:backdrop-blur-md lg:overflow-visible' 
        : 'bg-bg-navbar backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="shrink-0">
            <a 
              href="#home" 
              className="text-2xl font-bold text-text-main tracking-tight"
            >
              <img
                src={logoIcon}
                alt="Logo"
                className="h-8 w-8 inline-block mr-2"
              />
              Your Logo
            </a>
          </div>

          {/* MENU LINK DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-main hover:text-brand-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* KANAN: TOGGLE BUTTON + CTA DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Tombol Switch Tema */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full text-text-muted hover:text-brand-primary hover:bg-white/5 transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 5.657a4 4 0 118 0 4 4 0 01-8 0z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a href="#contact">
              <Button 
                variant="primary" size="sm" 
                className="rounded-full px-12 shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform">
                Let's Talk
              </Button>
            </a>
          </div>

          {/* HAMBURGER BUTTON (MOBILE) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-text-muted"
            >
              {isDark ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 5.657a4 4 0 118 0 4 4 0 01-8 0z" /></svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-main p-2"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div className={`lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-bg-main transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 pt-6 pb-12 space-y-6 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg font-medium text-text-main hover:text-brand-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)} 
              className="block w-full"
            >
              <Button variant="primary" size="md" className="w-full rounded-full py-3">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};