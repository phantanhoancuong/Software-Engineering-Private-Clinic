import React from "react";
import { Link } from "react-router-dom";
import "./receiptView.css";
import style from "../../components/button/button.module.css";

import { Button, UserTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const ReceiptView = () => {
  const pageTitle = "Danh sách hóa đơn";
  return (
    <>
      <div className="receiptView__selection">
        <div className="receiptView__selection-date">
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

        <div className="selection__delete">
          <Button
            label="Xóa các lựa chọn"
            icon=<FaTrash />
            color="var(--color-white)"
            bgColor="var(--color-button-red)"
          />
        </div>
      </div>

      {/* TODO
                This is just a placeholder table, will fix after backend ready
            */}

      <div className="receipt-table">
        <UserTable gender="true" date="true" />
      </div>

      <Link to="/receiptCreate">
        <button className={`${style.button} ${style.yellow}`}>
          Lập hóa đơn
        </button>
      </Link>
    </>
  );
};

export default ReceiptView;
