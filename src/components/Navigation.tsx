import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#story' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Packages', href: '#packages' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Appointment', href: '#appointment' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = links.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          isScrolled ? 'py-4 bg-midnight/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="text-2xl font-serif font-bold text-moon tracking-wider">
            TWIN FLAME<span className="text-champagne">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-all relative',
                  activeSection === link.href.substring(1) ? 'text-champagne' : 'text-moon/70 hover:text-moon'
                )}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-champagne rounded-full"
                    style={{ boxShadow: '0 0 10px #D4AF37' }}
                  />
                )}
              </a>
            ))}
          </nav>

          <a
            href="#appointment"
            className="hidden lg:inline-flex px-6 py-2.5 rounded-full bg-champagne/10 text-champagne border border-champagne/30 hover:bg-champagne hover:text-midnight transition-all duration-300 font-medium text-sm"
          >
            Book Now
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-moon p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-midnight/95 backdrop-blur-xl pt-24 px-6 lg:hidden flex flex-col"
        >
          <nav className="flex flex-col gap-6 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'text-2xl font-serif transition-colors',
                  activeSection === link.href.substring(1) ? 'text-champagne' : 'text-moon'
                )}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-3 rounded-full bg-champagne text-midnight font-medium w-full max-w-xs text-center"
            >
              Book Appointment
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
