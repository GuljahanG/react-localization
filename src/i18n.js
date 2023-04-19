import i18next from "i18next"
import { initReactI18next } from "react-i18next"

//Import files
import translationEnglish from "./translations/EN/translation.json"
import translationRussion from "./translations/RU/translation.json"

const resources = {
    ru: {
        translation: translationRussion 
    },
    en: {
        translation: translationEnglish 
    }
}


i18next.use(initReactI18next)
.init({
   resources,
   lng: "en",
   
});

export default i18next