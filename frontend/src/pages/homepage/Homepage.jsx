import React from "react";
import "./homepage.css";

import { HeaderUser } from "../index";
import { Navbar, Modal } from "../../components/index";

import { MedicalReportView } from "../index";

const Homepage = () => {
  return (
    <>
      <HeaderUser title="home" />
      <div className="menu">
        <Navbar />

        <div className="homepage">
          <Modal
            label="Open Modal"
            header="Header"
            content="Content"
            // content=<MedicalReportView/>
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
