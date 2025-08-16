import {useEffect, useState, createContext } from "react";

import {supabase} from '../../src/supabase';

export const SuppliesContext = createContext(null)

export function SuppliesProvider({children}) {
  const [supplies, setSupplies] = useState([]);
  const [buySupplies, setBuySupplies] = useState([]);


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

useEffect( () => {
   getSupplies()
},[])



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
  setBuySupplies((prev) => [...prev, supply]);
};

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
    <SuppliesContext.Provider value={{
      supplies,
      buySupplies,
      addNewSupply, 
      updateSupply,    
      addBuySupplies,
      deleteSupply,
                    
    }}>
      {children}
    </SuppliesContext.Provider>
  )
}