import React from "react";
import PropTypes from "prop-types";

import DefaultButton from "../../buttons/DefaultButton";
import Modal from "./ModalAddReservation";

import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <div className="reservations-header">
        <div>
          <span className="header-title">Lista de espera</span>
        </div>
        <div className="button-container" onClick={this.openModal}>
          <DefaultButton text="Nuevo Registro" style="blue" />
        </div>
        {this.state.isModalOpen && (
          <Modal onClose={this.closeModal} action={this.props.addReservation} />
        )}
      </div>
    );
  }
}

Header.propTypes = {
  addReservation: PropTypes.func
};

export default Header;
