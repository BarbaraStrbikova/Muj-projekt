import './Main.scss';
import { MainHomework } from './MainHomework';
import { MainSupplies } from './MainSupplies';


export function Main() {
  return (
    <div className="section container">  
      <MainHomework/>

      <MainSupplies/>
    </div>
  )
}