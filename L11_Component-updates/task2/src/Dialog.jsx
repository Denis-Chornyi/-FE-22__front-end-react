import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ isOpen, children, title, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <button onClick={onClose} className="dialog__close-btn">
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

Dialog.protoType = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

Dialog.defaultProps = {
  isOpen: false,
  title: ''
};

export default Dialog;

// <!-- App -->
// <div class="app">
//   <button class="btn">Show dialog</button>
//   <!-- Dialog -->
//   <div class="dialog">
//     <div class="dialog__heading">
//       <h4 class="dialog__title">Recommendation</h4>
//       <button class="dialog__close-btn">+</button>
//     </div>
//     <div class="dialog__content">
//       <!-- Dialog children -->
//       <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
//     </div>
//   </div>
// </div>
