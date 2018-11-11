import React from "react";

import ListHeader from "./header/Header";
import Records from "./records/Records";
import Reservations from "./list/Reservations";

import "./WaitingList.css";

const ListContainer = props => (
  <div className="reservation-container">
    <ListHeader addReservation={props.addReservation} />
    <Records {...props.records} />
    <Reservations
      reservations={props.reservations}
      cancelReservation={props.cancelReservation}
    />
  </div>
);

export default ListContainer;
