import { useState, createContext } from "react";

export const SettingsContext = createContext(null)

export function SettingsProvider({children}) {
  const [works, setWorks] = useState([]);
  const [supplies, setSupplies] = useState([])
  

 

  return (
    <SettingsContext.Provider value={{
      works,

      supplies,
                
    }}>
      {children}
    </SettingsContext.Provider>
  )
}