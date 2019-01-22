import React from "react";

import DefaultButton from "../buttons/DefaultButton";

import "./Header.css";

const Header = () => (
  <div className="dashboard-header">
    <div>
      <span>Lista de espera</span>
    </div>
    <div>
      <DefaultButton text="Nuevo Registro" style="blue" />
    </div>
  </div>
);

export default Header;
