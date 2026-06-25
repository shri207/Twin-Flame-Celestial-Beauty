import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import Starfield from './Starfield';
import { Star, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Starfield */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Starfield count={8000} />
        </Canvas>
      </div>

      {/* Nebula Gradients */}
      <div className="absolute inset-0 z-0 bg-midnight/60">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cosmic/30 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-lavender/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-champagne/30 bg-midnight/50 backdrop-blur-sm mb-8">
            <Star className="w-4 h-4 text-champagne fill-champagne" />
            <span className="text-sm font-medium tracking-wide text-champagne">Premium Beauty Salon in Kuwait</span>
            <Star className="w-4 h-4 text-champagne fill-champagne" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight">
            TWIN FLAME <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-moon via-champagne to-lavender">
              BEAUTY SALON
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-moon/80 font-serif italic max-w-2xl mx-auto mb-10">
            "Where Beauty Finds Its Perfect Balance"
          </p>
          
          <p className="text-base md:text-lg text-moon/60 max-w-2xl mx-auto mb-12 font-light">
            Experience expert hair, nail and beauty services in a welcoming environment where every detail is designed to make you feel confident and cared for.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#appointment"
              className="px-8 py-4 rounded-full bg-champagne text-midnight font-medium hover:bg-champagne/90 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-moon font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Sparkles className="w-5 h-5" />
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Floating Highlights */}
        <motion.div 
          className="absolute bottom-10 left-6 md:left-12 lg:left-24 hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-midnight bg-cosmic flex items-center justify-center text-xs">👤</div>
            ))}
          </div>
          <div>
            <div className="flex text-champagne text-sm">
              {'★★★★★'}
            </div>
            <div className="text-xs text-moon/70">4.4 Rating (19+ Reviews)</div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 right-6 md:right-12 lg:right-24 hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-10 h-10 rounded-full bg-champagne/20 flex items-center justify-center text-champagne">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-moon">Arkan Complex</div>
            <div className="text-xs text-moon/70">Kuwait City</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-champagne to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-champagne">Scroll</span>
      </motion.div>
    </section>
  );
}
