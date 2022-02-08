import { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';

function App() {
  // STATE:
  //    anfangs wert
  //    aktuellen wert
  //    wert updaten
  
  // array 
  const [vorname, setVorname] = useState("Tommy")
  const [counter, setCounter] = useState(0)

  const buttonClick = () => {
    setVorname("Freddy")
    setCounter(counter + 1)
  }
  
  return (
    <div className="App">
      <h1>Hallo {vorname}</h1>
      <h2>{counter}</h2>
      <button onClick={buttonClick}>Change Name To Freddy</button>
      <hr/>
      <RegistrationForm />
    </div>
  );
}

export default App;
