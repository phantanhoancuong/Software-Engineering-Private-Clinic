import React from "react";
import { Link } from "react-router-dom";
import "./appointmentCreate.css";

import { HeaderUser } from "../index";
import { Navbar, Button } from "../../components/index";

const AppointmentCreate = () => {
  const pageTitle = "Đặt lịch khám";
  return (
    <>
      <HeaderUser title={pageTitle} />
      <div className="menu">
        <Navbar />

        <div className="appointmentCreate">
          <p>{pageTitle}</p>

          <div className="appointmentCreate__selection">
            <form>
              <label for="calender">
                <p>Ngày khám</p>
                <input type="date" id="calender" name="calender" />
              </label>

              <label for="time">
                <p>Giờ khám</p>
                <input type="time" id="time" name="time" />
              </label>

              <label for="userID">
                <p>ID bệnh nhân</p>
                <input type="text" id="userID" name="userID" />
              </label>

              <label for="description">
                <p>Mô tả triệu chứng</p>
                <textarea type="text" id="description" name="description" rows={4}/>
              </label>
            </form>
          </div>

          <Link to="/appointmentView">
            <Button
              label="Xác nhận"
              color="var(--color-whiteText)"
              bgColor="var(--color-button-green)"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppointmentCreate;
