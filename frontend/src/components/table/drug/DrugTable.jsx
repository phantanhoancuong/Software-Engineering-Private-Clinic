import React from "react";
import MOCK_DATA_DRUG from "../../../assets/MOCK_DATA_DRUG.json";

import "./drugTable.css";
import { FaPlus } from "react-icons/fa";

// Reference:
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
// https://github.com/thapatechnical/react_table/blob/master/src/App.jsx

// MOCK_DATA from:
// https://www.mockaroo.com/

// TODO
// This is just a mockup, need change to pull from database when backend is ready

function TableContent() {
  const DrugData = MOCK_DATA_DRUG.map((curDrug) => {
    const { id, drugID, drug_name, unit, price, usage, dose } = curDrug;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{drugID}</td>
        <td>{drug_name}</td>
        <td>{unit}</td>
        <td>{price}</td>
        <td>{usage}</td>
        <td>{dose}</td>
        <td>
          <button
            style={{
              all: "unset",
              fontSize: "1rem",
              fontWeight: "500",
              color: "var(--color-whiteText)",
              backgroundColor: "var(--color-button-yellow)",
              padding: "0.5rem",
              borderRadius: "0.5rem",
            }}
          >
            Chi tiết
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>ID Thuốc</th>
          <th>Tên thuốc</th>
          <th>Đơn vị</th>
          <th>Giá tiền</th>
          <th>Cách dùng</th>
          <th>Số lượng</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>{DrugData}</tbody>
    </table>
  );
}

function DrugTable(props) {
  if (props.isAdd == undefined) {
    // If no isAdd is passed to props -> No add option
    return (
      <div className="tableContainer">
        {TableContent()}
      </div>
    );
  } else {
    // If isAdd is passed to props -> Add option available
    return (
      <div className="tableContainer">
        {TableContent()}
        <button className="table-add">
          <FaPlus />
        </button>
      </div>
    );
  }
}

export default DrugTable;
