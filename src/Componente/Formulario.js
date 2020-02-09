import React, { Fragment,useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearReserva}) => {
    
    //crear State de reserva
    const [reserva, actualizarreserva] = useState({
        mascota:'',
        edad: '',
        nombredelpropietario:'',
        celular:'',
        email:'',
        time:'',
        date:'',
        algunarecomentacion:''
    });
    
    const [error,actualizarError] =useState (false)
    
    //se ejecuta cada que se escribe un input
    const actualizarState = e => {
        actualizarreserva ({
            ...reserva,
            [e.target.name]: e.target.value
        })
    }
    // extraer valores
    const {mascota,edad,nombredelpropietario,celular,email,time,date,algunarecomentacion}=reserva;
    
    // cuando presione agregar reserva
    const submitReserva = e => {
        e.preventDefault ();
        
        //validar
        if(mascota.trim() === '' || edad.trim() === '' || nombredelpropietario.trim() === '' || celular.trim() === '' || email.trim() === '' || time.trim() === '' || date.trim() === '' || algunarecomentacion.trim() === '') {
            actualizarError (true)
        }
        //eliminar el mensaje previo
        actualizarError(false);
        
        //asignar ID
        reserva.id=uuid();
        
        // crear reserva
        crearReserva(reserva);
        
        //reiniciar el form
        actualizarreserva({
            mascota:'',
            edad:'',
            nombredelpropietario:'',
            celular:'',
            email:'',
            time:'',
            date:'',
            algunarecomentacion:''
        })
    }
    
    return ( 
        
        <Fragment> 
        <h1>Reserva</h1>
        
        {error ? <p className="alerta-error">todos los campos son obligatorios </p>    :null }
        
        <form onSubmit={submitReserva}
        >
        
        
        <label>¿Nombre Mascota?</label>
        <input
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre De Mascota"
        onChange={actualizarState}
        />
        
        <label>¿Edad De Mascota?</label>
        <input
        type="text"
        name="edad"
        className="u-full-width"
        placeholder="Edad"
        onChange={actualizarState}
        />
        
        <hr/>
        
        <label>¿Nombre Del Propietario?</label>
        <input
        type="text"
        name="nombredelpropietario"
        className="u-full-width"
        placeholder="Nombre Del Propietario"
        onChange={actualizarState}
        />
        
        <label>¿Celular?</label>
        <input
        type="text"
        name="celular"
        className="u-full-width"
        placeholder="Numero"
        onChange={actualizarState}
        />
        
        <label>¿Correo?</label>
        <input
        type="email"
        name="email"
        className="u-full-width"
        placeholder="Correo"
        onChange={actualizarState}
        />
        
        <hr/>
        <h2>Organiza Tu Rutina</h2>
        
        <label>¿Hora?</label>
        <input
        type="time"
        name="time"
        className="u-full-width"
        onChange={actualizarState}
        />
        
        <label>¿Fecha?</label>
        <input
        type="date"
        name="date"
        className="u-full-width"
        onChange={actualizarState}
        />
        
        <label>¿Alguna Recomendacion?</label>
        <textarea
        className="u-full-width"
        name="algunarecomentacion"
        onChange={actualizarState}
        ></textarea>
        
        <button
        type="submit"
        className="u-full-width button-primary"
        >agregar</button>
        
        </form>
        </Fragment>
        );
    }

    Formulario.propTypes = {
        Formulario:PropTypes.object.isRequired,
        crearReserva:PropTypes.func.isRequired
    }
    
    
    export default Formulario;
    