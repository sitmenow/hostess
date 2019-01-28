import React, { Component } from "react";
import PropTypes from "prop-types";

import DefaultButton from "../../buttons/DefaultButton";
import "./ModalRequestTurn.css";

class ModalRequestTurn extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('touchend', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    document.removeEventListener('touchend', this.handleClickOutside);
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.plates.value || !this.email_address.value) {
      alert('Todos los campos son requeridos');
      return;
    }
    this.props.action({
      plates: this.plates.value,
      // TODO: Verify backend if it's enabled to accept email property
      name: this.email_address.value,
      // email_address: email_address.value,
      gasStation: this.props.selectedGasStation,
    });

    this.onClose();
  }

  handleClose(event) {
    event.preventDefault();
    this.props.onClose();
  }

  handleClickOutside(event) {
    if (event.target.id === 'modalContainer') {
      this.handleClose(event);
    }
  }

  render() {
    return(
      <div className="modal" id="modalContainer">
        <form className="reservation-form" onSubmit={this.onSubmit}>
          <div className="modal-header">
            <a href="" onClick={this.handleClose}><span className="icon icon-close pull-right"></span></a>
            <span className="form-title">Reserva tu espacio</span>
            <span className="form-subtitle">{this.props.selectedGasStation._name}</span>
          </div>
          <div className="form-row">
            <div className="form-input full-width">
              <span className="input-title">Correo Electrónico</span>
              <input autoCorrect="off" autoCapitalize="none" ref={node => (this.email_address = node)} type="email" name="email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-input width-60">
              <span className="input-title">Placas</span>
              <input ref={node => (this.plates = node)} type="text" name="plates" />
            </div>
          </div>
          <div className="modal-footer">
            <DefaultButton onClickHandler={this.onSubmit} text="Solicitar" style="blue" />
          </div>
        </form>
      </div>
    );
  }
}

ModalRequestTurn.propTypes = {
  selectedGasStation: PropTypes.object,
  action: PropTypes.func,
  onClose: PropTypes.func
};

export default ModalRequestTurn;
