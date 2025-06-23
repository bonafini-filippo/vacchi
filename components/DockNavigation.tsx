/**
 * 🚢 DOCK NAVIGATION - Menu di navigazione stile Apple
 *
 * 🎯 SCOPO: Creare un menu di navigazione fisso in basso con effetti visivi
 * 🎨 DESIGN: Ispirato al Dock di macOS con animazioni fluide
 * 📱 RESPONSIVE: Funziona su desktop, tablet e mobile
 *
 * 🧰 TECNOLOGIE USATE:
 * - React Hooks (useState)
 * - Framer Motion (animazioni)
 * - Tailwind CSS (stili)
 * - Lucide React (icone)
 */

// 🔧 DIRETTIVA NEXT.JS - Questo è un Client Component
'use client';

// 📦 IMPORT DELLE LIBRERIE

// ⚛️ React Hooks - Per gestire lo stato del componente
import { useState } from 'react';

// 🎬 Framer Motion - Per animazioni fluide e professionali
import { motion } from 'framer-motion';

// 🎨 Icone - Set di icone moderne e pulite
import { Home, User, FolderOpen, Trophy, Mail } from 'lucide-react';

// 🌍 Sistema di traduzioni
import { useT } from '@/contexts/LanguageContext';

/**
 * 🚢 COMPONENTE DOCK NAVIGATION
 *
 * Questo componente crea un menu di navigazione fisso che:
 * - Resta sempre visibile in basso allo schermo
 * - Si anima quando l'utente passa il mouse sopra
 * - Permette di navigare tra le sezioni del portfolio
 * - Ha un design moderno ispirato al Dock di Apple
 */
