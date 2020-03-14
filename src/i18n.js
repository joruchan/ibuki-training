import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import translationEn from './locales/en/translations.json';
import translationFr from './locales/fr/translations.json';
import translationJp from './locales/ja/translations.json';

const languageDetector = new LanguageDetector(null, {
  order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage'],
});

i18n
  .use(XHR)
  .use(languageDetector)
  .init({
    resources: {
      en: {
        translations: translationEn,
      },
      fr: {
        translations: translationFr,
      },
      ja: {
        translations: translationJp,
      },
    },

    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    load: 'languageOnly',
    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: false,
    },
  });

export default i18n;
