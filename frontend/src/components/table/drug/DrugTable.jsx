import React from "react";
import MOCK_DATA_DRUG from "../../../assets/MOCK_DATA_DRUG.json";

import "../table.css";
import { FaPlus } from "react-icons/fa";

// Reference:
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
// https://github.com/thapatechnical/react_table/blob/master/src/App.jsx

// MOCK_DATA from:
// https://www.mockaroo.com/

// TODO
// This is just a mockup, need change to pull from database when backend is ready

function DrugTable(props) {
  const DrugData = MOCK_DATA_DRUG.map((curDrug) => {
    const { id, drugID, drug_name, unit, price, usage, dose } = curDrug;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{drugID}</td>
        <td>{drug_name}</td>
        {props.dose != undefined && <td>{dose}</td>}
        {props.unit != undefined && <td>{unit}</td>}
        {props.usage != undefined && <td>{usage}</td>}
        {props.price != undefined && <td>{price}</td>}
        {props.action != undefined && (
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
        )}
      </tr>
    );
  });

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID Thuốc</th>
            <th>Tên thuốc</th>
            {props.dose != undefined && <th>Số lượng</th>}
            {props.unit != undefined && <th>Đơn vị</th>}
            {props.usage != undefined && <th>Cách dùng</th>}
            {props.price != undefined && <th>Giá tiền</th>}
            {props.action != undefined && <th>Thao tác</th>}
          </tr>
        </thead>
        <tbody>{DrugData}</tbody>
      </table>
      {/* If isAdd is passed to props -> Add option available  */}
      {props.isAdd != undefined && (
        <button className="table-add">
          <FaPlus />
        </button>
      )}
      {/* TODO Add sum value of column */}
    </div>
  );
}

export default DrugTable;
