import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: 'Off'
    };
  }
  change() {
    this.setState({
      toggler: this.state.toggler === 'Off' ? 'On' : 'Off'
    });
  }
  render() {
    return (
      <div className="toggler" onClick={() => this.change()}>
        {this.state.toggler}
      </div>
    );
  }
}

export default Toggler;
