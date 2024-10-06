import React from 'react';
import ListaContactos from './componentes/Lista_contactos';
import FormContacto from './componentes/Formulario_contactos';
//import BusqContacto from './componentes/Buscar_contacto';
const App = () => {
  return (
    <div>
      <h1>Lista de Contactos</h1>
      <ListaContactos />
      <h2>Crear un contacto</h2>
      <FormContacto />
    </div>
  );
};

export default App;