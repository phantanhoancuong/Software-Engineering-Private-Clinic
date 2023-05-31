import React from "react";
import { Link } from "react-router-dom";
import "./appointmentView.css";
import style from "../../components/button/button.module.css";

import { Button, UserTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const AppointmentView = () => {
  const pageTitle = "Danh sách khám bệnh";
  return (
    <>
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
        <UserTable gender="true" DoB="true" address="true" />
      </div>

      <Link to="/appointmentCreate">
        <button className={`${style.button} ${style.yellow}`}>
          Đặt lịch khám
        </button>
      </Link>
    </>
  );
};

export default AppointmentView;
