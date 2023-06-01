import React from "react";
import { Link } from "react-router-dom";
import "./settingDrug.css";
import style from "../../components/button/button.module.css";

import {
  Button,
  DrugTable,
  DrugUnitTable,
  DrugUsageTable,
  Modal
} from "../../components/index";

import { FaTrash } from "react-icons/fa";

const SettingDrug = () => {
  // TODO Finish this use case
  const pageTitle = "Quy định chung";
  return (
    <>
      <div className="settingDrug__selection">
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

      <div className="settingDrug-table">
        <DrugUnitTable isAdd="true" />
        <DrugUsageTable isAdd="true" />
        <DrugTable unit="true" usage="true" price="true" isAdd="true" />
      </div>

      <div className="selection-confirm">
        <Link to="/settingDrug">
          <Modal color="green" label="Xác nhận" content="Cập nhập thành công" />
          {/* <button className={`${style.button} ${style.green}`}>Xác nhận</button> */}
        </Link>
      </div>
    </>
  );
};

export default SettingDrug;
