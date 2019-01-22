import React from "react";
import PropTypes from "prop-types";

import "./Records.css";

const RecordEntry = ({ title, value }) => (
  <div className="record-entry">
    <div>
      <span className="title">{title}</span>
    </div>
    <div>
      <span className="value">{value}</span>
    </div>
  </div>
);

const Records = () => (
  <div className="records">
    <RecordEntry title="Tiempo de espera promedio" value="30 minutos" />
    <RecordEntry title="Registros presenciales" value="30" />
    <RecordEntry title="Registros online" value="10" />
    <RecordEntry title="Registros cancelados" value="5" />
  </div>
);

RecordEntry.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
};

export default Records;
