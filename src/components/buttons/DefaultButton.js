import React from "react";
import PropTypes from "prop-types";

import "./DefaultButton.css";

const DefaultButton = ({ text, style, onClick }) => (
  <button className={style} onClick={onClick}>
    {text}
  </button>
);

DefaultButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func
};

export default DefaultButton;
