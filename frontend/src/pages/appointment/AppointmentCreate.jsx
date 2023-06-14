import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AppointmentCreate = () => {
  const navigate = useNavigate();

  const [ID, setID] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [symptom, setSymptom] = useState('');

  function handleSubmit (event) {
    event.preventDefault();
    if (date === "" || time === "" || ID === "" || symptom === "") {
      alert("Vui lòng điền đủ thông tin")
    }
    else {
      axios.post('http://localhost:8800/appointmentcreate', { date, time, ID, symptom })
      .then((res) => {
        if(res.data === 'success') {
          alert('Đăng ký thành công!');
        }
        else {
          alert(res.data);
        }
      })
      .catch((err) => console.log(err));
    }
  }

  const pageTitle = "Đặt lịch khám"; // Change this to change page title
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <div className="form-row">
              <label>
                <p>Ngày khám</p>
                <input type="date" style={{ width: "300px" }} 
                onChange={e => setDate(e.target.value)}
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                <p>Giờ khám</p>
                <input type="time" style={{ width: "300px" }} 
                onChange={e => setTime(e.target.value)}
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                <p>ID bệnh nhân</p>
                <input type="text" style={{ width: "300px" }} 
                onChange={e => setID(e.target.value)}
                />
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
                  onChange={e => setSymptom(e.target.value)}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="page_action">
        <button className={`${style.button} ${style.green}`}
        onClick={handleSubmit}>
          Xác nhận
        </button>
      </div>
    </>
  );
};

export default AppointmentCreate;
