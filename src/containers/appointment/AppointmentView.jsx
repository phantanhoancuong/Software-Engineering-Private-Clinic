import React from "react";
import "./appointmentView.css";

import { HeaderUser } from "../index";
import { Navbar } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const AppointmentView = () => {
  return (
    <>
      <HeaderUser />
      <div className="menu">
        <Navbar />
        <div className="appointmentView">
          <h2>Danh sách khám bệnh</h2>

          <div className="appointmentView__selection">
            <div className="appointmentView__selection-date">
              <p>Chọn ngày khám</p>
              <div className="dropdown">
                <button className="dropdown-button">DD/MM/YYYY</button>
                <div className="dropdown-content">
                  <p>Đây chỉ là placeholder, sau sẽ thay bằng lịch</p>
                  <p>08/05/2023</p>
                  <p>10/05/2023</p>
                  <p>12/05/2023</p>
                </div>
              </div>
            </div>

            <button className="selection__delete">
              <div className="selection__delete-logo">
                <FaTrash />
              </div>
              <p>Xóa các lựa chọn</p>
            </button>
          </div>

          <div className="appointment-table">
            <p>Appointment Table here</p>
          </div>

          <button className="selection__appointmentCreate">
            <a href="/">Đặt lịch khám</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default AppointmentView;
