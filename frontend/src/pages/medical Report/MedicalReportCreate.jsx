import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";
import { DrugTable } from "../../components/index";

import axios from 'axios'

const MedicalReportCreate = () => {
  const [date, setDate] = useState('')
  const [id, setId] = useState('')
  const [symptom, setSymptom] = useState('')
  const [diagnose, setDiagnose] = useState('')

  function handleSubmit (event) {
    event.preventDefault();
    if (date === "" || id === "" || symptom === "" || diagnose === "") {
      alert("Vui lòng điền đủ thông tin")
    }
    else {
      axios.post('http://localhost:8800/medicalreportcreate', { date, id, symptom, diagnose })
      .then((res, err) => {
        if(res.data === "success") {
          alert("Phiếu khám tạo thành công")
        }
        else {
          alert(res.data)
        }
      })
      .catch(err => console.log(err));
    }
  }

  const pageTitle = "Tạo phiếu khám bệnh"; // Change this to change page title
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);

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

            <label htmlFor="symptom">
              <p>Triệu chứng</p>
              <input type="text" id="symptom" name="symptom" style={{ width: "600px" }} 
              onChange={e => setSymptom(e.target.value)}/>
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
              <button className={`${style.button} ${style.green}`} onClick={handleSubmit}>
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
