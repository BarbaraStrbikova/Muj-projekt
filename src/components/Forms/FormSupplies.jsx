import { useState, useContext } from "react";
import { SuppliesContext } from "../../context/SuppliesContext";

import './Forms.scss';

export function FormSupplies() {

  const [item, setItem] = useState('');
  const [numbers, setNumbers] = useState('');
  const [minimum, setMinimum] = useState('');

  const {addNewSupply} = useContext(SuppliesContext)

  const suppliesSubmit = (e) => {
    e.preventDefault()
    addNewSupply(item, numbers, minimum)

    console.log(item)
    console.log(numbers)
    console.log(minimum)
    console.log('---')

    setItem('');
    setNumbers('');
    setMinimum('');
  }

  return (

  <form onSubmit={suppliesSubmit} className="supplies__form">
    
    <div className="form-field">
      <label htmlFor="item">Zadej novou položku</label>
      <input 
        type="text"
        value={item}
        onChange={(e) => {setItem(e.target.value)}}
        id="item"/>
    </div>

    <div className="form-field">
      <label htmlFor="numbers">Počet</label>
      <input 
        type="numbers"
        value={numbers}
        onChange={(e) => {setNumbers(e.target.value)}}
        id="numbers"/>
    </div>
    
    <div className="form-field">
      <label htmlFor="minimum">Minimum</label>
      <input 
        type="number"
        value={minimum}
        onChange={(e) => {setMinimum(e.target.value)}}
        id="minimum"/>
    </div>


    <button type="submit" id="add-supplies">Přidat</button>

  </form>
  )
}