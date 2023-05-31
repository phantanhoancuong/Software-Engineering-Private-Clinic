import React from "react";
import ReactDom from "react-dom";
import "./modalContent.css";
import style from "../button/button.module.css";
import { FaTimes } from "react-icons/fa";

const ModalContent = ({ setIsOpen, props }) => {
  return ReactDom.createPortal(
    <>
      <div className="darkBG" />
      <div className="center">
        <div className="modal">
          <div className="modal-header">
            <p className="heading">{props.header}</p>
            <button
              className="modal-close_button"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="modal-content">
            <div className="modal-content_container">{props.content}</div>
          </div>

          <div className="modal-actions">
            <div className="modal-actions_container">
              <button
                className={`${style.button}`}
                onClick={() => setIsOpen(false)}
              >
                Xác nhận
              </button>
              {/* <button className="action_2" onClick={() => setIsOpen(false)}>
                Action 2
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalContent;
