import React from "react";
import "../page.css";
import style from "../../components/button/button.module.css";

import { AppointmentTable } from "../../components/index";

const AppointmentView = () => {
  // const pageTitle = "Danh sách khám bệnh";
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label for="calender">
              <p>Chọn ngày khám</p>
              <input type="date" id="calender" name="calender" style={{ width: "300px" }}/>
              <button className={`${style.button} ${style.yellow}`}>
                Xem lịch khám
              </button>
            </label>
          </form>
        </div>
        <div className="page_table">
          <AppointmentTable gender="true" date="true" time="true" symptom="true" />
        </div>
      </div>
    </>
  );
};

export default AppointmentView;
