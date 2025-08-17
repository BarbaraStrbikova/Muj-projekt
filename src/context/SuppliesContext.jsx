import {useEffect, useState, createContext } from "react";

import {supabase} from '../../src/supabase';

export const SuppliesContext = createContext(null)

export function SuppliesProvider({children}) {
  const [supplies, setSupplies] = useState([]);
  const [buySupplies, setBuySupplies] = useState([]);


  //    FUNKCE PRO ZASOBY


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
   getSupplies();
  getBuySupplies();
},[])


//  PŘIDÁ NOVOU ZÁSOBU
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

//  PRIDAVÁ NEBO UBIRÁ MNOŽSTVÍ DANE POLOŽKY
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

//    SMAŽE ZÁSOBU
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



//    FUNKCE PRO KOUPI NOVÉ ZASOBY


const getBuySupplies = async () => {
  const {data, error} = await supabase
  .from('suppliesToBuy')
  .select();

     if (error) {
    console.log(error);
    return;
  }

  setBuySupplies(data);
}

//    PŘESUNE POLOŽKU DO NAKUPNIHO SEZNAMU
const addBuySupplies = async (item, numbers, minimum) => {
  const {error} = await supabase
  .from('suppliesToBuy')
  .insert({
    item, 
    numbers,
    minimum,
  });

  if (error) {
     console.log("Chyba při ukládání zásob do nákupního seznamu:", error);
    return;
  }

  await getBuySupplies();
}


//  PRIDAVÁ NEBO UBIRÁ MNOŽSTVÍ DANE POLOŽKY 
  const updateBuySupplies = async (id, updatedValues) => {
     const {error} = await supabase
    .from('suppliesToBuy')
    .update(updatedValues)
    .eq('id', id)
    
    if (error) {
      console.log(error)
      return
    }

   await getBuySupplies();

  }

//  SMAŽE DANOU POLOŽKU
 const deleteBuySupply = async (id) => {

    const {error} = await supabase
    .from('suppliesToBuy')
    .delete()
    .eq('id', id)

      if (error) {
      console.log(error)
      return
    }
    
   await getBuySupplies()
  }




  return (
    <SuppliesContext.Provider value={{
      supplies,
      buySupplies,
      addNewSupply, 
      updateSupply,    
      addBuySupplies,
      deleteSupply,
      deleteBuySupply,
      getBuySupplies,
      updateBuySupplies,

                    
    }}>
      {children}
    </SuppliesContext.Provider>
  )
}