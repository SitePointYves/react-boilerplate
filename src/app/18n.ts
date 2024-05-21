import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../messages/en.json";
import de from "../../messages/de.json";

const resources = {
  de: {
    translation: de,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
