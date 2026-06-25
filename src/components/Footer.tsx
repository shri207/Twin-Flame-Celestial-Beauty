import { MapPin, Phone, Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-midnight pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="text-2xl font-serif font-bold text-moon tracking-wider block">
              TWIN FLAME<span className="text-champagne">.</span>
            </a>
            <p className="text-moon/60 font-light leading-relaxed">
              Experience expert hair, nail and beauty services in a welcoming environment where every detail is designed to make you feel confident and cared for.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-moon/70 hover:bg-champagne hover:text-midnight transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-moon/70 hover:bg-champagne hover:text-midnight transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/96550757313" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-moon/70 hover:bg-champagne hover:text-midnight transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-moon mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Our Story', 'Gallery', 'Packages', 'Reviews'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-moon/60 hover:text-champagne transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif text-moon mb-6 tracking-wide">Constellations</h4>
            <ul className="space-y-4">
              {['Hair Styling', 'Hair Coloring', 'Nail Care', 'Facial Treatments', 'Bridal Makeup'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-moon/60 hover:text-champagne transition-colors font-light">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif text-moon mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-moon/60 font-light">
                <MapPin className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                <span>Arkan Complex<br/>Jasim Mohamad Al Bahar Street<br/>1st Ring Road<br/>Kuwait City, Kuwait</span>
              </li>
              <li className="flex items-center gap-3 text-moon/60 font-light">
                <Phone className="w-5 h-5 text-champagne shrink-0" />
                <span>+965 507 57313</span>
              </li>
              <li className="flex items-center gap-3 text-moon/60 font-light">
                <MessageCircle className="w-5 h-5 text-champagne shrink-0" />
                <span>+965 507 57313 (WhatsApp)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-moon/40">
            © 2026 Twin Flame Beauty Salon. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-moon/70 hover:bg-champagne hover:text-midnight transition-colors group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
