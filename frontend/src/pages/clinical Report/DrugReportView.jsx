import React from "react";
import "../multi_input_page.css";
import style from "../../components/button/button.module.css";

import { Button, DrugUseTable, TotalDrugUse } from "../../components/index";

const DrugReportView = () => {
  const pageTitle = "Báo cáo sử dụng thuốc";
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>Tháng báo cáo</p>
              <input type="month"/>
              <button className={`${style.button} ${style.yellow}`}>
                Xem báo cáo
              </button>
            </label>
          </form>
        </div>
      </div>

      <div className="page-table">
        <DrugUseTable unit="true" quantity="true" use_time="true" />
      </div>

      <div className="table-space"></div>

      <div className="page-table">
        <TotalDrugUse drug_name="true" unit="true" quantity="true" use_time="true" />
      </div>

      <div className="selection-confirm">
        <button className={`${style.button} ${style.green}`}>
          Xác nhận
        </button>
      </div>
    </>
  );
};

export default DrugReportView;

