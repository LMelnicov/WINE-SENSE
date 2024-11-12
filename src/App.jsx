// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importando módulos de Firebase
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(appFirebase);

// Importando componentes
import Login from './componentes/Login';
import Home from './componentes/Home';
import Trapiche from './componentes/Trapiche';
import Salentein from './componentes/Salentein';
import Kaiken from './componentes/Kaiken';
import Vistalba from './componentes/Vistalba';
import Visitas from './componentes/Visitas';
import Sunsets from './componentes/Sunset';
import Calendario from './componentes/Calendario';

import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={usuario ? <Home correoUsuario={usuario.email} /> : <Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trapiche" element={<Trapiche />} />
        <Route path="/salentein" element={<Salentein />} />
        <Route path="/kaiken" element={<Kaiken />} />
        <Route path="/vistalba" element={<Vistalba />} />
        <Route path="/visitas" element={<Visitas />} />
        <Route path="/sunsets" element={<Sunsets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
}

export default App;
