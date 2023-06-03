import React from "react";
import MOCK_DATA_USER_PATIENT_VIEW from "../../../assets/MOCK_DATA_USER_PATIENT-VIEW.json";

import "../table.css";

function PatientViewTable(props) {
  const UserData = MOCK_DATA_USER_PATIENT_VIEW.map((curUser) => {
    const { id, userID, full_name, date, diagnose, symptom } = curUser;

    return (
      <tr key={id}>
        {props.id && <td>{id}</td>}
        {props.userID && <td>{userID}</td>}
        {props.full_name && <td>{full_name}</td>}
        {props.date && <td>{date}</td>}
        {props.diagnose && <td>{diagnose}</td>}
        {props.symptom && <td>{symptom}</td>}
        {props.action && (
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
            {props.id && <th>STT</th>}
            {props.userID && <th>ID Bệnh nhân</th>}
            {props.full_name && <th>Họ tên</th>}
            {props.date && <th>Ngày khám</th>}
            {props.diagnose && <th>Loại bệnh</th>}
            {props.symptom && <th>Triệu chứng</th>}
            {props.action && <th>Thao tác</th>}
          </tr>
        </thead>
        <tbody>{UserData}</tbody>
      </table>
    </div>
  );
}

export default PatientViewTable;
