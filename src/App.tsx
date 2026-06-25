/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Reviews from './components/Reviews';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-midnight min-h-screen text-moon selection:bg-champagne selection:text-midnight">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Services />
        <Gallery />
        <Packages />
        <Reviews />
        <WhyChooseUs />
        <FAQ />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
