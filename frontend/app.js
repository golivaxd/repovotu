import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('/api/data');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Datos desde Supabase</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
