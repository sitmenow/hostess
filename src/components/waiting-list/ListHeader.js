import React from "react";

import DefaultButton from "../buttons/DefaultButton";

import "./ListHeader.css";

const ListHeader = () => (
  <div className="reservations-header">
    <div>
      <span>Lista de espera</span>
    </div>
    <div>
      <DefaultButton text="Nuevo Registro" style="blue" />
    </div>
  </div>
);

export default ListHeader;
