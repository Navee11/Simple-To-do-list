import React from "react";

function Modal({ people, setIsModal, content }) {
  setTimeout(() => {
    setIsModal(false);
  }, 2000);

  return <div className="modal">{content}</div>;
}

export default Modal;
