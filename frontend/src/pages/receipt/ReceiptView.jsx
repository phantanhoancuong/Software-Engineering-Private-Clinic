import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";
import axios from "axios";

import { Button, UserTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

import "../../components/table/table.css";

const ReceiptView = () => {
  const [date, setDate] = useState('')
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8800/receiptview', {date})
    .then((res, err) => {
      if(res.data === 'fail') {
        alert('Không có dữ liệu')
      }
      else {
        setData(res.data)
      }
    })
  }

  // const pageTitle = "Danh sách hóa đơn";
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label for="calender">
              <p>Chọn ngày khám</p>
              <input type="date" id="calender" name="calender" 
              onChange={e => setDate(e.target.value)}
              />
            </label>

            {/* <label for="userID">
              <p>ID bệnh nhân</p>
              <input type="text" id="userID" name="userID" />
            </label> */}
          </form>
        </div>

        <div className="page_action action-delete" onClick={handleSubmit}>
          <Button
            label="Xem hóa đơn"
            icon=<FaTrash />
            color="var(--color-white)"
            bgColor="var(--color-button-yellow)"
          />
          
          {/* <Button
            label="Xóa các lựa chọn"
            icon=<FaTrash />
            color="var(--color-white)"
            bgColor="var(--color-button-red)"
          /> */}
        </div>

        {/* TODO Fix Table later
                      This is just a placeholder table, will fix after backend ready
                    */}
        <div className="page_table">
        <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Họ tên</th>
                <th>Ngày khám</th>
                <th>Tiền khám</th>
                <th>Tiền thuốc</th>
                <th>Tổng tiền</th>
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
                        <td>{user.medical_fee}</td>
                        <td>{user.drug_fee}</td>
                        <td>{user.sum}</td>
                      </tr>
                    );
              })}
            </tbody>
          </table>
        </div>
        {/* <div className="page_action">
          <button className={`${style.button} ${style.yellow}`}>
            Xem hóa đơn
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ReceiptView;
