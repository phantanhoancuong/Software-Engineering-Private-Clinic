import React from "react";
import "../page.css";
import style from "../../components/button/button.module.css";

const PatientCreate = () => {
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>Họ tên</p>
              <input type="text" style={{ width: "300px" }} />
            </label>

            <label>
              <p>Giới tính</p>
              <select>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </label>

            <label>
              <p>Năm sinh</p>
              <input type="text" style={{ width: "300px" }} />
            </label>

            <label>
              <p>Địa chỉ</p>
              <input type="text" style={{ width: "600px" }} />
            </label>

            <label>
              <p>ID bệnh nhân</p>
              <input type="text" style={{ width: "600px" }} readOnly />
            </label>
          </form>
          <div className="page_action">
            <button className={`${style.button} ${style.green}`}>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientCreate;
