import { useContext } from "react";

import {SuppliesContext } from "../../context/SuppliesContext";
import './Main.scss';

export function SuppliesToBuy() {

  const { buySupplies, updateBuySupplies, deleteBuySupply } = useContext(SuppliesContext);

return (
  <>
  {buySupplies.length === 0
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
            {buySupplies.map(item => (
              <tr key={item.id}>
                <td className="table">{item.item}</td>
                <td className="table">{item.numbers}</td>
                <td className="table">{item.minimum}</td>   
                      
                <td>
                  <button aria-label="Přidat počet" className="button" onClick={ () => {updateBuySupplies(item.id, {numbers: item.numbers + 1})} }>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  
                 {item.numbers > 0 && (
                  <button aria-label="Ubrat počet" className="button" onClick={() => {
                  updateBuySupplies(item.id, { numbers: item.numbers - 1 });
                    }}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
)}
                  
                   <button aria-label="Smazat" className="button" onClick={() => {deleteBuySupply(item.id)}}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button> 
                </td>

              </tr> ))}

          </tbody>
        </table>
        }
  
  
  
  </>
  
)


}