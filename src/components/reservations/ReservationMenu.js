import React from "react";
import PropTypes from "prop-types";

import dropDown from "../../images/drop-down.svg";
import "./ReservationMenu.css";

class ReservationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.cancelReservation = this.cancelReservation.bind(this);
  }

  handleClick() {
    if (!this.state.menuOpen) {
      document.addEventListener("mousedown", this.handleClickOutside, false);
    } else {
      document.removeEventListener("mousedown", this.handleClickOutside, false);
    }

    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  handleClickOutside(event) {
    if (this.node.contains(event.target)) {
      return;
    }

    this.handleClick();
  }

  cancelReservation() {
    this.props.cancelReservation();
    this.handleClick();
  }

  render() {
    return (
      <div
        className="reservation-menu"
        ref={node => {
          this.node = node;
        }}
      >
        <img className="drop-down" src={dropDown} onClick={this.handleClick} />
        {this.state.menuOpen && (
          <div className="menu-container">
            <div className="menu-item" onClick={this.cancelReservation}>
              Cancelar registro
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReservationMenu.propTypes = {
  cancelReservation: PropTypes.func
};

export default ReservationMenu;
