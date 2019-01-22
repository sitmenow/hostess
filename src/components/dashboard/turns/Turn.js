import React from "react";
import PropTypes from "prop-types";

import DefaultButton from "../../buttons/DefaultButton";
import "./Turn.css";

class Turn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { plate, time } = this.props;
    return (
      <div className="row row-entry">
        <div className="col-md-4 column-entry">
          <span>{plate}</span>
        </div>
        <div className="col-md-4 column-entry">
          <span>{time}</span>
        </div>
        <div className="col-md-4 column-entry">
          <DefaultButton text="Despachado" style="green" />
        </div>
      </div>
    );
  }
}

Turn.propTypes = {
  plate: PropTypes.string,
  time: PropTypes.string
};

export default Turn;
