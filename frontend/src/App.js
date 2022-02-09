import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [token, setToken] = useState(null)

  // "lifting state up" --- "STATE ANHEBEN"
  const saveToken = (value) => {
    const tokenNonEmptyIsString = typeof value === "string" && value.length > 0
    if(tokenNonEmptyIsString) {
      setToken(value)
    }
  }

  const tokenExists = token && token.length > 0
  const AppContent = tokenExists
    ? <Dashboard token={token} />
    : <div>
      <LoginForm saveToken={saveToken} />
      <RegistrationForm />
    </div>

  return (
    <div className="App">
      {AppContent}
    </div>
  );
}

export default App;
