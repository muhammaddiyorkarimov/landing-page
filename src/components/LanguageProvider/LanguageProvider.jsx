// src/components/LanguageProvider/LanguageProvider.jsx
import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language: i18n.language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
