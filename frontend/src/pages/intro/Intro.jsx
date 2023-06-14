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
          Thành viên
          <br /> <br />
          Phan Tân Hoàn Cương - 20120260
          <br /> <br />
          Nguyễn Minh Hiếu - 20120475
          <br /> <br />
          Phạm Anh Minh - 20120330
          <br /> <br />
          Lý Thành Nam - 20120334
        </p>
      </div>
    </div>
  );
};

export default Intro;
