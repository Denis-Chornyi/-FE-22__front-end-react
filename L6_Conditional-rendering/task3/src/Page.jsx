import React from 'react';
import Info from './Info';

const iPhone13 = 'Price is 500$. Available in 2 colors';
const iPhone13Pro = 'Price is 650$. Not available';

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
        <Info info={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(iPhone13)}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.setText(iPhone13Pro)}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}
export default Page;
