import React from 'react';
import PropTypes from 'prop-types';

const Reserva = ({reserva,eliminarReserva}) => (


    <div className="reserva">

        <p>Mascota: <span> {reserva.mascota} </span></p>
        <p>Edad: <span> {reserva.edad} </span></p>
        <p> Nombre Del Propietario: <span> {reserva.nombredelpropietario} </span></p>
        <p>Celular: <span> {reserva.celular} </span></p>
        <p>Email: <span> {reserva.email} </span></p>
        <p>Time: <span> {reserva.time} </span></p>
        <p> Date: <span> {reserva.date} </span></p>
        <p>Alguna Recomentacion: <span> {reserva.algunarecomentacion} </span></p>

        <button className="button eliminar u-full-width"
        onClick={() => eliminarReserva(reserva.id) }
        >&times; Eliminar </button>
        
    </div>
        
    
    
    

);

Reserva.prototype={
    Reserva:PropTypes.object.isRequired,
    eliminarReserva:PropTypes.func.isRequired
}

export default Reserva;