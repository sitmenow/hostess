import React from "react";

import ListHeader from "./ListHeader";
import Records from "./Records";
import Reservations from "./Reservations";

import "./ListContainer.css";

const ListContainer = () => (
  <div className="reservation-container">
    <ListHeader />
    <Records />
    <Reservations />
  </div>
);

export default ListContainer;
