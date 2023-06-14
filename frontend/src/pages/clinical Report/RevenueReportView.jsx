import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../page.css";
import style from "../../components/button/button.module.css";

import { RevenueTable, TotalRevenue } from "../../components/index";

import axios from 'axios'

const RevenueReportView = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if(month === "" || year === "") {
      alert("Vui lòng điền đủ thông tin")
    }
    else {
      axios.post('http://localhost:8800/revenuereport', {month, year})
      .then((res) => {
        if(res.data === 'no_data') {
          alert("Tháng chưa có dữ liệu!")
        }
        else {
          setData(res.data)
        }
      })
      .catch((err) => console.log(err))
    }
  }
  
  const pageTitle = "Báo cáo doanh thu";
  const [handleCallback] = useOutletContext();
  useEffect(() => {
    handleCallback(pageTitle);
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>Tháng báo cáo</p>
              <input type="text" onChange={e => setMonth(e.target.value)}/>
            </label>
            <label>
              <p>Năm báo cáo</p>
              <input type="text" onChange={e => setYear(e.target.value)}/>
            </label>
            <label>
              <button className={`${style.button} ${style.yellow}`} onClick={handleSubmit}>
                Xem báo cáo
              </button>
            </label>
          </form>
        </div>

        <div className="page_table">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Ngày</th>
                <th>Số bệnh nhân</th>
                <th>Doanh thu</th>
                <th>Tỷ lệ</th>
              </tr>
            </thead>
            <tbody>
            {data.map((user, index) => {
                return (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.date}</td>
                        <td>{user.count}</td>
                        <td>{user.sum}</td>
                      </tr>
                    );
              })}
            </tbody>
          </table>
        </div>

        {/* <div className="table-space"></div>

        <div className="page_table">
          <TotalRevenue date="true" patient_count="true" revenue="true" percentage="true" />
        </div> */}
      </div>

      {/* <div className="selection-confirm">
        <button className={`${style.button} ${style.green}`}>
          Xác nhận
        </button>
      </div> */}
    </>
  );
};

export default RevenueReportView;
