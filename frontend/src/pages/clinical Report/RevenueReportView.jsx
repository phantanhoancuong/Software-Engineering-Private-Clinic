import React from "react";
import "../multi_input_page.css";
import style from "../../components/button/button.module.css";

import { RevenueTable, TotalRevenue } from "../../components/index";

const RevenueReportView = () => {
  const pageTitle = "Báo cáo doanh thu";
  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>Tháng báo cáo</p>
              <input type="month" />
              <button className={`${style.button} ${style.yellow}`}>
                Xem báo cáo
              </button>
            </label>
          </form>
        </div>

        <div className="page_table">
          <RevenueTable date="true" patient_count="true" revenue="true" percentage="true" />
        </div>

        <div className="table-space"></div>

        <div className="page_table">
          <TotalRevenue date="true" patient_count="true" revenue="true" percentage="true" />
        </div>
      </div>

      <div className="selection-confirm">
        <button className={`${style.button} ${style.green}`}>
          Xác nhận
        </button>
      </div>
    </>
  );
};

export default RevenueReportView;
