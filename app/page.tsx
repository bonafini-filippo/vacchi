/**
 * 🏠 HOMEPAGE - La pagina principale del portfolio
 *
 * 📁 PERCORSO: /app/page.tsx
 * 🌐 URL: http://localhost:3000/ (radice del sito)
 *
 * In Next.js 13+ con App Router:
 * - Ogni file page.tsx in una cartella diventa una route
 * - Questo file gestisce la homepage (/)
 * - È un Server Component di default (renderizzato sul server)
 * - Ma usiamo 'use client' perché abbiamo interazioni e animazioni
 */

// 🔧 DIRETTIVA NEXT.JS - Trasforma questo in un Client Component
'use client';

/**
 * 🧩 IMPORT DEI COMPONENTI
 *
 * Ogni sezione del portfolio è un componente separato per:
 * - 📦 Organizzazione migliore del codice
 * - 🔄 Riusabilità dei componenti
 * - 🐛 Debug più facile
 * - ⚡ Performance ottimizzate (lazy loading possibile)
 */

// 🎯 Header - Barra superiore con selettore lingua
import { Header } from '@/components/Header';

// 🎭 Sezione Hero - La prima cosa che vede l'utente
import { HeroSection } from '@/components/HeroSection';

// 👤 Sezione About - Informazioni personali e skills
import { AboutSection } from '@/components/AboutSection';

// 💼 Sezione Projects - Showcase dei progetti
import { ProjectsSection } from '@/components/ProjectsSection';

// 🏆 Sezione Experience - Esperienza lavorativa e formazione
import { ExperienceSection } from '@/components/ExperienceSection';

// 📞 Sezione Contact - Form di contatto e info
import { ContactSection } from '@/components/ContactSection';

// 🦶 Footer - Informazioni finali e link
import { Footer } from '@/components/Footer';

// 🚢 Navigation Dock - Menu di navigazione stile Apple
import { DockNavigation } from '@/components/DockNavigation';

// ⬆️ Pulsante Back to Top - Per tornare in cima alla pagina
import { BackToTop } from '@/components/BackToTop';

/**
 * 🏠 COMPONENTE HOMEPAGE
 *
 * Questo è il componente principale che Next.js renderizzerà quando
 * qualcuno visita la radice del nostro sito (/).
 *
 * 📋 STRUTTURA:
 * 1. <main> - Container principale semantico
 * 2. <section> - Ogni sezione del portfolio con ID univoco
 * 3. Componenti di navigazione e utilità
 *
 * 🔗 NAVIGAZIONE:
 * - Ogni sezione ha un ID (#hero, #about, etc.)
 * - La dock navigation usa questi ID per lo smooth scroll
 * - Gli utenti possono navigare cliccando sulla dock
 */
export default function Home() {
  return (
    // 🏗️ CONTAINER PRINCIPALE
    <main className="relative">
      {/*
        🎨 CLASSE CSS SPIEGATA:
        - relative: posizionamento relativo per gli elementi assoluti figli
      */}

      {/* 🎯 HEADER - Barra superiore con selettore lingua */}
      <Header />

      {/* 🎭 SEZIONE HERO - Prima impressione del visitatore */}
      <section id="hero">
        {/*
          🔍 PERCHÉ USIAMO <section>?
          - Semantica HTML5 corretta
          - Migliore accessibilità per screen readers
          - SEO ottimizzato
          - Struttura logica del documento
        */}
        <HeroSection />
      </section>

      {/* 👤 SEZIONE ABOUT - Chi è Marco */}
      <section id="about">
        <AboutSection />
      </section>

      {/* 💼 SEZIONE PROJECTS - Lavori realizzati */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* 🏆 SEZIONE EXPERIENCE - Percorso formativo */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* 📞 SEZIONE CONTACT - Come contattare Marco */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* 🦶 FOOTER - Informazioni finali */}
      <Footer />

      {/* 🚢 DOCK NAVIGATION - Menu di navigazione fisso */}
      <DockNavigation />
      {/*
        💡 POSIZIONATO DOPO IL FOOTER:
        - Si sovrappone al contenuto (position: fixed)
        - Sempre visibile durante lo scroll
        - Z-index alto per stare sopra tutto
      */}

      {/* ⬆️ BACK TO TOP - Pulsante per tornare in cima */}
      <BackToTop />
      {/*
        🎯 FUNZIONALITÀ:
        - Appare solo dopo aver scrollato
        - Smooth scroll fino all'inizio
        - Posizionato per non sovrapporsi alla dock
      */}
    </main>
  );
}

/**
 * 🎓 CONCETTI AVANZATI NEXT.JS USATI:
 *
 * 1. 📁 FILE-BASED ROUTING:
 *    - /app/page.tsx → homepage (/)
 *    - Non serve configurare route manualmente
 *
 * 2. 🖥️ SERVER vs CLIENT COMPONENTS:
 *    - Di default Next.js usa Server Components (più veloci)
 *    - 'use client' per componenti con stato/eventi
 *
 * 3. 📦 IMPORT ASSOLUTI:
 *    - @/components/ invece di ../../../components/
 *    - Configurato in tsconfig.json
 *
 * 4. ⚡ OTTIMIZZAZIONI AUTOMATICHE:
 *    - Code splitting automatico
 *    - Lazy loading dei componenti
 *    - Bundling ottimizzato
 *
 * 5. 🔍 SEO INTEGRATO:
 *    - Metadati nel layout.tsx
 *    - HTML semantico con <section>
 *    - Structure data automatica
 */
