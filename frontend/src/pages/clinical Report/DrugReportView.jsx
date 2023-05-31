import React from "react";
import "./drugReportView.css";

import { Button, DrugUseTable, TotalDrugUse } from "../../components/index";

const DrugReportView = () => {
  const pageTitle = "Báo cáo sử dụng thuốc";
  return (
    <>
      <div className="receiptView__selection">
        <div className="receiptView__selection-date">
          <form>
            <label for="calender">
              <p>Tháng báo cáo</p>
              <input type="month" id="calender" name="calender" />
            </label>
          </form>
        </div>
      </div>

      <div className="receipt-table">
        <DrugUseTable unit="true" quantity="true" use_time="true" />
      </div>

      <div className="receipt-table">
        <TotalDrugUse drug_name="true" unit="true" quantity="true" use_time="true" />
      </div>

      <Button
        label="Lập báo cáo"
        color="var(--color-whiteText)"
        bgColor="var(--color-button-yellow)"
      />
    </>
  );
};

export default DrugReportView;
