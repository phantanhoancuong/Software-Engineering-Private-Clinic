import React from "react";
import "./button.css";

function Button(props) {
  if (props.icon == undefined) {
    // If no Icon is passed to props -> Only label
    return (
      <div className="button" style={{ backgroundColor: props.bgColor }}>
        <p style={{ color: props.color }}>{props.label}</p>
      </div>
    );
  } else {
    return (
      // If Icon is passed to props -> Icon + Label
      <div className="button" style={{ backgroundColor: props.bgColor }}>
        <div className="button-icon" style={{ color: props.color, fontSize: "1.5rem" }}>
          {props.icon}
        </div>
        <p style={{ color: props.color }}>{props.label}</p>
      </div>
    );
  }
}

export default Button;
