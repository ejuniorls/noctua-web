import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "pt",
        debug: true,
        interpolation: { escapeValue: false },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json", // Carrega traduções divididas
        },
        ns: ["sign_in", "sign_in"], // Define namespaces
        defaultNS: "common",
    });

export default i18n;
