import React from "react";
import PropTypes from "prop-types";

import DefaultButton from "../../buttons/DefaultButton";
import "./GasStationEntry.css";
import gasStationIcon from "../../../images/gas-station-icon.svg";

class GasStationEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.openRequestTurnModal = this.openRequestTurnModal.bind(this);
  }

  openRequestTurnModal(event) {
    event.preventDefault();
    const { _id, _name } = this.props;
    return this.props.openRequestTurnModal({ _id, _name });
  }

  render() {
    return (
      <div className="table-entry">
        <div className="row">
          <div className="column thumbnail">
            <img src={gasStationIcon} />
          </div>
          <div className="column">
            <span>{this.props._name}</span>
            <span>{this.props._address || 'Dirección no encontrada'}</span>
            <span>{this.props._coordinates && this.props._coordinates.length ? this.props._coordinates.join`,` : 'N/E'}</span>
          </div>
        </div>
        <div className="column column-center">
          <DefaultButton text="Solicitar turno" style="blue" onClickHandler={this.openRequestTurnModal} />
        </div>
      </div>
    );
  }
}

GasStationEntry.propTypes = {
  _id: PropTypes.string,
  _name: PropTypes.string,
  _coordinates: PropTypes.array,
  _address: PropTypes.string,
  menu: PropTypes.object,
  openRequestTurnModal: PropTypes.func,
};

export default GasStationEntry;
