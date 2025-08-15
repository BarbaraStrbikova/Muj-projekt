import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import {supabase} from '../../supabase';



import './Main.scss';
import { FormHomeworks } from '../Forms/FormHomeworks';


export function MainHomework() {

   const {homeworks, updateWork, deleteWork} = useContext(SettingsContext)

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

      {homeworks.length === 0
      ? <p>Nacitam data ...</p>
      : <table>
        <thead>
          <tr>
            <th className="table-title">Úkoly</th>
            <th className="table-title">Člen domacnosti</th>
            
          </tr>
        </thead>
          <tbody>
            {homeworks.map(task => (
              <tr key={task.id}>
                <td className="table">{task.work}</td>
                <td className="table">{task.family}</td>
                <button className="button" onClick={} ><i className="fa-solid fa-check"></i> </button>
                <button className="button" onClick={() => {updateWork(task.id, task.work, task.family)}}><i className="fa-solid fa-pencil"></i></button>
                <button className="button" onClick={() => {deleteWork(task.id)}}><i className="fa-solid fa-trash-can"></i> </button>
              </tr> ))}

          </tbody>
        </table>
        }
                
            </section>
             <section className="homework__completed border">
               <h3 className="title">Splněné úkoly:</h3>
            </section>

        </section>

       
     </>
  )
}