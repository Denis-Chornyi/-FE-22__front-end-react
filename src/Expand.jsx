import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isOpen, children, title }) => {
  if (!isOpen) return null;
  return (
    <div className="expand border">
      <div className="expand__header">
        <div className="expand__title">{title}</div>
      </div>
      {isOpen && <div className="expand__content">{children}</div>}
    </div>
  );
};

Expand.protoType = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

Expand.defaultProps = {
  isOpen: false,
  title: ''
};

export default Expand;

