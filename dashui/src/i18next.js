import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import common_ar from './locales/ar/translation.json'
import common_en from './locales/en/translation.json'


const resources = 
{
    en:{translation:common_en},
    ar:{translation:common_ar}
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    // backend: {loadPath: '/public/locales/{{lng}}/{{ns}}.json'},
    resources,
    // fallbackLng: 'en',
    lng:'en',
    keySeparator:false,
    debug: true,
    
    // whitelist: languages,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  });


export default i18n;