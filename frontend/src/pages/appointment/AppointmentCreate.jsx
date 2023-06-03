import React from "react";
import "./appointmentCreate.css";
import style from "../../components/button/button.module.css";

const AppointmentCreate = () => {
  const pageTitle = "Đặt lịch khám";
  return (
    <>
      <div className="appointmentCreate__selection">
        <form>
          <label htmlFor="calender">
            <p>Ngày khám</p>
            <input type="date" id="calender" name="calender" style={{ width: "300px" }} />
          </label>

          <label htmlFor="time">
            <p>Giờ khám</p>
            <input type="time" id="time" name="time" style={{ width: "300px" }} />
          </label>

          <label htmlFor="userID">
            <p>ID bệnh nhân</p>
            <input type="text" id="userID" name="userID" style={{ width: "300px" }} />
          </label>

          <label htmlFor="description">
            <p>Mô tả triệu chứng</p>
            <textarea
              type="text"
              id="description"
              name="description"
              rows={4}
              style={{ width: "600px" }}
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