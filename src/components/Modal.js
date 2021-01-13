import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                Hello there it's a modal.
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;