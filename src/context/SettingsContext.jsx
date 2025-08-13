import { useState, createContext } from "react";

export const SettingsContext = createContext(null)

export function SettingsProvider({children}) {
  const [work, setWork] = useState();
  const [family, setFamily] = useState();

  const [item, setItem] = useState();
  const [numbers, setNumbers] = useState();
  const [minimum, setMinimum] = useState();

  
  const homeworkSubmit = (e) => {
    e.preventDefault()
    console.log(work)
    console.log(family)
    console.log('---')
  }

  
  const suppliesSubmit = (e) => {
    e.preventDefault()

    console.log(item)
    console.log(numbers)
    console.log(minimum)
    console.log('---')
  }


  return (
    <SettingsContext.Provider value={{
      work,
      setWork,
      family,
      setFamily,
      homeworkSubmit,
      item,
      setItem,
      numbers,
      setNumbers,
      minimum,
      setMinimum,
      suppliesSubmit,
    }}>
      {children}
    </SettingsContext.Provider>
  )
}