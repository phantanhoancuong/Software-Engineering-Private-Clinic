import React from "react";
import "../page.css";
import style from "../../components/button/button.module.css";
import { FaTrash } from "react-icons/fa";
import { UserTable } from "../../components/index";

const patientView = () => {
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>ID bệnh nhân</p>
              <input type="text" style={{ width: "300px" }}/>
            </label>
            <label>
              <p>Chọn ngày khám</p>
              <input type="text" style={{ width: "300px" }}/>
              <button className={`${style.button} ${style.yellow}`}>
                Xem bệnh nhân
              </button>
              <button className={`${style.button} ${style.red}`}>
                <FaTrash className={style.icon} />
                Xóa các lựa chọn
              </button>
            </label>
          </form>
        </div>
        <div className="page_table">
          <UserTable id="true" userID="true" full_name="true" gender="true" DoB="true" address="true" action="true" />
        </div>
      </div>
    </>
  );
};

export default patientView;
