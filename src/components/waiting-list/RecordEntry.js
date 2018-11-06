import React from 'react';

import './RecordEntry.css';


export default ({ title, amount }) => {
  return (
    <div className="record-entry">
      <div>
        <span className="title">{title}</span>
      </div>
      <div>
        <span className="amount">{amount}</span>
      </div>
    </div>
  );
};
