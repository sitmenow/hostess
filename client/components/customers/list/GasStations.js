import React, { Component } from "react";
import PropTypes from "prop-types";

import GasStationEntry from "./GasStationEntry";
import Modal from "./ModalRequestTurn";

import "./GasStations.css";

class GasStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.getGasStations();
  }

  openModal(gasStation) {
    this.setState({
      isModalOpen: true,
      selectedGasStation: gasStation,
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
      selectedGasStation: { },
    });
  }

  getEntries() {
    return this.props.gasStations.map((gasStation, i) => {
      return (
        <GasStationEntry
          key={i}
          openRequestTurnModal={this.openModal}
          {...gasStation}
        />
      );
    });
  }

  render() {
    return(
      <div className="list-entries">
        {this.getEntries()}
        {this.state.isModalOpen && (
          <Modal onClose={this.closeModal} action={this.props.requestTurn} selectedGasStation={this.state.selectedGasStation} />
        )}
      </div>
    );
  }
}

GasStations.propTypes = {
  gasStations: PropTypes.array,
  requestTurn: PropTypes.func,
  getGasStations: PropTypes.func,
};

export default GasStations;
