import React from "react";
import { Link } from "react-router-dom";

import "../page.css";
import style from "../../components/button/button.module.css";
import {ReactComponent as Logo} from "../../assets/Intro Image.svg";

const HomepageTeam = () => {
  return (
    <>
      <div className="page-container">
        <div className="page-homepage_intro">
          <div className="page-homepage_left">
            <div className="page-intro_text">
              <h1>
                Phòng khám tư nhân &nbsp;
                <span style={{ color: "#3FC1C9" }}>4CARE</span>
              </h1>

              {/* <div className="page_action">
                <Link to="/intro">
                  <button className={`${style.button}`}>Đặt lịch ngay</button>
                </Link>
              </div> */}
            </div>
          </div>

          <div className="page-homepage_image" >
            <Logo/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageTeam;
