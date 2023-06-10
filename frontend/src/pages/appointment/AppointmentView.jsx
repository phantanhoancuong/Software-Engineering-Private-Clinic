import React, {useState} from "react";
import "../page.css";
import style from "../../components/button/button.module.css";
import { FaTrash } from "react-icons/fa";
import { PatientViewTable } from "../../components/index";
import axios from "axios";

import "../../components/table/table.css";

const AppointmentView = () => {
  const [date, setDate] = useState('');
  const [data, setData] = useState([])

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8800/appointmentview', {date})
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
            <label htmlFor="calender">
              <p>Chọn ngày khám</p>
              <input type="date" id="calender" name="calender" style={{ width: "300px" }}
              onChange={e => setDate(e.target.value)}
              />
              <button className={`${style.button} ${style.yellow}`} onClick={handleSubmit}>
                Xem lịch khám
              </button>
              <button className={`${style.button} ${style.red}`}>
                <FaTrash className={style.icon} />
                Xóa các lựa chọn
              </button>
            </label>
          </form>
        </div>

        {/* <div className="page_table">
          <PatientViewTable id="true" ID="true" full_name="true" date="true" time="true" symptom="true"/>
        </div> */}

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>ID Bệnh nhân</th>
                <th>Ngày khám</th>
                <th>Giờ khám</th>
                <th>Triệu chứng</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
            {data.map((user, index) => {
                return (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.ID}</td>
                        <td>{user.date}</td>
                        <td>{user.time}</td>
                        <td>{user.symptom}</td>
                        <td>
                          <button
                            style={{
                              all: "unset",
                              fontSize: "1rem",
                              fontWeight: "500",
                              color: "var(--color-whiteText)",
                              backgroundColor: "var(--color-button-yellow)",
                              padding: "0.5rem",
                              borderRadius: "0.5rem",
                            }}
                          >
                            Chi tiết
                          </button>
                        </td>
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

export default AppointmentView;
