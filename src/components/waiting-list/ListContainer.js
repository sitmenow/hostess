import React from 'react';

import ListHeader from './ListHeader';
import Records from './Records';
import Reservations from './Reservations';


import './ListContainer.css';


export default ({ text, style }) => {
  return (
    <div className="reservation-container">
      <ListHeader/>
      <Records/>
      <Reservations/>
    </div>
  );
};
