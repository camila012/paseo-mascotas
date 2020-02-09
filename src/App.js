import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './Componente/Formulario';
import Reserva from './Componente/Reserva';



function App() {

  //citas en local storage
  let reservasIniciales = JSON.parse(localStorage.getItem('reservas'));
  if(!reservasIniciales) {
    reservasIniciales = [];
  }
  
  //areglos de citas
  const [reservas, guardarReservas] = useState(reservasIniciales);

  //use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let reservasIniciales = JSON.parse(localStorage.getItem('reservas'));
    if(reservasIniciales) {
      localStorage.setItem('reservas', JSON.stringify(reservas))
    } else {
      localStorage.setItem('reservas', JSON.stringify([]));
    }
  }, [reservas] );
      

    
    
  //funcion que tome las citas actuales y agregue la nueva
  const crearReserva = reserva => {
    guardarReservas([ 
      ...reservas, reserva
    ]);
  }

  //funcion que elimina reserva por su id
  const eliminarReserva = id => {
    const nuevasReservas= reservas.filter(reserva => reserva.id !== id);
    guardarReservas(nuevasReservas)
  }

  //mensaje que sale si no has dado al click
  const titulo = reservas.length === 0 ? 'no hay reservas' : '¡ya tienes una reserva!'

  return (

    <Fragment>
      <h1>Paseo mascotas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario
              crearReserva= {crearReserva}
              />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {reservas.map(reserva => (
              <Reserva
              key={reserva.id}
              reserva={reserva}
              eliminarReserva={eliminarReserva}
              />
            ))}
          </div>

        </div>

      </div>

    </Fragment>
    
  );
}

export default App;
