import React from "react";
import "./homepage.css";

import { Modal } from "../../components/index";
import {AppointmentView} from "../index";

const Homepage = () => {
  return (
    <>
        <div className="homepage">
          <Modal
            label="Open Modal"
            header="Header"
            // content=<AppointmentView/>
            content="Content"
          />
        </div>
    </>
  );
};

export default Homepage;
