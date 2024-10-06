import React, { useState } from 'react';
import axios from 'axios';

const FormContacto = () => {
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/contactos', {
        nombre,
        numero
      });

      setMessage('Contacto creado correctamente!');
      
    } catch (error) {
      setMessage('Hubo un error al crear el contacto');
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Numero:</label>
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Contacto</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FormContacto;