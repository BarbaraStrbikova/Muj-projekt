import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

import './Main.scss';
import { FormSupplies } from '../Forms/FormSupplies';

import {supabase} from '../../supabase';

export function MainSupplies() {

const {supplies, addBuySupplies, deleteSupply, updateSupply} = useContext(SettingsContext);
const check = supplies.filter(item => item.numbers <= item.minimum )
const fullSupplies = supplies.filter(item => item.numbers > item.minimum)
// const sortSupplies = [...fullSupplies].sort((a, b) => a.item.localCompare(b.item));

const buySupply = id => { 
  const supplyToMove = check.find( (item) => item.id === id);
  addBuySupplies(supplyToMove);
  deleteSupply(id);
}

  return (
    <section className="supplies">
      <h2 className="section__title">Zasoby v domacnosti</h2>
      <section className="supplies__add border">
        <h3 className="title">Nove polozky:</h3>

                <FormSupplies/>
                  
      </section>
      <section className="supplies__check border">
        <h3 className="title">Polozky ke zkontrolovani:</h3>

        {check.length === 0
      ? <p>Nacitam data ...</p>
      : <table>
        <thead>
          <tr>
            <th className="table-title">Položky</th>
            <th className="table-title">Počet</th>
            <th className="table-title">Minimum</th>
          </tr>
        </thead>
          <tbody>
            {check.map(supply => (
              <tr key={supply.id}>
                <td className="table">{supply.item}</td>
                <td className="table">{supply.numbers}</td>
                <td className="table">{supply.minimum}</td>         
                <td>
                  <button className="button" onClick={ () => {updateSupply(supply.id, {numbers: supply.numbers + 1})} }>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button className="button" onClick={() => {
                      if (supply.numbers > 0) {
                    updateSupply(supply.id, { numbers: supply.numbers - 1 });
                    }
                    }}
                    >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <button className="button" onClick={() => {buySupply(supply.id)}}>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </button>
                  <button className="button" onClick={() => {deleteSupply(supply.id)}}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>

              </tr> ))}

          </tbody>
        </table>
        }
      </section>
      <section className="supplies__have border">
        <h3 className="title">Moje zasoby:</h3>

         {fullSupplies.length === 0
      ? <p>Nacitam data ...</p>
      : <table>
        <thead>
          <tr>
            <th className="table-title">Položky</th>
            <th className="table-title">Počet</th>
            <th className="table-title">Minimum</th>
          </tr>
        </thead>
          <tbody>
            {fullSupplies.map(supply => (
              <tr key={supply.id}>
                <td className="table">{supply.item}</td>
                <td className="table">{supply.numbers}</td>
                <td className="table">{supply.minimum}</td>         
                <td>
                  <button className="button" onClick={ () => {updateSupply(supply.id, {numbers: supply.numbers + 1})} }>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button className="button" onClick={() => {
                      if (supply.numbers > 0) {
                    updateSupply(supply.id, { numbers: supply.numbers - 1 });
                    }
                    }}
                    >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  </td>

              </tr> ))}

          </tbody>
        </table>
        }

      </section>


    </section>
     
  )
}