import React from "react";
import PropTypes from "prop-types";

import DefaultButton from "../../buttons/DefaultButton";
import "./ModalRequestTurn.css";

const ModalRequestTurn = ({ onClose, action, selectedGasStation }) => {
  let plates, email_address;

  const onSubmit = event => {
    event.preventDefault();
    if (!plates.value || !email_address.value) {
      alert('Todos los campos son requeridos');
      return;
    }
    action({
      plates: plates.value,
      email_address: email_address.value,
      gasStation: selectedGasStation,
    });

    onClose();
  };

  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="modal">
      <form className="reservation-form" onSubmit={onSubmit}>
        <div className="modal-header">
          <a href="" onClick={handleClose}><span className="close-icon pull-right"></span></a>
          <span className="form-title">Reserva tu espacio</span>
          <span className="form-subtitle">{selectedGasStation._name}</span>
        </div>
        <div className="form-row">
          <div className="form-input full-width">
            <span className="input-title">Correo Electrónico</span>
            <input autoCorrect="off" autoCapitalize="none" ref={node => (email_address = node)} type="email" name="email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-input width-60">
            <span className="input-title">Placas</span>
            <input ref={node => (plates = node)} type="text" name="plates" />
          </div>
        </div>
        <div className="modal-footer">
          {/* <DefaultButton onClickHandler={onClose} text="Cancelar" style="red" /> */}
          <DefaultButton onClickHandler={onSubmit} text="Solicitar" style="blue" />
        </div>
      </form>
    </div>
  );
};

ModalRequestTurn.propTypes = {
  selectedGasStation: PropTypes.object,
  action: PropTypes.func,
  onClose: PropTypes.func
};

export default ModalRequestTurn;
