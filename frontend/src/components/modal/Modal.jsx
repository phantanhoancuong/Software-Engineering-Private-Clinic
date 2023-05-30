import React, { useState } from "react";
import style from "../button/button.module.css";

import ModalContent from "./ModalContent";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return  (
    <div>
      <button className={`${style.button}`} onClick={() => setIsOpen(true)}>
        {props.label}
      </button>
      {isOpen && <ModalContent setIsOpen={setIsOpen} props={props}/>}
    </div>
  );
}

export default Modal;
