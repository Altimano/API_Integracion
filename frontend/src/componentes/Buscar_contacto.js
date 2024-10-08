import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../EstilosComponentes/Buscar_Contactos.css';

const BuscarContacto = () => {
    const [inputID, setInputID] = useState("");
    const [contact, setContact] = useState(null);

    const Busqueda = async () => {
        const response = await axios.get(`http://localhost:5000/contactos/${inputID}`) ;
        setContact(response.data.data);
    }
   
    return (
        <div className="container-1">
            <div className="container-2">
            <h1>Buscar Contactos</h1>
            <input 
            type="text" 
            placeholder ='Ingresa el ID del contacto'
            value = {inputID}
            onChange={(e) => setInputID(e.target.value)} 
            />
            </div>
            <button onClick={Busqueda} className="boton">Buscar</button>
            {contact && (
        <div>
          <h3>Información del contacto</h3>
          <p>Nombre: {contact.nombre}</p>
          <p>Número: {contact.numero}</p>
        </div>
      )}
        </div>
    )
}

export default BuscarContacto;