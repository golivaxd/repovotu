import React, { useEffect, useState } from 'react';
import { getUsuarios } from './api';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await getUsuarios();
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
            {usuario.nombre_usuario} - {usuario.correo_electronico} - {usuario.tipo_usuario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
