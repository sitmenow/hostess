import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Records from "./Records";
import TurnList from "./turns/TurnList.js";

import "./Dashboard.css";

const Dashboard = props => (
  <div className="dashboard-container">
    <Header />
    <Records {...props.records} />
    <TurnList
      activeTurns={props.activeTurns}
      completeTurn={props.completeTurn}
      expireTurn={props.expireTurn}
    />
  </div>
);

Dashboard.propTypes = {
  records: PropTypes.object,
  activeTurns: PropTypes.array,
  completeTurn: PropTypes.func,
  expireTurn: PropTypes.func
};

export default Dashboard;
