import React from "react";
import PropTypes from "prop-types";

import RecordEntry from "./RecordEntry";

import "./Records.css";

const Records = ({ local, online, cancelled }) => {
  return (
    <div className="records">
      <RecordEntry title="Tiempo de espera promedio" amount="0 minutos" />
      <RecordEntry title="Registros presenciales" amount={local} />
      <RecordEntry title="Registros online" amount={online} />
      <RecordEntry title="Registros cancelados" amount={cancelled} />
    </div>
  );
};

Records.propTypes = {
  local: PropTypes.int,
  online: PropTypes.int,
  cancelled: PropTypes.int
};

export default Records;
