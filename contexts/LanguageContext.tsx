import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { SPANISH_LANGUAGE } from "../constants/languages";
import { Language, Translations } from "../constants/types";
import enTranslations from "../i18n/en";
import esTranslations from "../i18n/es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const getNestedValue = (
  obj: any,
  key: string,
  variables?: Record<string, any>
): string => {
  const value = key
    .split(".")
    .reduce((o, k) => (o && o[k] !== undefined ? o[k] : key), obj);

  if (typeof value === "string" && variables) {
    return Object.entries(variables).reduce(
      (str, [varName, varValue]) =>
        str.replace(new RegExp(`\\{\\{${varName}\\}\\}`), String(varValue)),
      value
    );
  }

  return value;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(SPANISH_LANGUAGE);

  const t = useMemo(
    () =>
      (key: string, variables?: Record<string, any>): string => {
        return getNestedValue(translations[language], key, variables) || key;
      },
    [language]
  );

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
