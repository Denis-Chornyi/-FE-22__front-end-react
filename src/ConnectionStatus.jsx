import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online'
  };

  componentDidMount() {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.isOnline);
    window.removeEventListener('offline', this.isOffline);
  }

  isOnline = () => {
    this.setState({
      status: 'online'
    });
  };

  isOffline = () => {
    this.setState({
      status: 'offline'
    });
  };

  render() {
    const statusClass = this.state.status === 'offline' ? 'status status_offline' : 'status';

    return <div className={statusClass}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
