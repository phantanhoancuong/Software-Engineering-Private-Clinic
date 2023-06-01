import React from "react";
import { Link } from "react-router-dom";
import "./patientView.css";
import style from "../../components/button/button.module.css";

import { Button, PatientViewTable } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const ReceiptView = () => {
  const pageTitle = "Danh sách bệnh nhân";
  return (
    <>
      <div className="patientView__selection">
        <div className="patientView__selection-date">
          <form>
            {/* <label for="calender">
              <p>Chọn ngày khám</p>
              <input type="date" id="calender" name="calender" />
            </label> */}

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

      <div className="patient-table">
        <PatientViewTable />
      </div>

      {/* <Link to="/patientCreate">
        <button className={`${style.button} ${style.yellow}`}>
          Thêm bệnh nhân
        </button>
      </Link> */}
    </>
  );
};

export default ReceiptView;
