import React from "react";
import "./revenueReportView.css";

import { Button, RevenueTable, TotalRevenue } from "../../components/index";

const RevenueReportView = () => {
  const pageTitle = "Báo cáo doanh thu";
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
        <RevenueTable date="true" patient_count="true" revenue="true" percentage="true" />
      </div>

      <div className="receipt-table">
        <TotalRevenue date="true" patient_count="true" revenue="true" percentage="true" />
      </div>

      <Button
        label="Lập báo cáo"
        color="var(--color-whiteText)"
        bgColor="var(--color-button-yellow)"
      />
    </>
  );
};

export default RevenueReportView;
