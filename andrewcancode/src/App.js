import './App.css';
import Navbar from './components/Navbar.js'
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import About from './pages/About'; 
import PastWork from './pages/PastWork';
import Skills  from './pages/Skills';
import WoodWorking  from './pages/WoodWorking';
import Projects from './pages/Projects';
import Styles from './pages/Styles';


function App() {
  useEffect(() => {
    document.title = "My app"
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <div className="route-container">
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/past-work" element={<PastWork/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/styles" element={<Styles/>}/>
          <Route path="/woodworking" element={<WoodWorking/>}/>
        </Routes>

      </div>
      
    </div>
  );
}

export default App;
