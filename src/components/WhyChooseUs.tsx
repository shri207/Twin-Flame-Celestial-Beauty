import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'Warm Hospitality',
  'Skilled Professionals',
  'Personalized Treatments',
  'Beautiful Interior',
  'Premium Products',
  'Customer Satisfaction'
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-midnight border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-moon">Why Choose Twin Flame</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-champagne" />
              </div>
              <span className="text-moon font-medium tracking-wide">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
