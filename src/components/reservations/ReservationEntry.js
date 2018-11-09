import React from "react";

import DefaultButton from "../buttons/DefaultButton";
import ReservationMenu from "./ReservationMenu";
import "./ReservationEntry.css";

class ReservationEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, people, phone, ...menuProps } = this.props;
    return (
      <div className="table-entry">
        <div className="column-entry column-name">
          <span>{name}</span>
        </div>
        <div className="column-entry column-people">
          <span>{people}</span>
        </div>
        <div className="column-entry column-phone">
          <span>{phone}</span>
        </div>
        <div className="column-entry column-button">
          <DefaultButton text="Pasar a Mesa" style="green" />
          <ReservationMenu {...menuProps} />
        </div>
      </div>
    );
  }
}

export default ReservationEntry;
