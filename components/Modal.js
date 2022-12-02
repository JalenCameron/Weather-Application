import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, onClose, children, title }) => {
  /* Adding an isBrowser boolean and setting it to true in the initial render of the component. This way, on the initial load of the page the rendering on the server will not give me an 'undefined' error when I set up the modal */
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
    // Conditionally creating the portal depending on whether the code executes in the browser or not.
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
