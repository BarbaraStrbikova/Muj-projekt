import {useEffect, useState, createContext } from "react";

import {supabase} from '../../src/supabase';

export const SettingsContext = createContext(null)

export function SettingsProvider({children}) {
  const [homeworks, setHomeworks] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const [doneHomeworks, setDoneHomeworks] = useState([])
 

useEffect( () => {
  const fetchData = async () => {
    await getWorks()
    await getSupplies()
  }
  fetchData()
}, [])


  // PRO DOMACI UKOLY

  const getWorks = async () => {
    const {data, error} = await supabase
    .from('homeworks')
    .select()
    
    if (error) {
      console.log(error)
      return
    } 
  console.log("Načtené homeworks:", data) // Přidáno pro debug
  setHomeworks(data)
  }


  const addNewWork = async (work, family) => {
    const {error} = await supabase
    .from('homeworks')
    .insert({
      work,
      family,
    })

    if (error) {
      console.log(error)
      return
    }

   getWorks()    
  }

  const updateWork = async (id, work,family) => {
    const {error} = await supabase
    .from('homeworks')
    .update({
      work,
      family
    })
    .eq('id', id)
    
    if (error) {
      console.log(error)
      return
    }

   getWorks()
  }

const addDoneWork = (work) => {
  setDoneHomeworks([...doneHomeworks, work]);
}

  const deleteWorks = async (id) => {

    const {error} = await supabase
    .from('homeworks')
    .delete()
    .eq('id', id)

      if (error) {
      console.log(error)
      return
    }
    
   await getWorks()
  }


// PRO ZASOBY

  const getSupplies = async () => {
    const {data, error} = await supabase
    .from('supplies')
    .select()
      

    if (error) {
      console.log(error)
      return
    } 

   console.log("Načtené supplies:", data) // Přidáno pro debug
  setSupplies(data)
  }

 const addNewSupply = async (item, numbers, minimum) => {
    const {error} = await supabase
    .from('supplies')
    .insert({
      item,
      numbers,
      minimum,
    })
   

    if (error) {
      console.log(error)
      return
    }

   getSupplies()
  }


  return (
    <SettingsContext.Provider value={{
      homeworks,
      setHomeworks,
      doneHomeworks,
      deleteWork,
      addNewWork,
      updateWork,
      addDoneWork,
      deleteWorks,      
      supplies,
      addNewSupply,
                
    }}>
      {children}
    </SettingsContext.Provider>
  )
}