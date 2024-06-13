import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const formatTime = time => moment(time).format('HH:mm:ss a');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return formatTime(new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset)));
};

const date = offset => formatTime(new Date(new Date().getTime() + offset * 3600000));
console.log(date(-7));

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: props.offset
    };
    setInterval(() => {
      this.setState({
        clock: date(this.state.clock)
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
