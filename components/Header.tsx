'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';

// 🎯 Componente Header con selettore di lingua
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔄 Monitora lo scroll per cambiare stile dell'header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 🏷️ Logo/Nome */}
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Marco Vacchi
          </motion.div>

          {/* 🌍 Selettore di lingua */}
          <LanguageSelector />
        </div>
      </div>
    </motion.header>
  );
}
