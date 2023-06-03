import React from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

import { DrugTable, Modal } from "../../components/index";
import ReceiptDetail from "./ReceiptDetail";

// TODO Auto create receipt based on Medical Report
// Consider auto create receipt based on medical report so user don't have to manually add

const ReceiptCreate = () => {
  const pageTitle = "Lập hóa đơn";
  return (
    <div className="page-container">
      <div className="page_form">
        <form>
          <label for="calender">
            <p>Chọn ngày khám</p>
            <input type="date" id="calender" name="calender" />
          </label>

          <label for="userID">
            <p>ID bệnh nhân</p>
            <input type="text" id="userID" name="userID" />
          </label>
        </form>
      </div>

      {/* TODO Fix Table later
                This is just a placeholder table, will fix after backend ready
              */}

      <div className="page_table">
        <p>Danh sách thuốc</p>
        <DrugTable unit="true" dose="true" price="true" />
        <p>Thiếu tổng tiền thuốc (Nhớ thêm vào)</p>
        <Modal label="Receipt Detail" header="This is header" content=<ReceiptDetail /> />
      </div>

      <div className="page_action">
        {/* <Link to="/receiptView">
          <button className={`${style.button} ${style.red}`}>Hủy bỏ</button>
        </Link> */}
        <Link to="/receiptCreate">
          <button className={`${style.button} ${style.green}`}>Xác nhận</button>
        </Link>
      </div>
    </div>
  );
};

export default ReceiptCreate;
