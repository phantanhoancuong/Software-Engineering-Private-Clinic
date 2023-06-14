import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import "../page.css";
// import style from "../../components/button/button.module.css";

import {
  Button,
  DrugTable,
  DrugUnitTable,
  DrugUsageTable,
  Modal,
} from "../../components/index";

import { FaTrash } from "react-icons/fa";

const SettingDrug = () => {

  const pageTitle = "Quy định thuốc";
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);

  return (
    <div className="page-container">
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
        <div className="table-label">
          <p>Bảng đơn vị</p>
          <DrugUnitTable isAdd="true" action="true" />
        </div>
        <div className="table-label">
          <p>Bảng cách dùng</p>
          <DrugUsageTable isAdd="true" action="true" />
        </div>
        
        <div className="table-label">
          <p>Bảng thuốc</p>
          <DrugTable
            unit="true"
            usage="true"
            price="true"
            isAdd="true"
            action="true"
          />
        </div>
      </div>

      <div className="page_action">
        <Link to="/settingDrug">
          <Modal color="green" label="Xác nhận" content="Cập nhập thành công" />
          {/* <button className={`${style.button} ${style.green}`}>Xác nhận</button> */}
        </Link>
      </div>
    </div>
  );
};

export default SettingDrug;
