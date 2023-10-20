import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "My app"
  }, [])
  return (
    <div className="App">
      
      <NavBar/>
    </div>
  );
}

export default App;
