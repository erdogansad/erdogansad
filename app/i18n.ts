import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "~/locales/en/translation.json";
import trTranslations from "~/locales/tr/translation.json";

import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,

    resources: {
      en: {
        translation: enTranslations,
      },
      tr: {
        translation: trTranslations,
      },
    },
    defaultNS: "translation",
    load: "languageOnly",
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
      convertDetectedLanguage: (lng: string) => lng.split("-")[0],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
