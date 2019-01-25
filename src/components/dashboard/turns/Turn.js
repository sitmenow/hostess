import React from "react";
import PropTypes from "prop-types";

import DefaultButton from "../../buttons/DefaultButton";
import Timer from "./Timer";
import "./Turn.css";

const Turn = props => {
  const { _id, _expectedArrivalTime, plates, completeTurn, expireTurn } = props;

  const completeWithId = () => completeTurn(_id);

  const expireWithId = () => expireTurn(_id);

  return (
    <div className="row row-entry">
      <div className="col-md-4 column-entry">
        <span>{plates}</span>
      </div>
      <div className="col-md-4 column-entry">
        <Timer baseTime={_expectedArrivalTime} onTime={expireWithId} />
      </div>
      <div className="col-md-4 column-entry">
        <DefaultButton
          text="Despachado"
          style="green"
          onClick={completeWithId}
        />
      </div>
    </div>
  );
};

Turn.propTypes = {
  _id: PropTypes.string,
  _expectedArrivalTime: PropTypes.string,
  plates: PropTypes.string,
  time: PropTypes.string,
  completeTurn: PropTypes.func,
  expireTurn: PropTypes.func
};

export default Turn;
