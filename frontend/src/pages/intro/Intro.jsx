import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import "../page.css";

const Intro = () => {
  const pageTitle = "Intro"; // Change this to change page title
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);

  return (
    <div className="page-container">
      <div className="page-intro_text">
        <h2>
          Phòng khám tư nhân <br />
          <span style={{ color: "#3FC1C9" }}>4CARE</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
          mauris ut sem aliquam vulputate. Quisque non neque a sapien tristique
          suscipit sit amet at turpis. Curabitur vitae vulputate dui.
          <br /> <br />
          Cras finibus massa quam, venenatis maximus turpis sagittis sed.
          Suspendisse potenti. Nam pharetra fringilla eleifend. Pellentesque id
          tortor nec urna auctor rhoncus at vel urna. In imperdiet justo a
          sollicitudin iaculis.
          <br /> <br />
          Proin in nulla odio. Phasellus viverra, purus id tempus efficitur,
          metus urna tincidunt turpis, rhoncus aliquet sem nibh sit amet
        </p>
      </div>
    </div>
  );
};

export default Intro;
