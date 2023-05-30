import React from 'react';
import { Link } from "react-router-dom";
import "./receiptView.css";

import { HeaderUser } from "../index";
import { Navbar, Button , UserTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const ReceiptView = () => {
  const pageTitle = "Danh sách hóa đơn";
  return (
    <>
      <HeaderUser title={pageTitle} />
      <div className="menu">
        <Navbar />

        <div className="receiptView">
          <p>{pageTitle}</p>

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
            <UserTable gender="true" date="true"/>
          </div>

          <Link to="/receiptCreate">
            <Button
              label="Lập phiếu khám"
              color="var(--color-whiteText)"
              bgColor="var(--color-button-yellow)"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ReceiptView;