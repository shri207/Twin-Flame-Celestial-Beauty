import { motion } from 'motion/react';
import { Sparkles, Scissors, Droplet } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'hair',
    title: 'Hair Constellation',
    icon: Scissors,
    items: ['Haircut', 'Hair Styling', 'Hair Coloring', 'Hair Treatments'],
    price: '8',
    color: 'from-purple-500/20 to-cosmic/40',
    border: 'border-purple-500/30'
  },
  {
    id: 'nail',
    title: 'Nail Constellation',
    icon: Droplet,
    items: ['Manicure', 'Pedicure', 'Gel Polish', 'Nail Care'],
    price: '6',
    color: 'from-champagne/20 to-orange-500/20',
    border: 'border-champagne/30'
  },
  {
    id: 'beauty',
    title: 'Beauty Constellation',
    icon: Sparkles,
    items: ['Facial', 'Skin Treatments', 'Eyebrow Styling', 'Bridal Makeup'],
    price: '10',
    color: 'from-lavender/20 to-blue-500/20',
    border: 'border-lavender/30'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-midnight overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic/10 via-midnight to-midnight" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-champagne" />
            <span className="text-champagne uppercase tracking-widest text-sm font-medium">Services</span>
            <div className="h-[1px] w-8 bg-champagne" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-moon">Our Constellations</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100",
                service.color
              )} />
              
              <div className={cn(
                "relative h-full bg-midnight/80 backdrop-blur-md border rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2",
                service.border
              )}>
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-champagne" />
                </div>
                
                <h3 className="text-2xl font-serif text-moon mb-6">{service.title}</h3>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-moon/70 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-champagne/50" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-white/10 mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-xs text-moon/50 uppercase tracking-wider mb-1">Starting From</p>
                    <p className="text-2xl font-serif text-champagne">KD {service.price}</p>
                  </div>
                  <a href="#appointment" className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center text-champagne hover:bg-champagne hover:text-midnight transition-colors">
                    →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
