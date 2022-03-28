
import './App.css';
import { HashRouter, Router } from 'react-router-dom';
import { GalaxisCard } from 'galaxis-components';

function App() {

  return (
    <>
      <HashRouter>
          <GalaxisCard name="Teszt"/>
      </HashRouter>
    </>
  );
}

export default App;
