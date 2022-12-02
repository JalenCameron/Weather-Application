import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="modalOverlay">
      <div className="modalWrapper">
        <div className="modal">
          <div className="modalHeader">
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h2 className="modalTitle">{title}</h2>}
          <div className="modalBody">{children}</div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
