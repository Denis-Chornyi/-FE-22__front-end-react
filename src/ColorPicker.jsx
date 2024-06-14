import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  setColor = color => {
    this.setState({
      title: color
    });
  };

  render() {
    return (
      <div className="picker">
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setColor('Coral')}
            onMouseLeave={() => this.setColor('')}
          ></button>

          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setColor('Aqua')}
            onMouseLeave={() => this.setColor('')}
          ></button>

          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setColor('Bisque')}
            onMouseLeave={() => this.setColor('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
