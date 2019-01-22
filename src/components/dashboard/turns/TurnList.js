import React from "react";

import Turn from "./Turn";
import Data from "../../../mocks/ReservationsMock";

import "./TurnList.css";

class TurnList extends React.Component {
  constructor() {
    super();
    this.state = {
      turns: Data
    };

    this.getTurns = this.getTurns.bind(this);
    this.completeTurn = this.completeTurn.bind(this);
  }

  getTurns() {
    const { turns } = this.state;
    return turns.map((turn, index) => {
      turn.index = index;
      turn.completeTurn = this.completeTurn;
      // eslint-disable-next-line react/jsx-key
      return <Turn {...turn} />;
    });
  }

  completeTurn(index) {
    const { turns } = this.state;
    turns.splice(index, 1);
    this.setState({ turns });
    //fetch new turns
  }

  render() {
    return (
      <div className="turn-list">
        <div className="row list-header">
          <div className="col-md-4">
            <span>PLACAS</span>
          </div>
          <div className="col-md-4">
            <span>TIEMPO ELEGIBLE</span>
          </div>
          <div className="col-md-4" />
        </div>
        {this.getTurns()}
      </div>
    );
  }
}

export default TurnList;
