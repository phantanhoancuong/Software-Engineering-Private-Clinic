import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";
import { FaTrash } from "react-icons/fa";
import { UserTable } from "../../components/index";

import axios from 'axios'

const PatientView = () => {
  const [data, setData] = useState([])

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8800/patientview', {})
    .then((res, err) => {
      if(res.data === "Lỗi") {
        alert(res.data)
      }
      else {
        setData(res.data)
      }
    })
  }

  const pageTitle = "Danh sách bệnh nhân"; // Change this to change page title
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
              <button className={`${style.button} ${style.yellow}`} onClick={handleSubmit}>
                Xem danh sách bệnh nhân
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
                <th>Giới tính</th>
                <th>Ngày sinh</th>
                <th>Địa chỉ</th>
              </tr>
            </thead>
            <tbody>
            {data.map((user, index) => {
                return (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.ID}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.dob}</td>
                        <td>{user.addr}</td>
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

export default PatientView;
