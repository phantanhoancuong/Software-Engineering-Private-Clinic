import React from "react";
import MOCK_DATA_DRUG_TOTAL from "../../../assets/MOCK_DATA_DRUG_TOTAL.json";

import "../table.css";

// Reference:
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
// https://github.com/thapatechnical/react_table/blob/master/src/App.jsx

// MOCK_DATA from:
// https://www.mockaroo.com/

// TODO
// This is just a mockup, need change to pull from database when backend is ready

function TotalDrugUse(props) {
  const TotalDrug = MOCK_DATA_DRUG_TOTAL.map((curDrug) => {
    const { id, drugID, drug_name, unit, price, usage, dose, quantity, use_time } = curDrug;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{drugID}</td>
        <td>{drug_name}</td>
        {props.dose != undefined && <td>{dose}</td>}
        {props.unit != undefined && <td>{unit}</td>}
        {props.price != undefined && <td>{price}</td>}
        {props.usage != undefined && <td>{usage}</td>}
        {props.quantity != undefined && <td>{quantity}</td>}
        {props.use_time != undefined && <td>{use_time}</td>}
      </tr>
    );
  });

  return (
    <div className="tableContainer">
      <table>
      <thead>
        <tr>
          <th>Tổng</th>
          <th>ID Thuốc</th>
          <th>Tên thuốc</th>
          {props.dose != undefined && <th>Số lượng</th>}
          {props.unit != undefined && <th>Đơn vị</th>}
          {props.price != undefined && <th>Đơn giá</th>}
          {props.usage != undefined && <th>Cách dùng</th>}
          {props.quantity != undefined && <th>Số lượng</th>}
          {props.use_time != undefined && <th>Số lần dùng</th>}
        </tr>
      </thead>
      <tbody>{TotalDrug}</tbody>
    </table>
    </div>
  );
}

export default TotalDrugUse;
