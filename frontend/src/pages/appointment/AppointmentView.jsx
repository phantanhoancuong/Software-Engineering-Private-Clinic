import React from "react";
import "../page.css";
import style from "../../components/button/button.module.css";
import { FaTrash } from "react-icons/fa";
import { PatientViewTable } from "../../components/index";

const AppointmentView = () => {
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label htmlFor="calender">
              <p>Chọn ngày khám</p>
              <input type="date" id="calender" name="calender" style={{ width: "300px" }}/>
              <button className={`${style.button} ${style.yellow}`}>
                Xem lịch khám
              </button>
              <button className={`${style.button} ${style.red}`}>
                <FaTrash className={style.icon} />
                Xóa các lựa chọn
              </button>
            </label>
          </form>
        </div>
        <div className="page_table">
          <PatientViewTable id="true" userID="true" full_name="true" symptom="true" diagnose="true"/>
        </div>
      </div>
    </>
  );
};

export default AppointmentView;
