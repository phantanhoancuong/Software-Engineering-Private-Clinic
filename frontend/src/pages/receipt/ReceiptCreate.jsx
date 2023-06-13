import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

import { DrugTable, Modal } from "../../components/index";
import ReceiptDetail from "./ReceiptDetail";

import axios from 'axios'

// TODO Auto create receipt based on Medical Report
// Consider auto create receipt based on medical report so user don't have to manually add

const ReceiptCreate = () => {
  const pageTitle = "Lập hóa đơn";

  const [date, setDate] = useState('')
  const [id, setID] = useState('')
  const [drug, setDrug] = useState('')

  var fee = useState('')

  if (document.querySelector('#fee') != null) {
   fee = document.querySelector('#fee').value;
  }

  function handleSubmit (event) {
    event.preventDefault();
    if (date === "" || id === "" || drug === "") {
      alert("Vui lòng điền đủ thông tin")
    }
    else {
      axios.post('http://localhost:8800/receiptcreate', { date, id, fee, drug })
      .then((res, err) => {
        if(res.data === "success") {
          alert("Hóa đơn tạo thành công")
        }
        else {
          alert(res.data)
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <div className="page-container">
      <div className="page_form">
        <form>
          <label for="calender">
            <p>Chọn ngày khám</p>
            <input type="date" id="calender" name="calender" 
            onChange={e => setDate(e.target.value)}
            />
          </label>

          <label for="userID">
            <p>ID bệnh nhân</p>
            <input type="text" id="userID" name="userID" 
            onChange={e => setID(e.target.value)}
            />
          </label>

          <label for="fee">
            <p>Tiền khám</p>
            <select id="fee">
              <option value="30000">30.000</option>
            </select>
          </label>
          
          <label for="drug">
            <p>Tiền thuốc</p>
            <input type="text" id="drug" name="drug" 
            onChange={e => setDrug(e.target.value)}
            />
          </label>

        </form>
      </div>

      {/* TODO Fix Table later
                This is just a placeholder table, will fix after backend ready
              */}

      <div className="page_table">
        {/* <p>Danh sách thuốc</p>
        <DrugTable unit="true" dose="true" price="true" />
        <p>Thiếu tổng tiền thuốc (Nhớ thêm vào)</p> */}
        <Modal label="Receipt Detail" header="This is header" content=<DrugTable/> />
      </div>

      <div className="page_action">
        {/* <Link to="/receiptView">
          <button className={`${style.button} ${style.red}`}>Hủy bỏ</button>
        </Link> */}
        <Link to="/receiptCreate">
          <button className={`${style.button} ${style.green}`} onClick={handleSubmit}>Xác nhận</button>
        </Link>
      </div>
    </div>
  );
};

export default ReceiptCreate;
