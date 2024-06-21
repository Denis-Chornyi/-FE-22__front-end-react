import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ icon, isOpen, children, title, onToggle }) => {
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
  title: PropTypes.string,
  onToggle: PropTypes.func.isRequired
};

Expand.defaultProps = {
  isOpen: false,
  title: ''
};

export default Expand;
