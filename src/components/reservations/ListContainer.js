import React from "react";

import ReservationHeader from "./ReservationHeader";
import Records from "./Records";
import Reservations from "./Reservations";

import "./ListContainer.css";

const ListContainer = () => (
  <div className="reservation-container">
    <ReservationHeader />
    <Records />
    <Reservations />
  </div>
);

export default ListContainer;
