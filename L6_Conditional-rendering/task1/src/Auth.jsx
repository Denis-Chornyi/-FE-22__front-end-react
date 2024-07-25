import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  state = {
    isLoggedIn: false
  };

  handelLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handelLogout = () => {
    this.setState({
      isLoggedIn: false
    });
    
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.handelLogout} />
        ) : (
          <Login onLogin={this.handelLogin} />
        )}
      </div>
    );
  }
}

export default Auth;
