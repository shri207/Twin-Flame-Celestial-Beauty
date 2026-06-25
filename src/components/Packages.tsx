import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const packages = [
  {
    name: 'Moon Package',
    price: '15',
    items: ['Hair Wash', 'Hair Styling', 'Basic Manicure'],
    highlighted: false,
  },
  {
    name: 'Aurora Package',
    price: '28',
    items: ['Hair Treatment', 'Facial', 'Pedicure'],
    highlighted: true,
  },
  {
    name: 'Galaxy Package',
    price: '45',
    items: ['Hair Coloring', 'Luxury Facial', 'Nail Care', 'Premium Styling'],
    highlighted: false,
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 relative bg-midnight overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square rounded-full border border-white/5 opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square rounded-full border border-white/5 opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl aspect-square rounded-full border border-white/5 opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-champagne" />
            <span className="text-champagne uppercase tracking-widest text-sm font-medium">Curated Experiences</span>
            <div className="h-[1px] w-8 bg-champagne" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-moon">Cosmic Packages</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className={cn(
                "relative w-full max-w-sm rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-all duration-500",
                pkg.highlighted 
                  ? "bg-gradient-to-b from-cosmic/40 to-midnight border-2 border-champagne shadow-[0_0_50px_rgba(212,175,55,0.15)] lg:-translate-y-4" 
                  : "bg-white/5 border border-white/10 hover:border-champagne/30"
              )}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 bg-champagne text-midnight text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-midnight" /> Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-serif text-moon mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 text-champagne mb-8">
                <span className="text-sm font-medium">KD</span>
                <span className="text-5xl font-serif">{pkg.price}</span>
              </div>
              
              <ul className="space-y-5 mb-10 w-full flex-grow">
                {pkg.items.map((item, i) => (
                  <li key={i} className="text-moon/80 font-light flex items-center justify-center gap-2">
                    {item}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#appointment"
                className={cn(
                  "w-full py-4 rounded-full font-medium transition-colors",
                  pkg.highlighted
                    ? "bg-champagne text-midnight hover:bg-champagne/90"
                    : "bg-white/10 text-moon hover:bg-white/20"
                )}
              >
                Book Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
