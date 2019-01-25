import React from "react";

import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="reservations-header">
        <div>
          <span className="header-title">Solo se muestran las gasolineras abiertas</span>
        </div>
      </div>
    );
  }
}

export default Header;
