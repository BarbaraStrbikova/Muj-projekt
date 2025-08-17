import { useState, useContext } from "react";
import { HomeworksContext } from "../../context/HomeworksContext";

import './Forms.scss';

export function FormHomeworks() {
  const [work, setWork] = useState('');
  const [family, setFamily] = useState('');

  const {addNewWork} = useContext(HomeworksContext)

  const homeworkSubmit = (e) => {
    e.preventDefault()
    addNewWork(work, family)
    
  setWork('');
  setFamily('');
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
        <option value="Maminka">Maminka</option>
        <option value="Tatinek">Tatinek</option>
        <option value="Dcera">Dcera</option>
        <option value="Syn">Syn</option>
      </select>
    </div>

    <button type="submit" id="add-tasks">Přidat</button>

  </form>
  )
}