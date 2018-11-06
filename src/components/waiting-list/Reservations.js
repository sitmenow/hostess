import React from 'react';

import ReservationEntry from './ReservationEntry';
import Data from '../../mocks/ReservationsMock';

import './Reservations.css';

class Reservations extends React.Component {

  getData() {
    return Data.map((reservationData) => {
      return <ReservationEntry {...reservationData}/>
    });
  }

  render() {
    return (
      <div className="reservations">
        <div className="table-header">
          <div className="column-name">
            <span>NOMBRE</span>
          </div>
          <div className="column-people">
            <span>Nº DE PERSONAS</span>
          </div>
          <div className="column-phone">
            <span>NUMERO DE TELEFONO</span>
          </div>
          <div className="column-button">
          </div>
        </div>
        { this.getData() }
      </div>
    )
  }
}

export default Reservations;
