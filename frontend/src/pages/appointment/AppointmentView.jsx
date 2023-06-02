import React from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

import { Button, UserTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const AppointmentView = () => {
  // const pageTitle = "Danh sách khám bệnh";
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label for="calender">
              Chọn ngày khám
              <input type="date" id="calender" name="calender" />
            </label>
          </form>
        </div>

        <div className="page_table">
          <div className="page_table-action">
            <Button
              label="Xóa các lựa chọn"
              icon=<FaTrash />
              color="var(--color-white)"
              bgColor="var(--color-button-red)"
            />
          </div>
          <UserTable gender="true" DoB="true" address="true" />
        </div>

        <div className="page_action">
          <Link to="/appointmentCreate">
            <button className={`${style.button} ${style.yellow}`}>
              Đặt lịch khám
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppointmentView;
