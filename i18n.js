import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from './i18n/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
    },
    lng: process.env.NEXT_PUBLIC_LANG,
    fallbackLng: 'en',
    interpolation: {escapeValue: false},
    nsSeparator: false,
    keySeparator: false,
  });