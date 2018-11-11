import React from "react";
import PropTypes from "prop-types";

import DefaultButton from "../../buttons/DefaultButton";
import "./ReservationEntry.css";

const ReservationEntry = props => {
  const { name, people, phone, menu } = props;
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
        {menu}
      </div>
    </div>
  );
};

ReservationEntry.propTypes = {
  name: PropTypes.string,
  people: PropTypes.string,
  phone: PropTypes.string,
  menu: PropTypes.object
};

export default ReservationEntry;
