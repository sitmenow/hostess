import React from "react";
import PropTypes from "prop-types";

import ReservationEntry from "./ReservationEntry";
import ReservationMenu from "./ReservationMenu";

import "./Reservations.css";

const Reservations = props => {
  const { reservations, cancelReservation } = props;

  const getMenuHandler = reservation => {
    const cancelHandler = () => cancelReservation(reservation.id);
    return <ReservationMenu cancelReservation={cancelHandler} />;
  };

  const getEntries = () => {
    return reservations.map(reservation => {
      return (
        <ReservationEntry
          key={reservation.id}
          menu={getMenuHandler(reservation)}
          {...reservation}
        />
      );
    });
  };

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
        <div className="column-button" />
      </div>
      {getEntries()}
    </div>
  );
};

Reservations.propTypes = {
  reservations: PropTypes.array,
  cancelReservation: PropTypes.func
};

export default Reservations;
