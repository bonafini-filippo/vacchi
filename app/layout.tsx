/**
 * 🏗️ ROOT LAYOUT - Il layout principale dell'applicazione Next.js
 *
 * Questo file è FONDAMENTALE in Next.js 13+ con App Router:
 * - Definisce la struttura HTML base per TUTTE le pagine
 * - Configura i metadati SEO globali
 * - Importa gli stili globali
 * - Include componenti che devono apparire in ogni pagina
 */

// 📦 Import dei tipi TypeScript per Next.js
import type { Metadata } from 'next';

// 🎨 Import del font Geist di Vercel (moderno e ottimizzato per sviluppatori)
import { GeistSans } from 'geist/font/sans';

// 🎨 Import degli stili CSS globali (Tailwind CSS)
import './globals.css';

// 🧩 Import dei componenti che saranno presenti in ogni pagina
import { CustomCursor } from '@/components/CustomCursor';
import { LoadingScreen } from '@/components/LoadingScreen';

// 🌍 Import del provider per il sistema multilingua
import { LanguageProvider } from '@/contexts/LanguageContext';

// 🔍 METADATI SEO - Queste informazioni appaiono nei risultati di ricerca
export const metadata: Metadata = {
  // 📄 Titolo della pagina (appare nella tab del browser)
  title: 'Marco Vacchi - Full-Stack Developer',

  // 📝 Descrizione per i motori di ricerca
  description:
    'Portfolio di Marco Vacchi, uno sviluppatore full-stack junior specializzato in React, Node.js e tecnologie moderne.',

  // 🏷️ Parole chiave per la SEO
  keywords: [
    'Marco Vacchi',
    'Sviluppatore Full-Stack',
    'React',
    'Node.js',
    'JavaScript',
    'Sviluppo Web',
    'Portfolio',
  ],

  // 👤 Autore del sito
  authors: [{ name: 'Marco Vacchi' }],

  // 📱 Metadati per la condivisione sui social (Open Graph)
  openGraph: {
    title: 'Marco Vacchi - Sviluppatore Full-Stack',
    description:
      'Portfolio di Marco Vacchi, sviluppatore full-stack appassionato di tecnologie innovative.',
    type: 'website',
    locale: 'it_IT',
  },

  // 🐦 Metadati specifici per Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Marco Vacchi - Sviluppatore Full-Stack',
    description:
      'Portfolio di Marco Vacchi, sviluppatore full-stack appassionato di tecnologie innovative.',
  },

  // 📱 Configurazione per dispositivi mobili
  viewport: 'width=device-width, initial-scale=1',

  // 🤖 Istruzioni per i motori di ricerca
  robots: 'index, follow',
};

/**
 * 🏗️ COMPONENTE ROOT LAYOUT
 *
 * Questo è il componente principale che avvolge TUTTE le pagine della nostra app.
 * In Next.js 13+, questo sostituisce il vecchio _app.js e _document.js
 *
 * @param children - Tutte le pagine dell'app verranno passate come "children"
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Tipo TypeScript per i componenti React figli
}) {
  return (
    // 🌐 Tag HTML principale - in Next.js dobbiamo includere tutto dal <html>
    <html lang="it" className="scroll-smooth">
      {/*
        🔧 ATTRIBUTI IMPORTANTI:
        - lang="it": dice ai browser che il sito è in italiano
        - className="scroll-smooth": rende fluidi gli scroll automatici
      */}

      <body
        className={`${GeistSans.className} bg-black text-white overflow-x-hidden`}
      >
        {/*
          🎨 CLASSI CSS APPLICATE AL BODY:
          - ${GeistSans.className}: applica il font Geist di Vercel (moderno e leggibile)
          - bg-black: sfondo nero (tema dark)
          - text-white: testo bianco di default
          - overflow-x-hidden: nasconde lo scroll orizzontale per evitare layout rotti
        */}

        {/* 🌍 PROVIDER MULTILINGUA - Avvolge tutta l'app per fornire le traduzioni */}
        <LanguageProvider>
          {/* 🔄 SCHERMATA DI CARICAMENTO */}
          {/* Mostra un'animazione mentre il sito carica */}
          <LoadingScreen />

          {/* 🖱️ CURSORE PERSONALIZZATO */}
          {/* Un cursore animato che reagisce agli elementi interattivi */}
          <CustomCursor />

          {/* 📄 CONTENUTO PRINCIPALE */}
          {/* Qui vengono renderizzate tutte le pagine dell'app */}
          <div className="min-h-screen">{children}</div>
        </LanguageProvider>

        {/*
          🔍 SPIEGAZIONE AVANZATA:

          1. 📁 STRUTTURA: In Next.js 13+, ogni cartella in /app rappresenta una route
          2. 🔄 RENDERING: Next.js renderizza automaticamente i componenti
          3. 🎨 STYLING: Usiamo Tailwind CSS per gli stili utility-first
          4. ⚡ PERFORMANCE: Next.js ottimizza automaticamente immagini, fonts, etc.
          5. 🔍 SEO: I metadati configurati sopra migliorano la SEO
        */}
      </body>
    </html>
  );
}
