import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.PureComponent {
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
    const iconClass = isOpen ? 'fa fa-chevron-up' : 'fa fa-chevron-down';

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button onClick={this.btnExtend} className="expand__toggle-btn">
            <i className={iconClass}></i>
          </button>
        </div>
        {isOpen && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

Expand.protoType = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string,
  onToggle: PropTypes.func.isRequired
};

Expand.defaultProps = {
  isOpen: false,
  title: ''
};

export default Expand;
