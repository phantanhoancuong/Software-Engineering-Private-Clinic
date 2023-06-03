import React from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";
import { DrugTable } from "../../components/index";

const MedicalReportCreate = () => {
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>Chọn ngày khám</p>
              <input type="date" style={{ width: "300px" }} />
            </label>

            <label>
              <p>ID bệnh nhân</p>
              <input type="text" style={{ width: "300px" }} />
            </label>

            <label htmlFor="symptom">
              <p>Triệu chứng</p>
              <input type="text" style={{ width: "600px" }} />
            </label>

            <label htmlFor="diagnose">
              <p>Bệnh</p>
              <input type="text" id="diagnose" name="diagnose" style={{ width: "600px" }} />
            </label>
          </form>
        </div>

        <div className="page_table">
          <DrugTable isAdd="true" unit="true" dose="true" usage="true" />
        </div>

        <div className="selection-confirm">
          <div>
            <Link to="/medicalReportCreate">
              <button className={`${style.button} ${style.green}`}>
                Xác nhận
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalReportCreate;
