import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";
// import { dropdownData } from "./dropdownData";

import { FaAngleLeft } from "react-icons/fa";

// Reference for dropdown: https://www.youtube.com/watch?v=HfZ7pdhS43s

const DropdownMenu = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "dropdown-feature open" : "dropdown-feature"}>
        <div className="dropdown-feature_title">
          <span>
            <div className="dropdown-feature_title-icon">{item.icon}</div>
            {item.title}
          </span>
          <FaAngleLeft
            className="dropdown-feature_toggleIcon"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="dropdown-feature_subMenu">
          {item.childrens.map((child, index) => (
            <DropdownMenu key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={item.path || "#"} className="dropdown-feature plain">
        <div className="dropdown-feature_title-icon">{item.icon}</div>
        {item.title}
      </Link>
    );
  }
};

function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const dropdownData = props.data;

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-container" ref={menuRef}>
          <div
            className="dropdown-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {props.children}
          </div>

          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            {dropdownData.map((item, index) => (
              <DropdownMenu key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
