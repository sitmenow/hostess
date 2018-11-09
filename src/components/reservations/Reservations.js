import React from "react";

import ReservationEntry from "./ReservationEntry";
import Data from "../../mocks/ReservationsMock";

import "./Reservations.css";

class Reservations extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Data
    };

    this.getData = this.getData.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
  }

  getData() {
    //TODO: May be posible to iterate only when component loads
    const { data } = this.state;
    return data.map((reservation, index) => {
      reservation.index = index;
      reservation.removeEntry = this.removeEntry;
      // eslint-disable-next-line react/jsx-key
      return <ReservationEntry {...reservation} />;
    });
  }

  removeEntry(index) {
    const { data } = this.state;
    data.splice(index, 1);
    this.setState({ data });
  }

  render() {
    return (
      <div className="reservations">
        <div className="table-header">
          <div className="column-name">
            <span>NOMBRE</span>
          </div>
          <div className="column-people">
            <span>Nº DE PERSONAS</span>
          </div>
          <div className="column-phone">
            <span>NUMERO DE TELEFONO</span>
          </div>
          <div className="column-button" />
        </div>
        {this.getData()}
      </div>
    );
  }
}

export default Reservations;
