import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80', alt: 'Hair Styling', category: 'Hair Styling' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80', alt: 'Salon Interior', category: 'Salon Interior' },
  { url: 'https://images.unsplash.com/photo-1516975080661-460d3d526786?auto=format&fit=crop&q=80', alt: 'Beauty Treatments', category: 'Beauty Treatments' },
  { url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80', alt: 'Hair Coloring', category: 'Hair Coloring' },
  { url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80', alt: 'Customers', category: 'Customers' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-midnight">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-champagne" />
              <span className="text-champagne uppercase tracking-widest text-sm font-medium">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-moon mb-6">Cosmic Gallery</h2>
            <p className="text-lg text-moon/70 font-light leading-relaxed mb-8">
              Explore our celestial transformations. Each image captures a moment of beauty, elevated by our expert stylists in our luxurious space.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Hair Styling', 'Hair Coloring', 'Salon Interior', 'Beauty Treatments', 'Customers'].map((cat) => (
                <span key={cat} className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-moon/60 hover:border-champagne/50 hover:text-champagne transition-colors cursor-pointer">
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[320px] sm:max-w-[400px] mx-auto aspect-[3/4]"
          >
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Autoplay]}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-full h-full pb-12"
            >
              {galleryImages.map((image, idx) => (
                <SwiperSlide key={idx} className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-midnight/20 z-10" />
                  <img src={image.url} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-sm text-champagne text-xs uppercase tracking-wider border border-champagne/20">
                      {image.category}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
