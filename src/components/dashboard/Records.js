import React from "react";
import PropTypes from "prop-types";

import "./Records.css";

const RecordEntry = ({ title, value }) => (
  <div className="col-md-4 record-entry">
    <div>
      <span className="title">{title}</span>
    </div>
    <div>
      <span className="value">{value}</span>
    </div>
  </div>
);

const Records = ({ avgWaitTime, completed, expired }) => (
  <div className="row">
    <RecordEntry title="Tiempo de espera promedio" value={avgWaitTime} />
    <RecordEntry title="Turnos completados" value={completed} />
    <RecordEntry title="Registros expirados" value={expired} />
  </div>
);

RecordEntry.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
};

Records.propTypes = {
  avgWaitTime: PropTypes.string,
  completed: PropTypes.string,
  expired: PropTypes.string
};

export default Records;
