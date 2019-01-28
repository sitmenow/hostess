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
            <div className="entry-title">{this.props._name}</div>
            <div className="entry-detail text-muted">
              <span className="block"><b>{this.props.waitingTurns}</b> En la fila</span>
              <span className="block">{this.props._address || 'Dirección no encontrada'}</span>
            </div>
            <div className="text-paragraph">
              <div className="block">
                <span className="icon icon-check-circle fill-error"></span> Magna
              </div>
              <div className="block">
                <span className="icon icon-close-circle fill-success"></span> Premium
              </div>
            </div>
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
  waitingTurns: PropTypes.number,
  menu: PropTypes.object,
  openRequestTurnModal: PropTypes.func,
};

export default GasStationEntry;
