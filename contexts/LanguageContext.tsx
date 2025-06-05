import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import esTranslations from '../i18n/es';
import enTranslations from '../i18n/en';

type Language = 'es' | 'en';

type Translations = {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
    namePlaceholder: string;
    continueButton: string;
    nameQuestion: string;
  };
  // Agregar más traducciones según sea necesario
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const getNestedValue = (obj: any, key: string): string => {
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : key), obj);
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = useMemo(() => (key: string): string => {
    return getNestedValue(translations[language], key) || key;
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
