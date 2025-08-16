import './App.scss';

import '@fortawesome/fontawesome-free/css/all.min.css';

import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';


import { HomeworksProvider } from './context/HomeworksContext';
import { SuppliesProvider } from './context/SuppliesContext';

function App() {
   return (
    <HomeworksProvider>
      <SuppliesProvider>
        <Header />
        <Main />  
      </SuppliesProvider>    
    </HomeworksProvider>
  )
}

export default App
