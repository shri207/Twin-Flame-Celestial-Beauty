import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-champagne" />
            <span className="text-champagne uppercase tracking-widest text-sm font-medium">Get in Touch</span>
            <div className="h-[1px] w-8 bg-champagne" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-moon">Visit Our Observatory</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-champagne" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-moon mb-2">Location</h4>
                <p className="text-moon/70 font-light leading-relaxed">
                  Arkan Complex<br />
                  Jasim Mohamad Al Bahar Street<br />
                  1st Ring Road<br />
                  Kuwait City, Kuwait
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-champagne" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-moon mb-2">Business Hours</h4>
                <p className="text-moon/70 font-light leading-relaxed">
                  Open Daily<br />
                  10:00 AM – 8:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-champagne" />
              </div>
              <div>
                <h4 className="text-xl font-serif text-moon mb-2">Contact</h4>
                <p className="text-moon/70 font-light leading-relaxed">
                  Phone: +965 507 57313<br />
                  WhatsApp: +965 507 57313
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 relative"
          >
            <div className="absolute inset-0 bg-midnight/20 z-10 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.969894380963!2d47.969192476595514!3d29.371233050186326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d2642730623%3A0x7d6c8b93557e9376!2sArkan%20Complex!5e0!3m2!1sen!2sus!4v1716301234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
