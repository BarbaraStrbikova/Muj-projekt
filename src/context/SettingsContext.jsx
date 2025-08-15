import {useEffect, useState, createContext } from "react";

import {supabase} from '../../src/supabase';

export const SettingsContext = createContext(null)

export function SettingsProvider({children}) {
  const [homeworks, setHomeworks] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([])
  // const [doneHomeworks, setDoneHomeworks] = useState([]);
  const [buySupplies, setBuySupplies] = useState([]);


useEffect( () => {
  const fetchData = async () => {
    try {
    await getWorks()
    await getSupplies()
    await getDoneHomeworks()
    } catch (err) {
      console.error("Chyba pri nacitani dat:", err);
    }
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

   await getWorks()    
  }

  // const updateWork = async (id, work,family) => {
  //   const {error} = await supabase
  //   .from('homeworks')
  //   .update({work, family}
  //   )
  //   .eq('id', id)
    
  //   if (error) {
  //     console.log(error)
  //     return
  //   }

  //  await getWorks()
  // }

const getDoneHomeworks = async () => {
  const {data, error} = await supabase
  .from('tasksCompleted')
  .select();

   if (error) {
    console.log(error);
    return;
  }

  setTasksCompleted(data);

}

const addDoneWork = async (work, family) => {
  const { error } = await supabase
    .from('tasksCompleted')
    .insert({
      work,
      family,
    });

  if (error) {
    console.log("Chyba při ukládání splněného úkolu:", error);
    return;
  }

  await getDoneHomeworks();
}



  const deleteWork = async (id) => {

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

  const deleteDoneWork =async (id) => {
    const {error} = await supabase
    .from('tasksCompleted')
    .delete()
    .eq('id', id)

      if (error) {
    console.log("Chyba při mazání splněného úkolu:", error);
    return;
  }

  await getDoneHomeworks();
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

   console.log("Načtené supplies:", data)
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

   await getSupplies()
  }

  const updateSupply = async (id, updatedValues) => {
     const {error} = await supabase
    .from('supplies')
    .update(updatedValues)
    .eq('id', id)
    
    if (error) {
      console.log(error)
      return
    }

   await getSupplies();

  }

  const addBuySupplies = (supply) => {
  setBuySupplies([...buySupplies, supply]);
}

 const deleteSupply = async (id) => {

    const {error} = await supabase
    .from('supplies')
    .delete()
    .eq('id', id)

      if (error) {
      console.log(error)
      return
    }
    
   await getSupplies()
  }



  return (
    <SettingsContext.Provider value={{
      homeworks,
      setHomeworks,
      deleteWork,
      addNewWork,
      addDoneWork,
      deleteDoneWork,
      getDoneHomeworks,
      tasksCompleted,
      supplies,
      addNewSupply,
      addBuySupplies,
      deleteSupply,
      updateSupply,
                
    }}>
      {children}
    </SettingsContext.Provider>
  )
}