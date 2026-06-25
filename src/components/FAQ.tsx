import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'Do I need an appointment?',
    a: 'While appointments are highly recommended to ensure you receive your preferred time and stylist, we do our best to accommodate walk-ins when possible.'
  },
  {
    q: 'Are walk-ins accepted?',
    a: 'Yes, walk-ins are accepted based on availability. However, booking in advance guarantees your spot.'
  },
  {
    q: 'Do you offer hair coloring?',
    a: 'Absolutely. Our expert colorists offer a wide range of services including highlights, balayage, full color, and color correction.'
  },
  {
    q: 'Do you provide manicure and pedicure?',
    a: 'Yes, we offer comprehensive nail care including classic manicures/pedicures, gel polish, and specialized treatments.'
  },
  {
    q: 'What beauty treatments are available?',
    a: 'We provide various facials, skin treatments, eyebrow styling, and bridal makeup services.'
  },
  {
    q: 'What are your business hours?',
    a: 'We are open daily from 10 AM to 8 PM to serve you.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-midnight">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-champagne/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-champagne" />
            <span className="text-champagne uppercase tracking-widest text-sm font-medium">Inquiries</span>
            <div className="h-[1px] w-8 bg-champagne" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-moon">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={cn("font-serif text-lg transition-colors", openIndex === idx ? "text-champagne" : "text-moon")}>
                  {faq.q}
                </span>
                <ChevronDown className={cn("w-5 h-5 text-moon/50 transition-transform duration-300", openIndex === idx && "rotate-180 text-champagne")} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-moon/70 font-light border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
