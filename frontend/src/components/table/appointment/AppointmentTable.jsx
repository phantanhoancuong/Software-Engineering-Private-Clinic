import React from "react";
import MOCK_DATA_APPOINTMENT from "../../../assets/MOCK_DATA_APPOINTMENT.json";

import "../table.css";

// Reference:
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/
// https://github.com/thapatechnical/react_table/blob/master/src/App.jsx

// MOCK_DATA from:
// https://www.mockaroo.com/

// TODO Fix Table later to pull from database
// This is just a mockup, need change to pull from database when backend is ready

function ApppointmentTable(props) {
  const AppointmentData = MOCK_DATA_APPOINTMENT.map((curDrug) => {
    const { id, userID, full_name, gender, date, time, symptom } = curDrug;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{userID}</td>
        <td>{full_name}</td>
        {props.gender != undefined && <td>{gender}</td>}
        {props.date != undefined && <td>{date}</td>}
        {props.time != undefined && <td>{time}</td>}
        {props.symptom != undefined && <td>{symptom}</td>}
      </tr>
    );
  });

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID bệnh nhân</th>
            <th>Họ tên</th>
            {props.gender != undefined && <th>Giới tính</th>}
            {props.date != undefined && <th>Ngày khám</th>}
            {props.time != undefined && <th>Giờ khám</th>}
            {props.symptom != undefined && <th>Triệu chứng</th>}
          </tr>
        </thead>
        <tbody>{AppointmentData}</tbody>
      </table>
    </div>
  );
}

export default ApppointmentTable;
