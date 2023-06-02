import React from "react";
import "./receiptDetail.css";

import { DrugTable } from "../../components/index";

const ReceiptDetail = () => {
  const pageTitle = "Chi tiết hóa đơn";
  return (
    <>
      <div className="receiptDetail__selection">
        <div className="receiptDetail__selection-form">
          <form>
            <label for="userID">
              <p>ID bệnh nhân</p>
              <input type="text" id="userID" name="userID" />
            </label>

            <label for="full-name">
              <p>Họ tên</p>
              <input type="text" id="full-name" name="full-name" />
            </label>

            <label for="calender">
              <p>Ngày khám</p>
              <input type="date" id="calender" name="calender" />
            </label>
          </form>
        </div>
      </div>

      {/* TODO Fix Table later
                This is just a placeholder table, will fix after backend ready
              */}

      <div className="receipt-table">
        <p>Danh sách thuốc</p>
        <DrugTable unit="true" dose="true" price="true" />
        <p>Thiếu tổng tiền thuốc (Nhớ thêm vào)</p>
      </div>

      <div className="receiptDetail__bill">
        <div className="receiptDetail__bill-form">
          <form>
            <label for="drug-bill">
              <p>Tiền khám</p>
              <input type="text" id="drug-bill" name="drug-bill" />
            </label>

            <div className="divider" />

            <label for="total-bill">
              <p>Tổng hóa đơn</p>
              <input type="text" id="total-bill" name="total-bill" />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReceiptDetail;
