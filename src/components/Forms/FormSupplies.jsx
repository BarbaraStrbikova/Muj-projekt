import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

import './Forms.scss';

export function FormSupplies() {

    const {item,setItem, numbers,setNumbers, minimum, setMinimum, suppliesSubmit} = useContext(SettingsContext)

  return (

  <form onSubmit={suppliesSubmit} className="supplies__form">
    
    <div className="form-field">
      <label htmlfor="item">Zadej novou položku</label>
      <input 
        type="text"
        value={item}
        onChange={(e) => {setItem(e.target.value)}}
        id="item"/>
    </div>

    <div className="form-field">
      <label htmlfor="numbers">Pocet</label>
      <input 
        type="numbers"
        value={numbers}
        onChange={(e) => {setNumbers(e.target.value)}}
        id="numbers"/>
    </div>
    
    <div className="form-field">
      <label htmlfor="minimum">Minimum</label>
      <input 
        type="number"
        value={minimum}
        onChange={(e) => {seMinimum(e.target.value)}}
        id="minimum"/>
    </div>


    <button type="submit" id="add-supplies">Přidat</button>

  </form>
  )
}