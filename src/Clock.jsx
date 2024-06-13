import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => moment().utcOffset(offset).format('HH:mm:ss A');

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
    clock: getTimeWithOffset(this.props.offset)
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
