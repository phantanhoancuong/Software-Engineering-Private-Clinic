import React from 'react';
import {Link} from "react-router-dom";
import "./medicalReportView.css";

import { HeaderUser } from "../index";
import { Navbar, Button } from "../../components/index";
import Table from '../appointment/table/Table';

import { FaTrash } from "react-icons/fa";

const MedicalReportView = () => {
    const pageTitle = "Danh sách phiếu khám bệnh";
    return (
      <>
        <HeaderUser title={pageTitle} />
        <div className="menu">
          <Navbar />
  
          <div className="medicalReportView">
            <p>{pageTitle}</p>
  
            <div className="medicalReportView__selection">
              <div className="medicalReportView__selection-date">
              <form>
                <label for="calender">
                  <p>Chọn ngày khám</p>
                  <input type="date" id="calender" name="calender" />
                </label>

                <label for="userID">
                  <p>ID bệnh nhân</p>
                  <input type="text" id="userID" name="userID" />
                </label>
              </form>
              </div>
  
              <div className="selection__delete">
                <Button
                  label="Xóa các lựa chọn"
                  icon=<FaTrash />
                  color="var(--color-white)"
                  bgColor="var(--color-button-red)"
                />
              </div>
            </div>

            {/* TODO
                This is just a placeholder table, will fix after backend ready
            */}
            
            <div className="medicalReport-table">
              <Table />
            </div>
  
            <Link to="/medicalReportCreate">
              <Button
                label="Lập phiếu khám"
                color="var(--color-whiteText)"
                bgColor="var(--color-button-yellow)"
              />
            </Link>
          </div>
        </div>
      </>
    );
}

export default MedicalReportView