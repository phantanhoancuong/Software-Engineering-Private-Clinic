import React from "react";
import "./navbar.css";

import bill from "../../assets/Bill.svg";
import calender from "../../assets/Calender.svg";
import medicalReport from "../../assets/Medical Report.svg";
import monthlyReport from "../../assets/Monthly Report.svg";
import patient from "../../assets/Patient.svg";
import review from "../../assets/Review.svg";
import search from "../../assets/Search.svg";
import setting from "../../assets/Setting.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={calender} alt="Calender" />
          <p>Lịch khám</p>
        </div>
        <div className="navbar-links_logo">
          <img src={search} alt="Search" />
          <p>Tra cứu</p>
        </div>
        <div className="navbar-links_logo">
          <img src={medicalReport} alt="Medical Report" />
          <p>Phiếu khám bệnh</p>
        </div>
        <div className="navbar-links_logo">
          <img src={patient} alt="Patient" />
          <p>Bệnh nhân</p>
        </div>
        <div className="navbar-links_logo">
          <img src={bill} alt="Bill" />
          <p>Hóa đơn</p>
        </div>
        <div className="navbar-links_logo">
          <img src={monthlyReport} alt="Monthly Report" />
          <p>Báo cáo</p>
        </div>
        <div className="navbar-links_logo">
          <img src={review} alt="Review" />
          <p>Góp ý</p>
        </div>
        <div className="navbar-links_logo">
          <img src={setting} alt="Setting" />
          <p>Quy định</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
