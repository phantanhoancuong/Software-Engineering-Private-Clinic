import React from "react";
import { Link } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

import { Button, UserTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const ReceiptView = () => {
  // const pageTitle = "Danh sách hóa đơn";
  return (
    <>
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

        <div className="page_action action-delete" onClick={() => alert("Delete")}>
          <Button
            label="Xóa các lựa chọn"
            icon=<FaTrash />
            color="var(--color-white)"
            bgColor="var(--color-button-red)"
          />
        </div>

        {/* TODO Fix Table later
                      This is just a placeholder table, will fix after backend ready
                    */}
        <div className="page_table">
          <UserTable gender="true" date="true" />
        </div>
        <div className="page_action">
          <Link to="/receiptCreate">
            <button className={`${style.button} ${style.yellow}`}>
              Lập hóa đơn
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReceiptView;
