import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <>
    <div className="modalOverlay">
        <div className="ModalWrap" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <button type="button" className="modalClose" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div className="backdrop">
          <img className="resume"
          src='resume.png'
          alt="rsume"
        />
        </div>
        </div>
        </div>
    </div>
    </>, 
    document.body) : null;

export default Modal;