export function DockNavigation() {
  // 🌍 Hook per le traduzioni
  const t = useT();

  // 🎯 STATO DEL COMPONENTE
  // Tiene traccia di quale icona è attualmente sotto il mouse
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /**
   * 📋 CONFIGURAZIONE DELLE VOCI DI MENU
   *
   * Ogni oggetto rappresenta una sezione del portfolio con:
   * - name: nome visualizzato nel tooltip (ora tradotto)
   * - href: ID della sezione verso cui navigare (#hero, #about, etc.)
   * - icon: componente icona da visualizzare
   * - color: gradiente di colore per l'icona
   */
  const navItems = [
    {
      name: t('nav.home'),
      href: '#hero',
      icon: Home,
      color: 'from-emerald-500 to-cyan-500',
    },
    {
      name: t('nav.about'),
      href: '#about',
      icon: User,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: t('nav.projects'),
      href: '#projects',
      icon: FolderOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: t('nav.experience'),
      href: '#experience',
      icon: Trophy,
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: t('nav.contact'),
      href: '#contact',
      icon: Mail,
      color: 'from-red-500 to-rose-500',
    },
  ];

  /**
   * 🎯 FUNZIONE DI NAVIGAZIONE
   *
   * Quando l'utente clicca su un'icona:
   * 1. Trova l'elemento HTML con l'ID corrispondente
   * 2. Fa scroll fino a quell'elemento con animazione fluida
   *
   * @param href - L'ID della sezione (es: '#hero', '#about')
   */
  const scrollToSection = (href: string) => {
    // 🔍 Cerca l'elemento nel DOM usando querySelector
    const element = document.querySelector(href);

    // ✅ Se l'elemento esiste, fai scroll fino ad esso
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Scroll animato invece di istantaneo
      });
    }
  };

  return (
    // 🏗️ CONTAINER PRINCIPALE - Posizionamento fisso in basso
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      {/*
        🎨 CLASSI CSS SPIEGATE:
        - fixed: posizione fissa rispetto al viewport
        - bottom-6: 24px dal bordo inferiore
        - left-0 right-0: occupa tutta la larghezza
        - flex justify-center: centra il contenuto orizzontalmente
        - z-50: z-index alto per stare sopra tutto
        - pointer-events-none: disabilita i click sul container esterno
      */}

      {/* 🎬 CONTAINER ANIMATO - Gestisce l'animazione di entrata */}
      <motion.div
        className="pointer-events-auto"
        // 🎭 ANIMAZIONE INIZIALE: parte da sotto e invisibile
        initial={{ y: 100, opacity: 0 }}
        // 🎯 ANIMAZIONE FINALE: posizione normale e visibile
        animate={{ y: 0, opacity: 1 }}
        // ⏱️ TIMING: inizia dopo 1 secondo, dura 0.5 secondi
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/*
          💡 PERCHÉ pointer-events-auto?
          Il container padre ha pointer-events-none per non interferire
          con il resto della pagina, ma questo elemento deve ricevere i click
        */}

        {/* 🎨 SFONDO DELLA DOCK - Effetto vetro con blur */}
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
          {/*
            🎨 EFFETTI VISIVI SPIEGATI:
            - bg-black/60: sfondo nero con 60% trasparenza
            - backdrop-blur-xl: effetto blur sullo sfondo dietro
            - border border-white/10: bordo bianco sottile e trasparente
            - rounded-2xl: angoli molto arrotondati
            - px-4 py-3: padding interno
            - shadow-2xl: ombra molto pronunciata
          */}

          {/* 📱 CONTAINER DELLE ICONE */}
          <div className="flex items-center justify-center space-x-3">
            {/*
              🔄 MAPPA DELLE ICONE
              Per ogni voce di menu, creiamo un pulsante animato
            */}
            {navItems.map((item, index) => {
              // 🎨 Ottieni il componente icona per questa voce
              const IconComponent = item.icon;

              // 🎯 Controlla se questa icona è sotto il mouse
              const isHovered = hoveredIndex === index;

              return (
                // 🎬 PULSANTE ANIMATO
                <motion.button
                  key={item.name} // Chiave univoca per React
                  onClick={() => scrollToSection(item.href)} // Naviga quando cliccato
                  // 🖱️ GESTIONE HOVER
                  onHoverStart={() => setHoveredIndex(index)} // Mouse entra
                  onHoverEnd={() => setHoveredIndex(null)} // Mouse esce
                  className="relative group" // Posizionamento relativo per i figli assoluti
                  // 🎭 ANIMAZIONI HOVER
                  whileHover={{ y: -8 }} // Si alza di 8px al hover
                  whileTap={{ scale: 0.95 }} // Si rimpicciolisce quando premuto
                  // ⚙️ CONFIGURAZIONE ANIMAZIONE
                  transition={{
                    type: 'spring', // Animazione elastica
                    stiffness: 400, // Velocità della molla
                    damping: 10, // Smorzamento dell'oscillazione
                  }}
                >
                  {/* 💬 TOOLTIP - Mostra il nome al hover */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded-md whitespace-nowrap"
                    // 🎭 ANIMAZIONI TOOLTIP
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0, // Diventa visibile
                      scale: isHovered ? 1 : 0.8, // Si ingrandisce
                      y: isHovered ? 0 : 10, // Si alza
                    }}
                    transition={{ duration: 0.2 }} // Animazione veloce
                    style={{ pointerEvents: 'none' }} // Non interferisce con il mouse
                  >
                    {item.name}
                    {/* 🔻 FRECCIA DEL TOOLTIP */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/80"></div>
                  </motion.div>

                  {/* 🎨 CONTAINER DELL'ICONA */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                    // 🎭 ANIMAZIONI ICONA
                    animate={{
                      scale: isHovered ? 1.2 : 1, // Si ingrandisce al hover
                      rotate: isHovered ? [0, -10, 10, 0] : 0, // Rotazione oscillante
                    }}
                    transition={{
                      duration: 0.3,
                      rotate: {
                        duration: 0.6,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    {/* 🎨 ICONA VERA E PROPRIA */}
                    <IconComponent size={20} />
                  </motion.div>

                  {/* ✨ EFFETTO BAGLIORE AL HOVER */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-0 blur-md`}
                    // 🎭 ANIMAZIONI BAGLIORE
                    animate={{
                      opacity: isHovered ? 0.6 : 0, // Diventa visibile
                      scale: isHovered ? 1.3 : 1, // Si espande
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      pointerEvents: 'none', // Non interferisce con il mouse
                      zIndex: -1, // Sta dietro all'icona
                    }}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* 🪞 EFFETTO RIFLESSO - Simula il riflesso del Dock Apple */}
        <motion.div
          className="absolute top-full left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent rounded-b-2xl"
          // 🎭 ANIMAZIONE RIFLESSO
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            // 🎭 MASCHERE CSS per l'effetto dissolvenza
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)',
          }}
        />
      </motion.div>
    </div>
  );
}

/**
 * 🎓 CONCETTI AVANZATI USATI:
 *
 * 1. 🎬 FRAMER MOTION:
 *    - motion.div per animazioni fluide
 *    - whileHover, whileTap per interazioni
 *    - animate per transizioni di stato
 *
 * 2. ⚛️ REACT HOOKS:
 *    - useState per gestire lo stato hover
 *    - Aggiornamenti reattivi dell'UI
 *
 * 3. 🎨 TAILWIND CSS:
 *    - Utility classes per stili rapidi
 *    - Responsive design integrato
 *    - Gradienti e effetti moderni
 *
 * 4. 🔧 TYPESCRIPT:
 *    - Tipizzazione forte per sicurezza
 *    - Intellisense migliorato
 *    - Meno bug in produzione
 *
 * 5. 🎯 UX DESIGN:
 *    - Feedback visivo immediato
 *    - Animazioni significative
 *    - Accessibilità considerata
 */
