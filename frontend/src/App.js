import React from 'react';
import ListaContactos from './componentes/Lista_contactos';
import FormContacto from './componentes/Formulario_contactos';
//import BusqContacto from './componentes/Buscar_contacto';
const App = () => {
  return (
    <div>
      <FormContacto />
      <ListaContactos />
    </div>
  );
};

export default App;