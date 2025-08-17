import { useContext } from "react";
import {SuppliesContext } from "../../context/SuppliesContext";

import './Main.scss';
import { FormSupplies } from '../Forms/FormSupplies';


export function MainSupplies() {

const {
    supplies,
    addBuySupplies,
    deleteSupply,
    updateSupply} = useContext(SuppliesContext);


const check = supplies.filter(item => item.numbers <= item.minimum )
const fullSupplies = supplies.filter(item => item.numbers > item.minimum)


const sortedCheck = [...check].sort((a, b) => a.item.localeCompare(b.item));
const sortedFullSupplies = [...fullSupplies].sort((a, b) => a.item.localeCompare(b.item));



//    TLAČITKO PRO PŘESUN POLOŽKÝ DO SEZNAMU KOUPIT NOVOU POLOŽKU
const buySupply = id => { 
  const supplyToMove = supplies.find( item => item.id === id);
  if (supplyToMove) {

  addBuySupplies(supplyToMove.item, supplyToMove.numbers, supplyToMove.minimum );
 deleteSupply(id);
  }
}

  return (
    <section className="supplies">
      <h2 className="section__title">Zásoby v domácnosti</h2>
      <section className="supplies__add border">
        <h3 className="title">Nove polozky:</h3>

                <FormSupplies/>
                  
      </section>
      <section className="supplies__check border">
        <h3 className="title">Položky ke zkontrolovani:</h3>

        {sortedCheck.length === 0
      ? <p>Žadné položky k zobrazeni...</p>
      : <table>
        <thead>
          <tr>
            <th className="table-title">Položky</th>
            <th className="table-title">Počet</th>
            <th className="table-title">Minimum</th>
          </tr>
        </thead>
          <tbody>
            {sortedCheck.map(item => (
              <tr key={item.id}>
                <td className="table">{item.item}</td>
                <td className="table">{item.numbers}</td>
                <td className="table">{item.minimum}</td>         
                <td>
                  <button aria-label="Přidat počet" className="button" onClick={ () => {updateSupply(item.id, {numbers: item.numbers + 1})} }>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  
                 {item.numbers > 0 && (
                  <button aria-label="Ubrat počet" className="button" onClick={() => {
                  updateSupply(item.id, { numbers: item.numbers - 1 });
                    }}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
)}


                  <button aria-label="Koupit" className="button" onClick={() => {buySupply(item.id)}}>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </button>

                  <button aria-label="Smazat" className="button" onClick={() => {deleteSupply(item.id)}}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>

              </tr> ))}

          </tbody>
        </table>
        }

      </section>

      
      <section className="supplies__have border">
        <h3 className="title">Moje zásoby:</h3>

         {sortedFullSupplies.length === 0
      ? <p>Žadné položky k zobrazeni ...</p>
      : <table>
        <thead>
          <tr>
            <th className="table-title">Položky</th>
            <th className="table-title">Počet</th>
            <th className="table-title">Minimum</th>
          </tr>
        </thead>
          <tbody>
            {sortedFullSupplies.map(item => (
              <tr key={item.id}>
                <td className="table">{item.item}</td>
                <td className="table">{item.numbers}</td>
                <td className="table">{item.minimum}</td>         
                <td>

                  <button aria-label="Přidat počet" className="button" onClick={ () => {updateSupply(item.id, {numbers: item.numbers + 1})} }>
                    <i className="fa-solid fa-plus"></i>
                  </button>

              {item.numbers > 0 && (
              <button aria-label="Ubrat počet" className="button" onClick={() => {
              updateSupply(item.id, { numbers: item.numbers - 1 });
              } }>
                <i className="fa-solid fa-minus"></i>
              </button>
)}

                  </td>

              </tr> ))}

          </tbody>
        </table>
        }

      </section>


    </section>
     
  )
}