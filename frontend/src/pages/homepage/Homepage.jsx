import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

import { HeaderUser } from "../index";
import { Navbar, Button } from "../../components/index";

const Homepage = () => {
  return (
    <>
      <HeaderUser title="home" />
      <div className="menu">
        <Navbar />

        <div className="homepage">
          <Link to="/">
            <Button
              label="Home"
              color="var(--color-whiteText)"
              bgColor="var(--color-button-green)"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
