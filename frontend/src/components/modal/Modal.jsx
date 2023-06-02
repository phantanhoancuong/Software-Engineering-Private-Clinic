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

// TODO Fix Modal to class

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.props.color == undefined && (
//           <button
//             className={`${style.button}`}
//             onClick={() => (this.setState({isOpen: true}))}
//           >
//             {this.props.label}
//           </button>
//         )}
//         {this.props.color == "red" && (
//           <button
//             className={`${style.button} ${style.red}`}
//             onClick={() => (this.setState({isOpen: true}))}
//           >
//             {this.props.label}
//           </button>
//         )}
//         {this.props.color == "yellow" && (
//           <button
//             className={`${style.button} ${style.yellow}`}
//             onClick={() => (this.setState({isOpen: true}))}
//           >
//             {this.props.label}
//           </button>
//         )}
//         {this.props.color == "green" && (
//           <button
//             className={`${style.button} ${style.green}`}
//             onClick={() => (this.setState({isOpen: true}))}
//           >
//             {this.props.label}
//           </button>
//         )}
//         {this.props.isOpen && (
//           <ModalContent
//             setIsOpen={this.state.isOpen}
//             props={this.props.children}
//           />
//         )}
//       </div>
//     );
//   }
// }

export default Modal;
