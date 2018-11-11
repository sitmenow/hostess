import React from "react";
import PropTypes from "prop-types";

import "./Records.css";

const Records = ({ local, online, cancelled }) => (
  <div className="records">
    <div className="record-entry">
      <div>
        <span className="title">Tiempo de espera promedio</span>
      </div>
      <div>
        <span className="amount">0 Minutos</span>
      </div>
    </div>
    <div className="record-entry">
      <div>
        <span className="title">Registros presenciales</span>
      </div>
      <div>
        <span className="amount">{local}</span>
      </div>
    </div>
    <div className="record-entry">
      <div>
        <span className="title">Registros online</span>
      </div>
      <div>
        <span className="amount">{online}</span>
      </div>
    </div>
    <div className="record-entry">
      <div>
        <span className="title">Registros cancelados</span>
      </div>
      <div>
        <span className="amount">{cancelled}</span>
      </div>
    </div>
  </div>
);

Records.propTypes = {
  local: PropTypes.number,
  online: PropTypes.number,
  cancelled: PropTypes.number
};

export default Records;
