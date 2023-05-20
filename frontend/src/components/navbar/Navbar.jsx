import React from "react";
import "./navbar.css";

import {
  FaCalendarWeek,
  FaSearch,
  FaAddressBook,
  FaUser,
  FaReceipt,
  FaClipboardList,
  FaCommentDots,
  FaCog,
} from "react-icons/fa";

const Navbar = () => {
  const iconStyles = {color: "#fff", fontSize: "1.5rem"};
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <FaCalendarWeek style={iconStyles} />
          <p>Lịch khám</p>
        </div>
        <div className="navbar-links_logo">
          <FaSearch style={iconStyles} />
          <p>Tra cứu</p>
        </div>
        <div className="navbar-links_logo">
        <FaAddressBook style={iconStyles} />
          <p>Phiếu khám bệnh</p>
        </div>
        <div className="navbar-links_logo">
          <FaUser style={iconStyles} />
          <p>Bệnh nhân</p>
        </div>
        <div className="navbar-links_logo">
          <FaReceipt style={iconStyles} />
          <p>Hóa đơn</p>
        </div>
        <div className="navbar-links_logo">
          <FaClipboardList style={iconStyles} />
          <p>Báo cáo</p>
        </div>
        <div className="navbar-links_logo">
          <FaCommentDots style={iconStyles} />
          <p>Góp ý</p>
        </div>
        <div className="navbar-links_logo">
          <FaCog style={iconStyles} />
          <p>Quy định</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
