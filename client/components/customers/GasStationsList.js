import React from "react";
import PropTypes from "prop-types";

import ListHeader from "./header/Header";
import GasStations from "./list/GasStations";

import "./GasStationsList.css";

const ListContainer = props => (
  <div className="reservation-container">
    <ListHeader />
    <GasStations
      gasStations={props.gasStations}
      requestTurn={props.requestTurn}
      getGasStations={props.getGasStations}
    />
  </div>
);

ListContainer.propTypes = {
  gasStations: PropTypes.array,
  requestTurn: PropTypes.func,
  getGasStations: PropTypes.func,
};

export default ListContainer;
