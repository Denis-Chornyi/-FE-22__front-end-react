import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  state = {
    isOnline: false
  };

  getStatus = () => {
    this.setState({
      isOnline: true
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline button={this.getStatus}/>}
      </div>
    );
  }
}
export default Status;
