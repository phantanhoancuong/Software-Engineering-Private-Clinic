import React from "react";
import { Link } from "react-router-dom";
import "./settingDrug.css";
import style from "../../components/button/button.module.css";

import {
  Button,
  DrugTable,
  DrugUnitTable,
  DrugUsageTable,
  Modal,
} from "../../components/index";

import { FaTrash } from "react-icons/fa";

const SettingDrug = () => {
  // TODO Finish this use case
  const pageTitle = "Quy định chung";
  return (
    <>
      <div className="settingDrug__selection">
        <div className="selection__delete">
          {/* <Modal
            label=<Button
              label="Xóa các lựa chọn"
              icon=<FaTrash />
              color="var(--color-white)"
              bgColor="var(--color-button-red)"
            />
            color="red"
            content="Bạn chắc chắn muốn xóa các lựa chọn này?"
          /> */}
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
        <div className="settingDrug-table_section">
          <p>Bảng đơn vị</p>
          <DrugUnitTable isAdd="true" action="true" />
        </div>
        <div className="settingDrug-table_section">
          <p>Bảng cách dùng</p>
          <DrugUsageTable isAdd="true" action="true" />
        </div>
        <div className="settingDrug-table_section">
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
