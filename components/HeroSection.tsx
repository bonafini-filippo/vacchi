/**
 * 🎭 HERO SECTION - La prima impressione del visitatore
 *
 * 🎯 SCOPO: Creare una landing page accattivante che catturi l'attenzione
 * 🎨 DESIGN: Gradiente animato, particelle fluttuanti, call-to-action
 * 📱 RESPONSIVE: Si adatta a tutti i dispositivi
 *
 * 🧰 TECNOLOGIE USATE:
 * - Framer Motion (animazioni)
 * - Tailwind CSS (stili responsive)
 * - Lucide React (icone)
 * - CSS Custom Animations (particelle)
 */

// 🔧 DIRETTIVA NEXT.JS - Client Component per interazioni e animazioni
'use client';

// 📦 IMPORT DELLE LIBRERIE

// 🎬 Framer Motion - Per animazioni fluide e professionali
import { motion } from 'framer-motion';

// 🎨 Icone - Per il pulsante call-to-action
import { ArrowDown } from 'lucide-react';

// ⚛️ React hooks
import { useState, useEffect } from 'react';

// 🌍 Sistema di traduzioni
import { useT } from '@/contexts/LanguageContext';

/**
 * 🎭 COMPONENTE HERO SECTION
 *
 * Questo è il primo componente che l'utente vede quando visita il sito.
 * È fondamentale per:
 * - Fare una buona prima impressione
 * - Comunicare chiaramente chi è Marco
 * - Invitare l'utente a esplorare il portfolio
 * - Mostrare le competenze tecniche attraverso il design
 */
