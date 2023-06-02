import React from "react";
import MOCK_DATA_DIAGNOSE from "../../../assets/MOCK_DATA_DIAGNOSE.json";

import "../table.css";
import { FaPlus } from "react-icons/fa";

// Reference:
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
// https://github.com/thapatechnical/react_table/blob/master/src/App.jsx

// MOCK_DATA from:
// https://www.mockaroo.com/

// TODO Fix Table later to pull from database
// This is just a mockup, need change to pull from database when backend is ready

function DiagnoseTable(props) {
  const DiagnoseData = MOCK_DATA_DIAGNOSE.map((curDiagnose) => {
    const { id, name } = curDiagnose;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
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
            <th>Tên bệnh</th>
            {props.action != undefined && <th>Thao tác</th>}
          </tr>
        </thead>
        <tbody>{DiagnoseData}</tbody>
      </table>
      {/* If isAdd is passed to props -> Add option available  */}
      {props.isAdd != undefined && (
        <button className="table-add">
          <FaPlus />
        </button>
      )}
    </div>
  );
}

export default DiagnoseTable;
