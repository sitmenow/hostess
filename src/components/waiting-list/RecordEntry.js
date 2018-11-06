import React from "react";
import PropTypes from "prop-types";

import "./RecordEntry.css";

const RecordEntry = ({ title, amount }) => (
  <div className="record-entry">
    <div>
      <span className="title">{title}</span>
    </div>
    <div>
      <span className="amount">{amount}</span>
    </div>
  </div>
);

RecordEntry.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number
};

export default RecordEntry;
