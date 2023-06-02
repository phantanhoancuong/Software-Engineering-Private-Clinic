import React from "react";
import { Link } from "react-router-dom";
import "./settingGeneral.css";
// import style from "../../components/button/button.module.css";

import { Button, DiagnoseTable, Modal } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const SettingGeneral = () => {
  // const pageTitle = "Quy định chung";
  return (
    <>
      <div className="settingGeneral__selection">
        <div className="settingGeneral__selection-form">
          <form>
            <label for="patient-max">
              <p>Số bệnh nhân mỗi ngày</p>
              <input type="number" id="patient-max" name="patient-max" />
            </label>

            <label for="appointment-fee">
              <p>Tiền khám</p>
              <input
                type="number"
                id="appointment-fee"
                name="appointment-fee"
              />
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

      <div className="settingGeneral-table">
        <DiagnoseTable isAdd="true" />
      </div>

      <div className="selection-confirm">
        <Link to="/settingGeneral">
          <Modal color="green" label="Xác nhận" content="Cập nhập thành công" />
          {/* <button className={`${style.button} ${style.green}`}>Xác nhận</button> */}
        </Link>
      </div>
    </>
  );
};

export default SettingGeneral;
