import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h3>{ this.props.title || 'Sit Me Now Client' }</h3>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
