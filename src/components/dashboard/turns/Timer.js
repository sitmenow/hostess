import React from "react";
import PropTypes from "prop-types";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 10,
      seconds: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componenWillUnmount() {
    clearInterval(this.interval);
  }

  getDisplayTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  render() {
    const { minutes, seconds } = this.state;
    const displayedMinutes = this.getDisplayTime(minutes);
    const displayedSeconds = this.getDisplayTime(seconds);
    return (
      <div className="timer">
        <span>
          {displayedMinutes} : {displayedSeconds}
        </span>
      </div>
    );
  }

  tick() {
    let { minutes, seconds } = this.state;

    seconds -= 1;

    if (seconds === 0 && minutes === 0) {
      clearInterval(this.interval);
      this.props.onTime();
    }

    if (seconds < 0 && minutes >= 0) {
      seconds = 59;
      minutes -= 1;
    }

    this.setState({
      minutes,
      seconds
    });
  }
}

Timer.propTypes = {
  onTime: PropTypes.func
};

export default Timer;
