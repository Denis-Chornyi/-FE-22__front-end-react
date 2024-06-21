import React from 'react';
import PropTypes from 'prop-types';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';

const Expand = ({ isOpen, children, title, onToggle }) => {
  const icon = isOpen ? <SlArrowUp /> : <SlArrowDown />;

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button onClick={onToggle} className="expand__toggle-btn">
          {icon}
        </button>
      </div>
      {isOpen && <div className="expand__content">{children}</div>}
    </div>
  );
};

Expand.protoType = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string
};

Expand.defaultProps = {
  isOpen: false,
  title: ''
};

export default Expand;
