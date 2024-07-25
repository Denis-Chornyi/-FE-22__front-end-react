import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  state = {
    visible: true
  };
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <>
        <Clock location="NEW YORK" offset={-5} />
        <Clock location="KYIV" offset={2} />
        <Clock location="LONDON" offset={0} />
      </>
    );
  }
}

export default App;
