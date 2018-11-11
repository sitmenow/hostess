import React from "react";

import ReservationHeader from "./ReservationHeader";
import Records from "./Records";
import Reservations from "./Reservations";

import "./ListContainer.css";

const ListContainer = props => (
  <div className="reservation-container">
    <ReservationHeader addReservation={props.addReservation} />
    <Records {...props.records} />
    <Reservations
      reservations={props.reservations}
      cancelReservation={props.cancelReservation}
    />
  </div>
);

export default ListContainer;
