import {useEffect, useState, createContext } from "react";

import {supabase} from '../supabase';

export const HomeworksContext = createContext(null)

export function HomeworksProvider({children}) {
  const [homeworks, setHomeworks] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([])
  

useEffect( () => {
  const fetchData = async () => {
    try {
    await getWorks()
    await getDoneHomeworks()
    } catch (err) {
      console.error("Chyba pri nacitani dat:", err);
    }
  }
  fetchData()
}, [])

//    FUNKCE PRO NOVÝ ÚKOL

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


//    PŘIDÁ NOVÝ ÚKOL
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

//    ÚPRAVA ÚKOLU
  const updateWork = async (id, work,family) => {
    const {error} = await supabase
    .from('homeworks')
    .update({work, family}
    )
    .eq('id', id)
    
    if (error) {
      console.log(error)
      return
    }

   await getWorks()
  }

  //    SMAŽE DANÝ ÚKOL
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


//    FUNKCE PRO SPLNĚNÉ ÚKOLY


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

//    PŘESUNÉ POLOŽKY DO SEZNAMU SPLNĚNÝCH ÚKOLŮ
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

 //    SMAŽE DANÝ ÚKOL
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




  return (
    <HomeworksContext.Provider value={{
      homeworks,
      setHomeworks,
      deleteWork,
      addNewWork,
      addDoneWork,
      deleteDoneWork,
      getDoneHomeworks,
      updateWork,
      tasksCompleted,
                     
    }}>
      {children}
    </HomeworksContext.Provider>
  )
}