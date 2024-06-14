import React from 'react';
import Info from './Info';

const text1 = 'Iphone 13 - Price is 500$. Available in 2 colors';
const text2 = 'Price is 650$. Not available';

class Page extends React.Component {
  state = {
    text: null
  };

  setText = text => {
    this.setState({
      text
    });
  };
  render() {
    return (
      <div className="page">
        <Info text={this.state.text} />
        <button className="btn" onClick={() => this.setText(text1)}>
          text1
        </button>
        <button className="btn" onClick={() => this.setText(text2)}>
          text2
        </button>
        <button className="btn" onClick={() => this.setText('')}>
          clear
        </button>
      </div>
    );
  }
}
export default Page;
