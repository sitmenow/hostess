import React from "react";
import PropTypes from "prop-types";
// import { addReservation } from "../../actions";

import "./Modal.css";

const Modal = ({ action }) => {
  let name, people, phone;

  const onSubmit = event => {
    event.preventDefault();
    if (!name.value || !people.value) {
      //TODO: add parameters validation
      return;
    }

    // console.log(name.value, people.value, phone.value);
    // action(addReservation(name.value, people.value, phone.value));
    action(name.value, people.value, phone.value);
  };

  return (
    <div className="modal">
      <form className="reservation-form" onSubmit={onSubmit}>
        <span className="form-title">Nuevo registro</span>
        <div className="form-row">
          <div className="form-input name">
            <span className="input-title">Nombre</span>
            <input ref={node => (name = node)} type="text" name="name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-input people">
            <span className="input-title">Nº de personas</span>
            <input ref={node => (people = node)} type="text" name="people" />
          </div>
          <div className="form-input phone">
            <span className="input-title">Numero de telefono</span>
            <input ref={node => (phone = node)} type="text" name="phone" />
          </div>
        </div>
        <button className="form-button" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

Modal.propTypes = {
  action: PropTypes.func
};

export default Modal;
