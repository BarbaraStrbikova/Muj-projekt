import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

import './Main.scss';
import { FormHomeworks } from '../Forms/FormHomeworks';


export function MainHomework() {

   const {work, family} = useContext(SettingsContext)

  return (
    <>  
        <section className="homeworks">
            <h2 className="section__title">Domaci práce</h2>
            <section className="homework__add border">
                <h3 className="title">Nové položky:</h3>
               
            <FormHomeworks/>
           
            </section>
             <section className="homework__have border">
                <h3 className="title">Úkoly ke splnění:</h3>
                <ul>
                  
                </ul>
                
            </section>
             <section className="homework__completed border">
               <h3 className="title">Splněné úkoly:</h3>
            </section>

        </section>

       
     </>
  )
}