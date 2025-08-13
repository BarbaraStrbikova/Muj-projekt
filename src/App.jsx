import './App.scss';

import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';

import { SettingsProvider } from './context/SettingsContext';

function App() {
   return (
    <SettingsProvider>
      <Header />
      <Main />    
    </SettingsProvider>
  )
}

export default App
