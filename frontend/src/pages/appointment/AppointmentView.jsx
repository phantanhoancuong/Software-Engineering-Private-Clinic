import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
// import Moment from "react-moment";
import "../page.css";
import style from "../../components/button/button.module.css";
import { FaTrash } from "react-icons/fa";
// import { PatientViewTable } from "../../components/index";
import axios from "axios";

import "../../components/table/table.css";

const AppointmentView = (props) => {
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if(date === '') {
      alert("Vui lòng điền đủ thông tin")
    }
    else {
      axios.post('http://localhost:8800/appointmentview', {date})
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

  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState([]);

  function handleClick(event, ID) {
    event.preventDefault();
    axios
      .post("http://localhost:8800/appointmentviewModal", { ID })
      .then((res, err) => {
        if (err) {
          console.log(err);
          alert("Lỗi");
        } else {
          setInfo(res.data);
        }
      });
  }

  function toggleModal() {
    setModal(!modal);
  }

  const pageTitle = "Danh sách khám bệnh"; // Change this to change page title
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label htmlFor="calender">
              <p>Chọn ngày khám</p>
              <input
                type="date"
                id="calender"
                name="calender"
                style={{ width: "300px" }}
                onChange={(e) => setDate(e.target.value)}
              />
              <button
                className={`${style.button} ${style.yellow}`}
                onClick={handleSubmit}
              >
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
        <div className="page_table">
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
                      <td>{index + 1}</td>
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
                          onClick={(event) => {
                            handleClick(event, user.ID);
                            toggleModal();
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

          {modal && (
            <div className="modal" onClick={toggleModal}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Năm sinh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                  </tr>
                </thead>
                <tbody>
                  {info.map((patient, index) => {
                    return (
                      <tr key={index}>
                        <td>{patient.ID}</td>
                        <td>{patient.name}</td>
                        <td>{patient.year}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.addr}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppointmentView;
