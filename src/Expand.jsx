import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isOpen, children, title }) => {
  if (!isOpen) return null;
  return (
    <div className="expand border">
      <div className="expend__header">
        <div className="expend__title">{title}</div>
      </div>
      <div className="dialog__content">{children}</div>
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

/* <div class="app">
  <!-- src/Expand.jsx -->
  <div class="expand border">
    <div class="expand__header">
      <span class="expand__title">Some title</span>
      <button class="expand__toggle-btn">
        <i class="fas fa-chevron-up"></i>
      </button>
    </div>
    <div class="expand__content">
      <!-- ... expand content (children) -->
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    </div>
  </div>
</div> */
