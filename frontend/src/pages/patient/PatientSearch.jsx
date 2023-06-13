import React, { useState } from "react";
import "../page.css";
import style from "../../components/button/button.module.css";
import { FaTrash } from "react-icons/fa";
import { UserTable } from "../../components/index";

import axios from "axios";

const PatientSearch = () => {
  const [id, setID] = useState('');
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8800/patientsearch', {id})
    .then((res, err) => {
      if(res.data === 'fail') {
        alert('Không có dữ liệu')
      }
      else {
        setData(res.data)
      }
    })
  }

  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>ID bệnh nhân</p>
              <input type="text" style={{ width: "300px" }} 
              onChange={e => setID(e.target.value)}
              />
            </label>
            {/* <label>
              <p>Chọn ngày khám</p>
              <input type="text" style={{ width: "300px" }} />
            </label> */}
            <label>
              <button className={`${style.button} ${style.yellow}`} onClick={handleSubmit}>
                  Tìm kiếm bệnh nhân
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
                <th>Ngày khám</th>
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
                        <td>{user.date}</td>
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

export default PatientSearch;
