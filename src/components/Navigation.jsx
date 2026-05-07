import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial scheme
    if (document.documentElement.classList.contains('light')) {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/80 border-b border-white/5 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E63946] to-[#991B1B] flex items-center justify-center rounded-sm rotate-45 border border-white/20">
              <div className="-rotate-45 font-bold text-white text-xl">S</div>
            </div>
            <span className="text-xl font-light tracking-[0.3em] uppercase text-white hidden sm:block">Sishir Electrical</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase opacity-70">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#E63946] transition-colors nav-link-text">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full border border-white/10 dark:border-white/20 bg-white/5 dark:bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all nav-btn"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={16} className="text-white" /> : <Moon size={16} className="text-[#111] dark:text-white" />}
              </button>
              <a href="https://wa.me/919088454739" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 text-[#E63946] border-[#E63946]/30 transition-all opacity-100 flex items-center gap-2 nav-btn">
                WhatsApp
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#050505] flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="font-serif text-3xl text-white hover:text-[#E63946] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
