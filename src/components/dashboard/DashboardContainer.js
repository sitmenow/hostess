import React from "react";

import Header from "./Header";
import Records from "./Records";
import TurnList from "./turns/TurnList.js";

import "./DashboardContainer.css";

const DashboardContainer = () => (
  <div className="dashboard-container">
    <Header />
    <Records />
    <TurnList />
  </div>
);

export default DashboardContainer;
