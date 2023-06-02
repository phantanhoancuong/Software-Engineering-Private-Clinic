import React from "react";
import "./appointmentCreate.css";
import style from "../../components/button/button.module.css";

const AppointmentCreate = () => {
  const pageTitle = "Đặt lịch khám";
  return (
    <>
      <div className="appointmentCreate__selection">
        <form>
          <label for="calender">
            <p>Ngày khám</p>
            <input type="date" id="calender" name="calender" />
          </label>

          <label for="time">
            <p>Giờ khám</p>
            <input type="time" id="time" name="time" />
          </label>

          <label for="userID">
            <p>ID bệnh nhân</p>
            <input type="text" id="userID" name="userID" />
          </label>

          <label for="description">
            <p>Mô tả triệu chứng</p>
            <textarea
              type="text"
              id="description"
              name="description"
              rows={4}
            />
          </label>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button className={`${style.button} ${style.green}`}>
          Xác nhận
        </button>
      </div>
    </>
  );
};

export default AppointmentCreate;
