import React from 'react';

// import Header from '../components/reservations/Header';
import DefaultButton from '../buttons/DefaultButton';

import './ListHeader.css';


export default ({ text, style }) => {
  return (
    <div className="reservations-header">
      <div>
        <span>Lista de espera</span>
      </div>
      <div>
        <DefaultButton text='Nuevo Registro' style='blue'/>
      </div>
    </div>
  );
};
