import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DateTime } from 'luxon'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {i18nDebug} from "@/lib/config";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    // passes i18n down to react-i18next
    .init({
        fallbackLng: 'en',
        debug: i18nDebug,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n