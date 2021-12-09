import React from "react";

const Modal = ({ children, toggleModal }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          height: "100vh",
          width: "100vw",
          background: ` rgba(51, 51, 51, 0.5)`,
          zIndex: "10",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        // onClick={toggleModal}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
