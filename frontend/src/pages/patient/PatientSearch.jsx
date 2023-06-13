import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";
import { FaTrash } from "react-icons/fa";
import { UserTable } from "../../components/index";

const patientView = () => {
  const [id, setID] = useState('')
  const [data, setData] = useState([])

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8800/patientsearch', {date})
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
              <input type="text" style={{ width: "300px" }} />
            </label>
            {/* <label>
              <p>Chọn ngày khám</p>
              <input type="text" style={{ width: "300px" }} />
            </label> */}
            <label>
              <button className={`${style.button} ${style.yellow}`}>
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
          <UserTable
            id="true"
            userID="true"
            full_name="true"
            gender="true"
            DoB="true"
            address="true"
            action="true"
          />
        </div>
      </div>
    </>
  );
};

export default patientView;
