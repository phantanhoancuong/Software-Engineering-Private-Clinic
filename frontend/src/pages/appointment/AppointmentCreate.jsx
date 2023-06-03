import React from "react";
import "../multi_input_page.css";
import style from "../../components/button/button.module.css";

const AppointmentCreate = () => {
  const pageTitle = "Đặt lịch khám";
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <div className="form-row">
              <label>
                <p>Ngày khám</p>
                <input type="date" style={{ width: "300px" }} />
              </label>
            </div>

            <div className="form-row">
              <label>
                <p>Giờ khám</p>
                <input type="time" style={{ width: "300px" }} />
              </label>
            </div>

            <div className="form-row">
              <label>
                <p>ID bệnh nhân</p>
                <input type="text" style={{ width: "300px" }} />
              </label>
            </div>

            <div className="form-row">
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
            </div>
          </form>
        </div>
      </div>
      <div className="selection-confirm">
        <button className={`${style.button} ${style.yellow}`}>
          Đặt lịch khám
        </button>
      </div>
    </>
  );
};

export default AppointmentCreate;
