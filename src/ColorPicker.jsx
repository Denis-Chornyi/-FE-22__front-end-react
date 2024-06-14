import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  hoverOn = e => {
    const color = e.target.getAttribute('data-color');
    this.setState({
      title: color
    });
  };

  hoverOff = () => {
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <div className="picker">
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            data-color="Coral"
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
          ></button>

          <button
            className="picker__button picker__button_aqua"
            data-color="Aqua"
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
          ></button>

          <button
            className="picker__button picker__button_bisque"
            data-color="Bisque"
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
