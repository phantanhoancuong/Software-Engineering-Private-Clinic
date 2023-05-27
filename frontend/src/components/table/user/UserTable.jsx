import React from "react";
import MOCK_DATA_USER from "../../../assets/MOCK_DATA_USER.json";

import "./userTable.css";

// Reference:
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
// https://github.com/thapatechnical/react_table/blob/master/src/App.jsx

// MOCK_DATA from:
// https://www.mockaroo.com/

// TODO
// This is just a mockup, need change to pull from database when backend is ready

function userTable() {
  const UserData = MOCK_DATA_USER.map((curUser) => {
    const { id, userID, full_name, gender, DoB, email, address } = curUser;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{userID}</td>
        <td>{full_name}</td>
        <td>{gender}</td>
        <td>{DoB.slice(-4)}</td>
        <td>{address}</td>
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
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID Bệnh nhân</th>
            <th>Họ tên</th>
            <th>Giới tính</th>
            <th>Năm sinh</th>
            <th>Địa chỉ</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>{UserData}</tbody>
      </table>
    </div>
  );
}

export default userTable;