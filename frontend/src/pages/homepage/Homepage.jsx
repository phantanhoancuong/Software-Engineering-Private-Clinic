import React from "react";
import { Link } from "react-router-dom";

import "../page.css";
import style from "../../components/button/button.module.css";
import {ReactComponent as Logo} from "../../assets/Intro Image.svg";

const Homepage = () => {
  return (
    <>
      <div className="page-container">
        <div className="page-homepage_intro">
          <div className="page-homepage_left">
            <div className="page-intro_text">
              <h2>
                Phòng khám tư nhân <br />
                <span style={{ color: "#3FC1C9" }}>4CARE</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                congue mauris ut sem aliquam vulputate. Quisque non neque a
                sapien tristique suscipit sit amet at turpis. Curabitur vitae
                vulputate dui.
                <br /> <br />
                Cras finibus massa quam, venenatis maximus turpis sagittis sed.
                Suspendisse potenti. Nam pharetra fringilla eleifend.
                Pellentesque id tortor nec urna auctor rhoncus at vel urna. In
                imperdiet justo a sollicitudin iaculis.
                <br /> <br />
                Proin in nulla odio. Phasellus viverra, purus id tempus
                efficitur, metus urna tincidunt turpis, rhoncus aliquet sem nibh
                sit amet
              </p>

              <div className="page_action">
                <Link to="/intro">
                  <button className={`${style.button}`}>Đặt lịch ngay</button>
                </Link>
              </div>
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

export default Homepage;
