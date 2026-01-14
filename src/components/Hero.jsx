import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const title = "Planting Technology";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (currentIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + title[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 60); // typing speed (ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, title]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero text-gray-900 overflow-hidden"
    >
      {/* Optional subtle overlay pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.03] pointer-events-none" />
      
        <div className="container mx-auto px-6 pt-4 md:pt-6 pb-16 md:pb-0 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with typing animation - reduced top spacing */}
          <div className="mb-4 md:mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="inline-block">
                {displayedText}
                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-block w-1 h-12 md:h-16 bg-[#2ecc71] ml-1 align-middle"
                />
              </span>

              <br className="sm:hidden" />

              <span className="text-[#2ecc71] relative ml-3 md:ml-6">
                for Explosive Growth
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2ecc71]/30 blur-sm rounded-full" />
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-800/90 font-light max-w-3xl mx-auto leading-relaxed mb-12"
          >
            We build fast, scalable, and future-proof digital solutions that help
            ambitious startups and businesses grow without limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 bg-[#2ecc71] text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-xl shadow-[#2ecc71]/25 hover:shadow-[#2ecc71]/40 transition-all duration-300"
            >
              Let's Grow Together
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-10 py-5 rounded-xl font-medium text-lg border-2 border-gray-800/30 hover:bg-gray-800/5 text-gray-900 hover:text-gray-900 transition-all duration-300"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;