import { useState } from 'react';
import { motion } from 'motion/react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '',
    service: '',
    date: '',
    time: '',
    messageText: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, gender, service, date, time, messageText } = formData;
    
    const message = `Hello, I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nGender: ${gender}\nService: ${service}\nDate: ${date}\nTime: ${time}\nMessage: ${messageText}\n\nPlease confirm my appointment.`;

    window.open(
      `https://wa.me/96550757313?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="appointment" className="py-24 relative overflow-hidden bg-midnight">
      <div className="absolute inset-0 bg-cosmic/5" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-serif text-moon mb-4">Book Your Experience</h2>
            <p className="text-moon/70 font-light">Schedule your celestial transformation today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-moon/50">Full Name *</label>
                <input required type="text" name="name" onChange={handleChange} className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-moon focus:outline-none focus:border-champagne transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-moon/50">Phone Number *</label>
                <input required type="tel" name="phone" onChange={handleChange} className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-moon focus:outline-none focus:border-champagne transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-moon/50">Email</label>
                <input type="email" name="email" onChange={handleChange} className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-moon focus:outline-none focus:border-champagne transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-moon/50">Gender *</label>
                <select required name="gender" onChange={handleChange} className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-moon focus:outline-none focus:border-champagne transition-colors appearance-none">
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-moon/50">Service *</label>
              <select required name="service" onChange={handleChange} className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-moon focus:outline-none focus:border-champagne transition-colors appearance-none">
                <option value="">Select Service</option>
                <option value="Hair Styling">Hair Styling</option>
                <option value="Hair Coloring">Hair Coloring</option>
                <option value="Nail Care">Nail Care</option>
                <option value="Facial & Skin">Facial & Skin Care</option>
                <option value="Bridal">Bridal Package</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-moon/50">Preferred Date *</label>
                <input required type="date" name="date" onChange={handleChange} className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-moon focus:outline-none focus:border-champagne transition-colors [color-scheme:dark]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-moon/50">Preferred Time *</label>
                <input required type="time" name="time" onChange={handleChange} className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-moon focus:outline-none focus:border-champagne transition-colors [color-scheme:dark]" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-moon/50">Additional Message</label>
              <textarea name="messageText" rows={4} onChange={handleChange} className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-moon focus:outline-none focus:border-champagne transition-colors resize-none" />
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-champagne text-midnight font-medium hover:bg-champagne/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 mt-4">
              Book via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
