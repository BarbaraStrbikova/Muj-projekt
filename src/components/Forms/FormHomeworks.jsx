import { useState, useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

import './Forms.scss';

export function FormHomeworks() {
  const [work, setWork] = useState('');
  const [family, setFamily] = useState('');

  const {addNewWork} = useContext(SettingsContext)

  const homeworkSubmit = (e) => {
    e.preventDefault()
    addNewWork(work, family)
    
    console.log(work)
    console.log(family)
    console.log('---')
  }


  return (
  <form onSubmit={homeworkSubmit} className="homeworks__form">
    
    <div className="form-field">
      <label htmlFor="work">Zadej nový úkol:</label>
      <input 
        type="text" 
        value={work} 
        onChange={(e) => {setWork(e.target.value)}} 
        id="work"
        />
    </div>

    <div className="form-field">
      <label htmlFor="family">Vyber osobu:</label>
      <select 
        id="family"
        value={family}
        onChange={(e) => {setFamily(e.target.value)}} 
        >
        <option value=""></option>
        <option value="mother">Maminka</option>
        <option value="father">Tatinek</option>
        <option value="daughter">Dcera</option>
        <option value="son">Syn</option>
      </select>
    </div>

    <button type="submit" id="add-tasks">Přidat</button>

  </form>
  )
}