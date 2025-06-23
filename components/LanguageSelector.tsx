'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useTranslation } from '@/contexts/LanguageContext';

// 🌍 Componente per la selezione della lingua
export default function LanguageSelector() {
  const { language, setLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // 🎨 Trova la lingua corrente per mostrare la flag
  const currentLanguage = availableLanguages.find(
    (lang) => lang.code === language
  );

  return (
    <div className="relative">
      {/* 🎯 Pulsante principale per aprire/chiudere il selettore */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 px-4 py-2 rounded-full
          bg-white/10 backdrop-blur-md border border-white/20
          text-white hover:bg-white/20 transition-all duration-300
          shadow-lg hover:shadow-emerald-500/25
        "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* 🏳️ Flag della lingua corrente */}
        <span className="text-lg">{currentLanguage?.flag}</span>

        {/* 🔤 Icona delle lingue */}
        <Languages size={16} />

        {/* ⬇️ Indicatore di dropdown */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.button>

      {/* 📋 Dropdown menu delle lingue */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-full mt-2 right-0 z-50
              bg-black/90 backdrop-blur-xl border border-white/20
              rounded-2xl overflow-hidden shadow-2xl
              min-w-[150px]
            "
          >
            {/* 🌈 Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl" />

            <div className="relative">
              {availableLanguages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-left
                    transition-all duration-300 relative
                    ${
                      language === lang.code
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'text-white hover:bg-white/10'
                    }
                    ${index === 0 ? 'rounded-t-2xl' : ''}
                    ${
                      index === availableLanguages.length - 1
                        ? 'rounded-b-2xl'
                        : ''
                    }
                  `}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* ✨ Indicatore di selezione */}
                  {language === lang.code && (
                    <motion.div
                      layoutId="activeLanguage"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-r"
                    />
                  )}

                  {/* 🏳️ Flag */}
                  <span className="text-xl">{lang.flag}</span>

                  {/* 🔤 Nome lingua */}
                  <span className="font-medium">{lang.name}</span>

                  {/* ✅ Checkmark per la lingua attiva */}
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🖱️ Overlay per chiudere il dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
