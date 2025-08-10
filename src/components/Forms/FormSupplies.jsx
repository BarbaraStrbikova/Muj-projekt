import './Forms.scss';

export function FormSupplies() {
  return (

  <form className="supplies__form">
    
    <div className="form-field">
      <label for="task">Zadej novou položku</label>
      <input type="text" id="task"/>
    </div>

    <div className="form-field">
      <label for="numbers">Pocet</label>
      <input type="number" id="numbers"/>
    </div>
    
    <div className="form-field">
      <label for="minimum">Minimum</label>
      <input type="number" id="minimum"/>
    </div>


    <button type="submit" id="add-supplies">Přidat</button>

  </form>
  )
}