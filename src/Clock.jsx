import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const formatTime = time => moment(time).format('HH:mm:ss a');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return formatTime(new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset)));
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: props.offset
    };
    setInterval(() => {
      this.setState({
        clock: getTimeWithOffset(this.props.offset)
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
