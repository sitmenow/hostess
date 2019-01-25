import React from "react";
import PropTypes from "prop-types";

import "./DefaultButton.css";

const DefaultButton = ({ text, style, onClickHandler }) => {
  return (
    <button className={style} onClick={onClickHandler}> {text} </button>
  );
};

DefaultButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default DefaultButton;
