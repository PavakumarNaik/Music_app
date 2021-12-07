import { useContext } from "react"
import { LanguageContext} from "./languageprovider-context";
import { LangStrings } from "../consts/language";
export default function useTranslation() {
  const [locale] = useContext(LanguageContext)
  function translator(key) {
    return LangStrings[locale][key]  
  }
  return { translator, locale }
}