'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { translations, Language } from '@/lib/translations';

// 🌍 Interface per il contesto delle traduzioni
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any; // Cambiato da string a any per supportare array
  availableLanguages: { code: Language; name: string; flag: string }[];
}

// 🎯 Creazione del Context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// 🗣️ Lingue disponibili con relative informazioni
const AVAILABLE_LANGUAGES = [
  { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
];

// 💾 Chiave per il localStorage
const LANGUAGE_STORAGE_KEY = 'preferred-language';

// 🎁 Provider del contesto linguistico
export function LanguageProvider({ children }: { children: ReactNode }) {
  // 🌐 Stato della lingua corrente (default: italiano)
  const [language, setLanguageState] = useState<Language>('it');

  // 🔄 Carica la lingua salvata al mounting del componente
  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    ) as Language;

    if (savedLanguage && (savedLanguage === 'it' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // 🌍 Fallback: prova a rilevare la lingua del browser
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith('it')) {
        setLanguageState('it');
      } else {
        setLanguageState('en');
      }
    }
  }, []);

  // 🔄 Funzione per cambiare lingua
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

  // 🔍 Funzione di traduzione che naviga nell'oggetto delle traduzioni
  const t = (key: string): any => {
    try {
      // 🗂️ Divide la chiave per navigare nell'oggetto annidato
      // Esempio: "hero.title" diventa ["hero", "title"]
      const keys = key.split('.');
      let value: any = translations[language];

      // 🧭 Naviga attraverso le chiavi annidate
      for (const k of keys) {
        value = value?.[k];
      }

      // ✅ Ritorna il valore trovato (stringa o array) o la chiave originale se non trovata
      return value || key;
    } catch (error) {
      // 🚨 In caso di errore, ritorna la chiave originale
      console.warn(
        `Translation key "${key}" not found for language "${language}"`
      );
      return key;
    }
  };

  // 📦 Valore del contesto da fornire ai componenti figli
  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    availableLanguages: AVAILABLE_LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// 🪝 Hook personalizzato per usare il contesto delle traduzioni
export function useTranslation() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  return context;
}

// 🪝 Hook semplificato per accedere solo alla funzione di traduzione
export function useT() {
  const { t } = useTranslation();
  return t;
}
