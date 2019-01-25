import React from "react";
import PropTypes from "prop-types";

import DefaultButton from "../../buttons/DefaultButton";
import "./ModalRequestTurn.css";

const ModalRequestTurn = ({ onClose, action, selectedGasStation }) => {
  let name, plates, email_address;

  const onSubmit = event => {
    event.preventDefault();
    if (!name.value || !plates.value || !email_address.value) {
      alert('Todos los campos son requeridos');
      return;
    }

    action({
      name: name.value,
      plates: plates.value,
      email_address: email_address.value,
      gasStation: selectedGasStation,
    });

    onClose();
  };

  return (
    <div className="modal">
      <form className="reservation-form" onSubmit={onSubmit}>
        <div className="modal-header">
          <span className="form-title">Reserva tu espacio</span>
          <span className="form-subtitle">{selectedGasStation._name}</span>
        </div>
        <div className="form-row">
          <div className="form-input name">
            <span className="input-title">Nombre Completo</span>
            <input ref={node => (name = node)} type="text" name="name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-input people">
            <span className="input-title">Placas</span>
            <input ref={node => (plates = node)} type="text" name="plates" />
          </div>
          <div className="form-input phone">
            <span className="input-title">Correo electrónico</span>
            <input autoCorrect="off" autoCapitalize="none" ref={node => (email_address = node)} type="email" name="email" />
          </div>
        </div>
        <div className="modal-footer">
          <DefaultButton onClickHandler={onClose} text="Cancelar" style="red" />
          <DefaultButton onClickHandler={action} text="Solicitar" style="blue" />
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
