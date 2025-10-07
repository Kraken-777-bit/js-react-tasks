import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const ModalHeader = ({ toggle, children }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      onClick={toggle}
    ></button>
  </div>
);

const ModalBody = ({ children }) => (
  <div className="modal-body">{children}</div>
);

const ModalFooter = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

class Modal extends React.Component {
  static Header = ModalHeader;
  static Body = ModalBody;
  static Footer = ModalFooter;

  render() {
    const { isOpen, children } = this.props;
    const modalClass = cn('modal', {
      'fade show': isOpen
    });
    const modalStyle = {
      display: isOpen ? 'block' : 'none'
    };

    return (
      <div className={modalClass} style={modalStyle} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
// END
