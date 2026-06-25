import { motion } from 'motion/react';

const stats = [
  { label: 'Happy Clients', value: '5000+' },
  { label: 'Beauty Specialists', value: '10+' },
  { label: 'Years Experience', value: '8+' },
  { label: 'Customer Rating', value: '4.4★' },
];

export default function Story() {
  return (
    <section id="story" className="py-24 relative overflow-hidden bg-midnight">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cosmic/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-champagne" />
              <span className="text-champagne uppercase tracking-widest text-sm font-medium">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-moon">
              A Constellation of Beauty & Care
            </h2>
            
            <p className="text-lg text-moon/70 font-light leading-relaxed mb-6">
              Twin Flame Beauty Salon combines professional beauty services with a warm and welcoming atmosphere. From the moment clients arrive, the experience is centered on comfort, personalized care and attention to detail.
            </p>
            
            <p className="text-lg text-moon/70 font-light leading-relaxed mb-10">
              Just as stars align in the night sky, our team of experts comes together to bring out your natural glow, offering a celestial escape from the everyday.
            </p>
            
            <a href="#about" className="inline-block border-b border-champagne text-champagne pb-1 hover:text-moon hover:border-moon transition-colors">
              Read Our Full Journey
            </a>
          </motion.div>

          {/* Stats / Constellation nodes */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Constellation Lines SVG */}
            <svg className="absolute inset-0 w-full h-full stroke-champagne/20" style={{ strokeWidth: 1, strokeDasharray: '4 4' }}>
              <motion.line x1="20%" y1="20%" x2="80%" y2="40%" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="80%" y1="40%" x2="30%" y2="80%" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
              <motion.line x1="30%" y1="80%" x2="70%" y2="90%" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.8 }} />
              <motion.line x1="20%" y1="20%" x2="30%" y2="80%" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }} />
            </svg>

            {/* Nodes */}
            <motion.div 
              className="absolute top-[10%] left-[10%] flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-cosmic border border-champagne/30 flex items-center justify-center shadow-[0_0_30px_rgba(74,58,124,0.5)]">
                <span className="text-xl font-serif text-champagne">{stats[0].value}</span>
              </div>
              <span className="mt-4 text-sm text-moon/80 uppercase tracking-widest">{stats[0].label}</span>
            </motion.div>

            <motion.div 
              className="absolute top-[30%] right-[10%] flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            >
              <div className="w-20 h-20 rounded-full bg-champagne/10 border border-champagne/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <span className="text-2xl font-serif text-champagne">{stats[1].value}</span>
              </div>
              <span className="mt-4 text-sm text-moon/80 uppercase tracking-widest">{stats[1].label}</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-[10%] left-[20%] flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <span className="text-lg font-serif text-champagne">{stats[2].value}</span>
              </div>
              <span className="mt-4 text-sm text-moon/80 uppercase tracking-widest">{stats[2].label}</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-[0%] right-[20%] flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-midnight border-2 border-lavender/40 flex items-center justify-center shadow-[0_0_30px_rgba(207,196,232,0.3)]">
                <span className="text-xl font-serif text-champagne">{stats[3].value}</span>
              </div>
              <span className="mt-4 text-sm text-moon/80 uppercase tracking-widest">{stats[3].label}</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
