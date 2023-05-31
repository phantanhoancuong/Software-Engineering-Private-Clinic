import React from "react";
import { Link } from "react-router-dom";
import "./settingGeneral.css";

import { Navbar, Button, DrugTable, HeaderUser } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const SettingGeneral = () => {
  // TODO
  // Finish this use case
  const pageTitle = "Quy định chung";
  return (
    <>
      <div className="medicalReportCreate__selection">
        <div className="medicalReportCreate__selection-form">
          <form>
            <label for="calender">
              <p>Chọn ngày khám</p>
              <input type="date" id="calender" name="calender" />
            </label>

            <label for="userID">
              <p>ID bệnh nhân</p>
              <input type="text" id="userID" name="userID" />
            </label>

            <label for="symptom">
              <p>Triệu chứng</p>
              <input type="text" id="symptom" name="symptom" />
            </label>

            <label for="diagnose">
              <p>Bệnh</p>
              <input type="text" id="diagnose" name="diagnose" />
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

      <div className="medicalReport-table">
        <DrugTable />
      </div>

      <div className="selection-confirm">
        <Link to="/medicalReportView">
          <Button
            label="Hủy bỏ"
            color="var(--color-whiteText)"
            bgColor="var(--color-button-red)"
          />
        </Link>

        <Link to="/medicalReportCreate">
          <Button
            label="Xác nhận"
            color="var(--color-whiteText)"
            bgColor="var(--color-button-green)"
          />
        </Link>
      </div>
    </>
  );
};

export default SettingGeneral;
