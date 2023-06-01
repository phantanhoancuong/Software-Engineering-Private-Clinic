import React, { useState } from "react";
import style from "../button/button.module.css";

import ModalContent from "./ModalContent";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return  (
    <div>
      { props.color == undefined &&
        <button className={`${style.button}`} onClick={() => setIsOpen(true)}>
        {props.label}
      </button>}
      { props.color == "red" &&
        <button className={`${style.button} ${style.red}`} onClick={() => setIsOpen(true)}>
        {props.label}
      </button>}
      { props.color == "yellow" &&
        <button className={`${style.button} ${style.yellow}`} onClick={() => setIsOpen(true)}>
        {props.label}
      </button>}
      { props.color == "green" &&
        <button className={`${style.button} ${style.green}`} onClick={() => setIsOpen(true)}>
        {props.label}
      </button>}
      {isOpen && <ModalContent setIsOpen={setIsOpen} props={props}/>}
    </div>
  );
}

export default Modal;
