
import { createContext, useState } from "react"

export const LanguageContext = createContext([])
export const LanguageProvider = ({ children }) => {
  const [language, setlanguage] = useState("english")
  return (
    <LanguageContext.Provider value={[language, setlanguage]}>
      {children}
    </LanguageContext.Provider>
  )
}