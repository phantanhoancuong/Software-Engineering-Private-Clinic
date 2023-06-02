import React from "react";
import MOCK_DATA_REVENUE from "../../../assets/MOCK_DATA_REVENUE.json";

import "../table.css";
import { FaPlus } from "react-icons/fa";


// Reference:
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
// https://github.com/thapatechnical/react_table/blob/master/src/App.jsx

// MOCK_DATA from:
// https://www.mockaroo.com/

// TODO Fix Table later to pull from database
// This is just a mockup, need change to pull from database when backend is ready

function RevenueTable(props) {
  const RevenueData = MOCK_DATA_REVENUE.map((curRevenue) => {
    const { id, date, patient_count, revenue, percentage } = curRevenue;

    return (
      <tr key={id}>
        <td>{id}</td>
        {props.date != undefined && <td>{date}</td>}
        {props.patient_count != undefined && <td>{patient_count}</td>}
        {props.revenue != undefined && <td>{revenue}</td>}
        {props.percentage != undefined && <td>{percentage}</td>}
      </tr>
    );
  });

  return (
    <div className="tableContainer">
      <table>
      <thead>
        <tr>
          <th>STT</th>
          {props.date != undefined && <th>Ngày</th>}
          {props.patient_count != undefined && <th>Số bệnh nhân</th>}
          {props.revenue != undefined && <th>Doanh thu</th>}
          {props.percentage != undefined && <th>Tỷ lệ</th>}
        </tr>
      </thead>
      <tbody>{RevenueData}</tbody>
    </table>
    </div>
  );
}

export default RevenueTable;
