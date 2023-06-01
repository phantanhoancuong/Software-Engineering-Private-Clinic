import React from "react";
import "./homepage.css";

import { Modal } from "../../components/index";

const Homepage = () => {
  return (
    <>
        <div className="homepage">
          <Modal
            label="Open Modal"
            header="Header"
            content="Content"
          />
        </div>
    </>
  );
};

export default Homepage;
