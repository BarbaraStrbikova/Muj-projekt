import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

import './Main.scss';
import { FormHomeworks } from '../Forms/FormHomeworks';


export function MainHomework() {
  return (
    <>  
        <section className="homeworks">
            <h2 className="section__title">Domaci práce</h2>
            <section className="homework__add border">
                <h3 className="title">Nove polozky:</h3>
               
            <FormHomeworks/>
           
            </section>
             <section className="homework__have border">
                <h3 className="title">Ukoly ke splneni:</h3>
                
                
            </section>
             <section className="homework__completed border">
               <h3 className="title">Splnene ukoly:</h3>
            </section>

        </section>

       
     </>
  )
}