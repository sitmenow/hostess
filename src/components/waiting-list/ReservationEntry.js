import React from 'react';

import DefaultButton from '../buttons/DefaultButton';
import './ReservationEntry.css';


class ReservationEntry extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.people = props.people;
    this.phone = props.phone;
  }

  render() {
    return (
      <div className="table-entry">
        <div className="column column-name">
          <span>{this.name}</span>
        </div>
        <div className="column column-people">
          <span>{this.people}</span>
        </div>
        <div className="column column-phone">
          <span>{this.phone}</span>
        </div>
        <div className="column column-button">
          <DefaultButton text='Pasar a Mesa' style='green'/>
        </div>
      </div>
    )
  }
};

export default ReservationEntry;
