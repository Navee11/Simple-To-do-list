import React from "react";

function Modal({ people, setIsModal, content }) {
  setTimeout(() => {
    setIsModal(false);
  }, 2000);

  return <p className="modal">{content}</p>;
}

export default Modal;
