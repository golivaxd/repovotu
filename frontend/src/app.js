import React, { useEffect, useState } from 'react';
import { getUsuarios } from './api';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        console.log("Solicitando usuarios...");
        const data = await getUsuarios();
        console.log("Usuarios recibidos:", data);
        setUsuarios(data);
      } catch (error) {
        console.error('Error fetching usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className="App">
      <h1>Listado de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id_usuario}>
            {usuario.nombre_usuario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
