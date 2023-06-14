import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import "../page.css";
// import style from "../../components/button/button.module.css";

import { Button, DiagnoseTable, Modal } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const SettingGeneral = () => {
  
  const pageTitle = "Quy định chung";
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);

  return (
    <div className="page-container">
      <div className="page_form">
        <form>
          <label for="patient-max">
            <p>Số bệnh nhân mỗi ngày</p>
            <input type="number" id="patient-max" name="patient-max" />
          </label>

          <label for="appointment-fee">
            <p>Tiền khám</p>
            <input type="number" id="appointment-fee" name="appointment-fee" />
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
        <DiagnoseTable isAdd="true" />
      </div>

      <div className="page_action">
        <Link to="/settingGeneral">
          <Modal color="green" label="Xác nhận" content="Cập nhập thành công" />
          {/* <button className={`${style.button} ${style.green}`}>Xác nhận</button> */}
        </Link>
      </div>
    </div>
  );
};

export default SettingGeneral;
