
import { createContext, useState } from "react"

export const AlbumContext = createContext({})
export const AlbumProvider = ({ children }) => {
  const [Album, setAlbum] = useState({})
  return (
    <AlbumContext.Provider value={[Album, setAlbum]}>
      {children}
    </AlbumContext.Provider>
  )
}