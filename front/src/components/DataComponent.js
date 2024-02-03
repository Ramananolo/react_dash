// src/components/DataComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataComponent = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/data');
      setClients(response.data);
    } catch (error) {
    
    }
  };

  return (
    <div>
      <h2>Data from PostgreSQL</h2>
    
        {clients.map((client) => (
          <li key={client.id}>
                {`${client.prenom} ${client.nom} - ${client.email} - ${client.telephone}`}
            </li>
        ))}
     
    </div>
  );
};

export default DataComponent;
