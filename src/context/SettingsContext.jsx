import { useState, createContext } from "react";

export const SettingsContext = createContext(null)

export function SettingsProvider({children}) {
  const [works, setWorks] = useState([]);
  const [supplies, setSupplies] = useState([])
  
  const addNewWork = (work, family) => {
    setWorks (
      // ...works, 
      {
        work,
        family
      }
    )
  }

  const addNewSupply = (item, numbers, minimum) => {
    setSupplies (
      // ...supplies,
      {
        item, 
        numbers,
        minimum
      }
    )
  }
 

  return (
    <SettingsContext.Provider value={{
      works,
      addNewWork,
      supplies,
      addNewSupply,
                
    }}>
      {children}
    </SettingsContext.Provider>
  )
}