import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main/Main';
import { AppProvider } from './context/AppConfig';
import { Header } from './components/header/Header';
import { About } from './components/Landing/About';
import { StudCoord } from './components/Coordinators/StudCoord';


function App() {
  return (
    <div className="App">
      <AppProvider>
     <Main/>
  
{/* <About/> */}
     </AppProvider>
    </div>
  );
}

export default App;