// 🎯 INTERFACCIA PER LE PARTICELLE
interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export function HeroSection() {
  // 🌍 Hook per le traduzioni
  const t = useT();

  // ✨ State per le particelle - evita mismatch di hydration
  const [particles, setParticles] = useState<Particle[]>([]);

  // 🎯 Genera le particelle solo dopo l'hydration del client
  useEffect(() => {
    const generateParticles = (): Particle[] => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 3,
      }));
    };

    setParticles(generateParticles());
  }, []);

  /**
   * 🎯 FUNZIONE DI NAVIGAZIONE
   *
   * Quando l'utente clicca sul CTA:
   * 1. Trova la sezione progetti nel DOM
   * 2. Fa scroll fino a quella sezione con animazione fluida
   */
  const scrollToProjects = () => {
    // 🔍 Cerca l'elemento con ID 'projects'
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth', // Scroll animato invece di istantaneo
    });
  };

  return (
    // 🏗️ CONTAINER PRINCIPALE - Schermo intero con contenuto centrato
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/*
        🎨 CLASSI CSS SPIEGATE:
        - relative: posizionamento relativo per elementi assoluti figli
        - min-h-screen: altezza minima = altezza dello schermo
        - flex items-center justify-center: centra il contenuto
        - overflow-hidden: nasconde elementi che escono dai bordi
      */}

      {/* 🌈 SFONDO ANIMATO - Gradiente che cambia colori */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-xy"></div>
      {/*
        🎨 EFFETTI SPIEGATI:
        - absolute inset-0: copre tutto il container
        - bg-gradient-to-br: gradiente da top-left a bottom-right
        - from-black via-gray-900 to-black: nero → grigio scuro → nero
        - animate-gradient-xy: animazione custom definita in globals.css
      */}

      {/* ✨ PARTICELLE FLUTTUANTI - Aggiungono vita al background */}
      <div className="absolute inset-0">
        {/*
          🔄 PARTICELLE GENERATE DOPO HYDRATION
          Questo evita il mismatch di hydration tra server e client
          Le particelle vengono create solo dopo che React ha fatto l'hydration
        */}
        {particles.map((particle) => (
          // 🎬 PARTICELLA ANIMATA
          <motion.div
            key={particle.id} // Chiave univoca per React
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            // 📍 POSIZIONE PREDEFINITA (calcolata sul client)
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            // 🎭 ANIMAZIONE FLUTTUANTE
            animate={{
              y: [0, -30, 0], // Su e giù di 30px
              opacity: [0, 1, 0], // Fade in e out
            }}
            // ⏱️ TIMING PREDEFINITO (calcolato sul client)
            transition={{
              duration: particle.duration, // 3-5 secondi
              repeat: Infinity, // Loop infinito
              delay: particle.delay, // Delay 0-3s
            }}
          />
        ))}
      </div>

      {/* 📄 CONTENUTO PRINCIPALE - Il messaggio centrale */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/*
          🎨 CLASSI LAYOUT:
          - relative z-10: sta sopra lo sfondo
          - text-center: testo centrato
          - px-6: padding orizzontale
          - max-w-4xl mx-auto: larghezza max + centrato
        */}

        {/* 👋 SALUTO */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {t('hero.greeting')}
        </motion.p>

        {/* 🏷️ NOME PRINCIPALE - Il titolo più importante */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          // 🎭 ANIMAZIONE DI ENTRATA
          initial={{ opacity: 0, y: 30 }} // Inizia invisibile e spostato in basso
          animate={{ opacity: 1, y: 0 }} // Diventa visibile e si posiziona
          transition={{ duration: 0.8, delay: 0.2 }} // 0.8s di durata, inizia dopo 0.2s
        >
          {/* 🌈 TESTO CON GRADIENTE */}
          <span className="gradient-text">{t('hero.name')}</span>
          {/*
            💡 La classe 'gradient-text' è definita in globals.css
            Applica un gradiente colorato al testo invece del colore normale
          */}
        </motion.h1>

        {/* 💼 SOTTOTITOLO - Descrizione professionale */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-emerald-400"
          // 🎭 SECONDA ANIMAZIONE - Leggermente ritardata
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.title')}
        </motion.h2>

        {/* 📝 DESCRIZIONE - Informazioni aggiuntive */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          // 🎭 TERZA ANIMAZIONE - Ancora più ritardata
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* 🎯 CALL-TO-ACTION - Pulsante principale */}
        <motion.button
          onClick={scrollToProjects} // Naviga ai progetti quando cliccato
          className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25"
          // 🎭 QUARTA ANIMAZIONE - La più ritardata
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          // 🎬 INTERAZIONI HOVER E CLICK
          whileHover={{ scale: 1.05 }} // Si ingrandisce al hover
          whileTap={{ scale: 0.95 }} // Si rimpicciolisce al click
        >
          {/* 📝 CONTENUTO DEL PULSANTE */}
          <span className="relative z-10 flex items-center">
            {t('hero.cta')}
            {/* 🔽 ICONA FRECCIA - Si anima al hover */}
            <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
          </span>

          {/* 🌊 EFFETTO HOVER - Sfondo che si espande */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          {/*
            🎨 COME FUNZIONA:
            - absolute inset-0: copre tutto il pulsante
            - scale-x-0: inizia con larghezza 0 (invisibile)
            - group-hover:scale-x-100: al hover del gruppo diventa larghezza piena
            - origin-left: l'espansione parte da sinistra
          */}
        </motion.button>
      </div>
    </section>
  );
}

/**
 * 🎓 CONCETTI AVANZATI NEXT.JS UTILIZZATI:
 *
 * 1. 🎬 FRAMER MOTION:
 *    - Animazioni staggered (ritardate in sequenza)
 *    - Interazioni whileHover e whileTap
 *    - Controllo preciso di timing e easing
 *
 * 2. 🎨 TAILWIND CSS:
 *    - Responsive breakpoints (md:, lg:)
 *    - Utility classes per layout complessi
 *    - Pseudo-classes (:hover, :group-hover)
 *    - Custom animations via CSS
 *
 * 3. ⚛️ REACT PATTERNS:
 *    - Functional components moderni
 *    - Event handlers per interazioni
 *    - Composizione di componenti
 *
 * 4. 🌐 WEB STANDARDS:
 *    - HTML semantico con <section>
 *    - Accessibilità con descrizioni appropriate
 *    - Performance ottimizzate
 *
 * 5. 🎯 UX DESIGN:
 *    - Progressive disclosure (informazioni graduate)
 *    - Call-to-action prominente
 *    - Feedback visivo per ogni interazione
 *    - Hierarchy visiva chiara
 *
 * 6. 📱 RESPONSIVE DESIGN:
 *    - Mobile-first approach
 *    - Breakpoint strategici
 *    - Typography scale fluida
 *    - Touch-friendly interactions
 */
