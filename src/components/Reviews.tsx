import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Gaylyn Fernandes',
    text: 'The warm welcome and hospitality stood out immediately. The salon has a beautiful atmosphere and thoughtful attention to detail.',
    rating: 5,
  },
  {
    name: 'Avery McCollum',
    text: 'Beautiful and stylish salon with wonderful service. My hair and nails turned out exactly as I hoped.',
    rating: 5,
  },
  {
    name: 'Marie',
    text: 'I loved my hair coloring and trim. Everything looked natural and beautifully done.',
    rating: 5,
  },
  {
    name: 'Sara A.',
    text: 'An absolute oasis. The facial was incredibly relaxing and my skin has never looked better.',
    rating: 5,
  },
  {
    name: 'Nour M.',
    text: 'Professional staff and a very clean environment. I highly recommend their nail care services.',
    rating: 5,
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative bg-midnight overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-lavender/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cosmic/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-champagne" />
            <span className="text-champagne uppercase tracking-widest text-sm font-medium">Testimonials</span>
            <div className="h-[1px] w-8 bg-champagne" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-moon">Client Stories</h2>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <motion.div 
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-champagne rounded-full flex items-center justify-center text-midnight font-serif text-3xl shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  "
                </div>
                <div className="flex justify-center gap-1 mb-6 mt-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-champagne fill-champagne" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-moon/90 font-light italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
                <h4 className="text-champagne font-serif text-xl">— {review.name}</h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
