import React from "react";
import PropTypes from "prop-types";

import "./DefaultButton.css";

const DefaultButton = ({ text, style }) => (
  <button className={style}> {text} </button>
);

DefaultButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string
};

export default DefaultButton;
