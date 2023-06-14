import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

import { PatientViewTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

import axios from 'axios'

const MedicalReportView = () => {

  const [date, setDate] = useState('');
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if(date === '') {
      alert("Vui lòng điền đủ thông tin")
    }
    else {
      axios.post('http://localhost:8800/medicalreportview', {date})
      .then((res) => {
        if(res.data === 'fail') {
          alert('Không có dữ liệu')
        }
        else {
          setData(res.data)
        }
      })
      .catch((err) => console.log(err));
    }
  }

  const pageTitle = "Danh sách phiếu khám bệnh";
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);
  
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label for="calender">
              <p>Chọn ngày khám</p>
              <input type="date" id="calender" name="calender" style={{ width: "300px" }}
              onChange={e=> setDate(e.target.value)}
              />
              <button className={`${style.button} ${style.yellow}`} onClick={handleSubmit}>
                Xem phiếu khám
              </button>            
              
              <button className={`${style.button} ${style.red}`}>
                <FaTrash className={style.icon} />
                  Xóa các lựa chọn
              </button>
            </label>
          </form>
        </div>
        <div className="page_table">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Họ tên</th>
                <th>Triệu chứng</th>
                <th>Loại bệnh</th>
              </tr>
            </thead>
            <tbody>
            {data.map((user, index) => {
                return (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.ID}</td>
                        <td>{user.name}</td>
                        <td>{user.symptom}</td>
                        <td>{user.diagnose}</td>
                      </tr>
                    );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MedicalReportView;
