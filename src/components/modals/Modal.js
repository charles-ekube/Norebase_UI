import React from "react";
import './ModalStyles.css'

const Modal = ({ children, toggleModal }) => {
  return (
    <>
      <div
      className="modal-background"
        // onClick={toggleModal}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
