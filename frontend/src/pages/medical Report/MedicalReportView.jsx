import React from "react";
import { Link } from "react-router-dom";
import "./medicalReportView.css";
import style from "../../components/button/button.module.css";

import { Button, UserTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const MedicalReportView = () => {
  const pageTitle = "Danh sách phiếu khám bệnh";
  return (
    <>
      <div className="medicalReportView__selection">
        <div className="medicalReportView__selection-date">
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

      {/* TODO Fix Table later
                This is just a placeholder table, will fix after backend ready
            */}

      <div className="medicalReport-table">
        <UserTable gender="true" DoB="true" />
      </div>

      <Link to="/medicalReportCreate">
        <button className={`${style.button} ${style.yellow}`}>
          Lập phiếu khám
        </button>
      </Link>
    </>
  );
};

export default MedicalReportView;
