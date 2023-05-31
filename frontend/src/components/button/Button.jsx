import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div className="button" style={{ backgroundColor: props.bgColor }}>
      {/* // If Icon is passed to props -> Icon + Label */}
      { props.icon != undefined &&
      <div className="button-icon" style={{ color: props.color, fontSize: "1.5rem" }}>
        {props.icon}
      </div>}
      <p style={{ color: props.color }}>{props.label}</p>
    </div>
  );
}

export default Button;
