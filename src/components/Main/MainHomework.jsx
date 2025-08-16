import { useState, useContext } from "react";
import { HomeworksContext } from "../../context/HomeworksContext";




import './Main.scss';
import { FormHomeworks } from '../Forms/FormHomeworks';


export function MainHomework() {
  const [editingId, setEditingId] = useState(null);
  const [editWork, setEditWork] = useState('');
  const [editFamily, setEditFamily] =useState('');

  const {
    homeworks, 
    updateWork, 
    deleteWork, 
    tasksCompleted, 
    addDoneWork, 
    deleteDoneWork
  } = useContext(HomeworksContext)

  const doneWork = id => {
     const itemToMove = homeworks.find((item) => item.id === id);
     if (itemToMove) {
      addDoneWork( itemToMove.work, itemToMove.family)
      deleteWork(id);
     }
  }

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditWork(task.work);
    setEditFamily(task.family);
  }

  const saveEdit = async () => {
     if (!editWork || !editFamily) {
      alert("Vyplňte všechny údaje.");
      return;
    }

    await updateWork(editingId, editWork, editFamily);
    setEditingId(null);
    setEditWork('');
    setEditFamily('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditWork('');
    setEditFamily('');
  };



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
      ? <p>Prozatim zde nebyly vložené žadne úkoly <i className="fa-solid fa-spinner"></i></p>
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

                <td className="table">{editingId === task.id ? ( 
                  <input type="text" value={editWork} onChange={(e) => setEditWork(e.target.value)}
                  />
                ) : (
                  task.work
                )}
                </td>

                <td className="table">
                  {editingId === task.id ? (
                    <select
                    value={editFamily}
                    onChange={(e) => setEditFamily(e.target.value)}>
                      <option value=""></option>
                      <option value="Maminka">Maminka</option>
                      <option value="Tatinek">Tatinek</option>
                      <option value="Dcera">Dcera</option>
                      <option value="Syn">Syn</option>
                    </select>    
                  ) : (   
                    task.family 
                  )}
                </td>

                <td>
                  {editingId === task.id ? (
                    <>
                    <button className="button" onClick={saveEdit}>
                      <i className="fa-solid fa-floppy-disk"></i>
                    </button>

                    <button className="button" onClick={cancelEdit}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                    </>
                  ) : (
                    <>
                    <button className="button" onClick={ () => doneWork(task.id)}>
                      <i className="fa-solid fa-check"></i>
                    </button>

                    <button className="button" onClick={() => startEdit(task)}>
                      <i className="fa-solid fa-pencil"></i>
                    </button>

                    <button className="button" onClick={() => deleteWork(task.id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>                   
                    </>
                  )}
                   </td>
                  </tr>
            ))}

          </tbody>
        </table>
      }
                
            </section>


             <section className="homework__completed border">
              <h3 className="title">Splněné úkoly:</h3>
            
            {tasksCompleted.length === 0 
            ? <p>Žádné splněné úkoly.</p>
            :<table>
                  <thead>
                    <tr>
                      <th className="table-title">Úkoly</th>
                      <th className="table-title">Člen domacnosti</th>            
                    </tr>
                  </thead>
                  <tbody>
               {tasksCompleted.map(item => (
              <tr key={item.id}>
                <td className="table">{item.work}</td>
                <td className="table">{item.family}</td>
                <td>
                <button className="button" onClick={() => {deleteDoneWork(item.id)}}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
                </td>
              </tr> ))}

          </tbody>
        </table>}

                

            </section>

        </section>

       
     </>
  )
}