import React from 'react';
import { SlArrowUp } from 'react-icons/sl';
import { SlArrowDown } from 'react-icons/sl';

import Expand from './Expand';

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
    const icon = isOpen ? <SlArrowDown /> : <SlArrowUp />;
    return (
      <div className="app">
        <button onClick={this.btnExtend} className="expand__toggle-btn">
          {icon}
        </button>
        <Expand isOpen={isOpen} title="some title">
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
