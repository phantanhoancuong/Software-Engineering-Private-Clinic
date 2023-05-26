import React from "react";
import {Link} from "react-router-dom";
import "./appointmentView.css";

import { HeaderUser } from "../index";
import { Navbar, Button } from "../../components/index";
import Table  from "./table/Table";

import { FaTrash } from "react-icons/fa";

const AppointmentView = () => {
  return (
    <>
      <HeaderUser title="Xem danh sách khám bệnh" />
      <div className="menu">
        <Navbar />

        <div className="appointmentView">
          <p>Danh sách khám bệnh</p>

          <div className="appointmentView__selection">
            {/* <div className="appointmentView__selection-date"> */}
            <form>
              <label for="calender">
                Chọn ngày khám
                <input type="date" id="calender" name="calender" />
              </label>
            </form>
            {/* </div> */}

            <div className="selection__delete">
              <Button
                label="Xóa các lựa chọn"
                icon=<FaTrash />
                color="var(--color-white)"
                bgColor="var(--color-button-red)"
              />
            </div>
          </div>

          <div className="appointment-table">
            <Table />
          </div>

          <Link to="/appointmentCreate">
            <Button
              label="Đặt lịch khám"
              color="var(--color-whiteText)"
              bgColor="var(--color-button-yellow)"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppointmentView;
