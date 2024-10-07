import React, { useState } from 'react';
import axios from 'axios';
import '../EstilosComponentes/Formularios_Contactos.css';

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
    <div className="container-nigga"> 
    <h1>Formulario para añadir contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="container-2"> 
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="container-2"> 
          <label>Numero:</label>
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button-submit">Agregar Contacto</button> 
      </form>
      {message && <p className="message">{message}</p>} 
    </div>
  );
};

export default FormContacto;
