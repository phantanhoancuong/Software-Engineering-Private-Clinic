import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";
import { DrugTable } from "../../components/index";

const MedicalReportCreate = () => {
  const [date, setDate] = useState('')
  const [id, setId] = useState('')
  const [diagnose, setDiagnose] = useState('')

  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>Chọn ngày khám</p>
              <input type="date" style={{ width: "300px" }} 
              onChange={e => setDate(e.target.value)}
              />
            </label>

            <label>
              <p>ID bệnh nhân</p>
              <input type="text" style={{ width: "300px" }} 
              onChange={e => setId(e.target.value)}
              />
            </label>

            <label htmlFor="diagnose">
              <p>Bệnh</p>
              <input type="text" id="diagnose" name="diagnose" style={{ width: "600px" }} 
              onChange={e => setDiagnose(e.target.value)}/>
            </label>
          </form>
        </div>

        <div className="page_table">
          <DrugTable unit="true" dose="true" usage="true" action="true"/>
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
