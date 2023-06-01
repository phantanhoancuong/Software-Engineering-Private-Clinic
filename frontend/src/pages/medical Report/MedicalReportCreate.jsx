import React from "react";
import { Link } from "react-router-dom";
import "./medicalReportCreate.css";
import style from "../../components/button/button.module.css";

import { Button, DrugTable} from "../../components/index";

import { FaTrash } from "react-icons/fa";

const MedicalReportCreate = () => {
  const pageTitle = "Lập phiếu khám bệnh";
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
          
          {/* TODO Add option to create receipt along with View*/}

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
          <DrugTable isAdd="true" unit="true" dose="true" usage="true" />
        </div>

        <div className="selection-confirm">
          <div>
            <Link to="/medicalReportView">
              <button className={`${style.button} ${style.red}`}>Hủy bỏ</button>
            </Link>
          </div>
          <div>
            <Link to="/medicalReportCreate">
              <button className={`${style.button} ${style.green}`}>
                Xác nhận
              </button>
            </Link>
          </div>
        </div>
    </>
  );
};

export default MedicalReportCreate;
