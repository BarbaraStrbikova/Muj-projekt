import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

import './Main.scss';
import { FormSupplies } from '../Forms/FormSupplies';


export function MainSupplies() {

const {supplies} = useContext(SettingsContext)

  return (
    <section className="supplies">
      <h2 className="section__title">Zasoby v domacnosti</h2>
      <section className="supplies__add border">
        <h3 className="title">Nove polozky:</h3>

                <FormSupplies/>
                  
      </section>
      <section className="supplies__check border">
        <h3 className="title">Polozky ke zkontrolovani:</h3>
      </section>
      <section className="supplies__have border">
        <h3 className="title">Moje zasoby:</h3>
      </section>


    </section>
     
  )
}