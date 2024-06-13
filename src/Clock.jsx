import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formatTime = time => moment(time).format('HH:mm:ss a');

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: props.offset
    };
    setInterval(() => {
      this.setState({
        clock: formatTime(getTimeWithOffset(this.state.clock))
      });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.clock}</div>
      </div>
    );
  }
}
export default Clock;
