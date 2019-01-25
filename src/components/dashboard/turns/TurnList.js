import React from "react";
import PropTypes from "prop-types";

import Turn from "./Turn";

import "./TurnList.css";

const TurnList = props => {
  const { activeTurns, completeTurn, expireTurn } = props;

  const getTurns = () => {
    return activeTurns.map((turn, index) => {
      turn.index = index;
      //notify from showing in redux
      // eslint-disable-next-line react/jsx-key
      return (
        <Turn
          key={turn._id}
          completeTurn={completeTurn}
          expireTurn={expireTurn}
          {...turn}
        />
      );
    });
  };

  return (
    <div className="turn-list">
      <div className="row list-header">
        <div className="col-md-4 column-entry">
          <span>PLACAS</span>
        </div>
        <div className="col-md-4 column-entry">
          <span>TIEMPO ELEGIBLE</span>
        </div>
        <div className="col-md-4 column-entry" />
      </div>
      {getTurns()}
    </div>
  );
};

TurnList.propTypes = {
  activeTurns: PropTypes.array,
  completeTurn: PropTypes.func,
  expireTurn: PropTypes.func
};

export default TurnList;
