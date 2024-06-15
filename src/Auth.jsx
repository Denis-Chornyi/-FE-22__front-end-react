import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spiner from './Spiner';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: false
  };

  sizeSpiner = {
    width: '40px',
    height: '40px'
  };

  handelLogin = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLoading: false
      });
    }, 2000);
  };

  handelLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;
    return (
      <>
        {isLoading && <Spiner size={this.sizeSpiner} />}
        {!isLoading && (
          <>
            {isLoggedIn ? (
              <Logout onLogout={this.handelLogout} />
            ) : (
              <Login onLogin={this.handelLogin} />
            )}
          </>
        )}
      </>
    );
  }
}

export default Auth;
