import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaContactos = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contactos');
      setContacts(response.data.data); 
      setLoading(false);
    } catch (error) {
      setError("Error al cargar los contactos");
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      { (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <h3>Nombre: {contact.nombre}</h3>
              <p>Telefono: {contact.numero}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaContactos;