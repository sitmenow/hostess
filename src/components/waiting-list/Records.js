import React from "react";

import RecordEntry from "./RecordEntry";

import "./Records.css";

const Records = () => (
  <div className="records">
    <RecordEntry title="Tiempo de espera promedio" amount="30 minutos" />
    <RecordEntry title="Registros presenciales" amount="30" />
    <RecordEntry title="Registros online" amount="10" />
    <RecordEntry title="Registros cancelados" amount="5" />
  </div>
);

export default Records;
