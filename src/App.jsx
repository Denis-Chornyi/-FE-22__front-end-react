import React from 'react';
import Expand from './Expand';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';

class App extends React.Component {
  state = {
    isOpen: false
  };
  btnExtend = () => {
    this.setState(() => ({
      isOpen: this.state.isOpen === false ? true : false
    }));
  };

  render() {
    const { isOpen } = this.state;
    const icon = isOpen ? <SlArrowUp /> : <SlArrowDown />;

    return (
      <div className="app">
        <Expand isOpen={isOpen} icon={icon} title="Some title" onToggle={this.btnExtend}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
