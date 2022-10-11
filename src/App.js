import './App.css';
import Login from './templates/paginas/Login';
import React, { useState } from 'react'
function App() {
  const [usuario, setUsuario] = useState({})
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
