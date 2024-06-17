import React from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => moment().utcOffset(offset).format('HH:mm:ss A');

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: getTimeWithOffset(this.props.offset)
    };
  }
  componentDidMount() {
    this.intetval = setInterval(() => {
      this.setState({
        clock: getTimeWithOffset(this.props.offset)
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intetval);
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
