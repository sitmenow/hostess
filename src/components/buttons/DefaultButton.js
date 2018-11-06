import React from 'react';

import './DefaultButton.css';

export default ({ text, style }) => {
  return (
    <button className={style}> {text} </button>
  );
};
