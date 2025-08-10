import './Forms.scss';

export function FormHomeworks() {
  return (
  <form className="homeworks__form">
    
    <div className="form-field">
      <label for="task"></label>
      <input type="text" id="task"/>
    </div>

    <div className="form-field">
      <label for="family"></label>
      <select id="family">
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