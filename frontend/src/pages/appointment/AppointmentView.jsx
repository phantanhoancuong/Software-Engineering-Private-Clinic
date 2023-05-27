import React from "react";
import { Link } from "react-router-dom";
import "./appointmentView.css";

import { HeaderUser } from "../index";
import { Navbar, Button, UserTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const AppointmentView = () => {
  const pageTitle = "Danh sách khám bệnh";
  return (
    <>
      <HeaderUser title={pageTitle} />
      <div className="menu">
        <Navbar />

        <div className="appointmentView">
          <p>{pageTitle}</p>

          <div className="appointmentView__selection">
            <div className="appointmentView__selection-date">
              <form>
                <label for="calender">
                  Chọn ngày khám
                  <input type="date" id="calender" name="calender" />
                </label>
              </form>
            </div>

            <div className="selection__delete">
              <Button
                label="Xóa các lựa chọn"
                icon=<FaTrash />
                color="var(--color-white)"
                bgColor="var(--color-button-red)"
              />
            </div>
          </div>

          <div className="appointment-table">
            <UserTable />
          </div>

          <Link to="/appointmentCreate">
            <Button
              label="Đặt lịch khám"
              color="var(--color-whiteText)"
              bgColor="var(--color-button-yellow)"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppointmentView;
