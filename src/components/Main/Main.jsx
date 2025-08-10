import './Main.scss';
import { FormHomeworks } from '../Forms/FormHomeworks';
import { FormSupplies } from '../Forms/FormSupplies';

export function Main() {
  return (
    <div className="section container">  
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
     </div>
  )
}