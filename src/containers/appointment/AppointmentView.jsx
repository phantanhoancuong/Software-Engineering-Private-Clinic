import React from "react";
import "./appointmentView.css";

import { HeaderUser } from "../index";
import { Navbar, Button } from "../../components/index";

import { FaTrash } from "react-icons/fa";

const AppointmentView = () => {
  return (
    <>
      <HeaderUser title="Xem danh sách khám bệnh" />
      <div className="menu">
        <Navbar />

        <div className="appointmentView">
          <h2>Danh sách khám bệnh</h2>

          <div className="appointmentView__selection">
            <div className="appointmentView__selection-date">
              <p>Chọn ngày khám</p>
              <div className="dropdown">
                <button className="dropdown-button">DD/MM/YYYY</button>
                <div className="dropdown-content">
                  <p>Đây chỉ là placeholder, sau sẽ thay bằng lịch</p>
                  <p>08/05/2023</p>
                  <p>10/05/2023</p>
                  <p>12/05/2023</p>
                </div>
              </div>
            </div>

            <button className="selection__delete">
              <Button
                label="Xóa các lựa chọn"
                icon=<FaTrash />
                color="var(--color-white)"
                bgColor="var(--color-button-red)"
              />
            </button>
          </div>

          <div className="appointment-table">
            <p>Appointment Table here</p>
          </div>
          {/* 
          <button className="selection__appointmentCreate">
            <a href="/">Đặt lịch khám</a>
          </button>
           */}

          <a href="/">
            <Button
              label="Đặt lịch khám"
              color="var(--color-white)"
              bgColor="var(--color-button-yellow)"
            />
          </a>

          <a href="/">
            <Button
              label="Xác nhận"
              color="var(--color-whiteText)"
              bgColor="var(--color-button-green)"
            />
          </a>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
            id faucibus nisl tincidunt eget nullam non. Sit amet cursus sit amet
            dictum sit amet justo donec. Pharetra diam sit amet nisl. Neque
            laoreet suspendisse interdum consectetur libero. Aenean sed
            adipiscing diam donec adipiscing. Morbi enim nunc faucibus a
            pellentesque sit amet porttitor. Ultrices mi tempus imperdiet nulla
            malesuada pellentesque elit eget. Mauris a diam maecenas sed enim ut
            sem. Cursus eget nunc scelerisque viverra mauris in aliquam sem.
            Porttitor lacus luctus accumsan tortor posuere ac. Convallis a cras
            semper auctor neque vitae tempus. Ultrices vitae auctor eu augue ut
            lectus arcu bibendum. Imperdiet massa tincidunt nunc pulvinar
            sapien. Consectetur libero id faucibus nisl tincidunt. Non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Nunc non
            blandit massa enim nec dui. Lacus laoreet non curabitur gravida arcu
            ac tortor dignissim convallis. Pellentesque elit ullamcorper
            dignissim cras. Porttitor eget dolor morbi non. Odio tempor orci
            dapibus ultrices in iaculis nunc. Mollis nunc sed id semper risus
            in. Eget nunc scelerisque viverra mauris. Egestas sed sed risus
            pretium quam vulputate dignissim suspendisse. Eget est lorem ipsum
            dolor sit amet consectetur adipiscing elit. Sed faucibus turpis in
            eu mi. Eros in cursus turpis massa tincidunt. Sit amet tellus cras
            adipiscing enim eu. Interdum velit laoreet id donec ultrices
            tincidunt. Cursus sit amet dictum sit amet. Urna molestie at
            elementum eu facilisis sed. Sit amet consectetur adipiscing elit
            duis tristique sollicitudin nibh sit. Quam vulputate dignissim
            suspendisse in est ante in nibh mauris. Blandit massa enim nec dui
            nunc mattis enim ut. Orci a scelerisque purus semper eget duis. Orci
            ac auctor augue mauris augue. Turpis egestas integer eget aliquet
            nibh praesent. Molestie ac feugiat sed lectus vestibulum mattis
            ullamcorper velit sed. Morbi tristique senectus et netus. Malesuada
            bibendum arcu vitae elementum curabitur vitae nunc sed velit.
            Dictumst quisque sagittis purus sit amet. Faucibus a pellentesque
            sit amet porttitor eget dolor morbi. Magna fringilla urna porttitor
            rhoncus dolor purus. Turpis egestas pretium aenean pharetra magna ac
            placerat vestibulum. Risus nullam eget felis eget nunc lobortis
            mattis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan
            tortor posuere. Diam in arcu cursus euismod quis viverra nibh. Amet
            mattis vulputate enim nulla aliquet porttitor. Ultricies tristique
            nulla aliquet enim tortor at. Neque vitae tempus quam pellentesque
            nec nam aliquam sem et. Tortor consequat id porta nibh venenatis
            cras sed felis eget. Massa tempor nec feugiat nisl. Integer vitae
            justo eget magna fermentum iaculis eu non. Elementum integer enim
            neque volutpat ac tincidunt. Non sodales neque sodales ut etiam sit
            amet nisl purus. Tristique risus nec feugiat in fermentum posuere.
            Augue mauris augue neque gravida in fermentum et. Lacus laoreet non
            curabitur gravida arcu ac tortor dignissim. Pulvinar mattis nunc sed
            blandit libero volutpat. Ac orci phasellus egestas tellus. Eget
            dolor morbi non arcu risus quis. Nibh mauris cursus mattis molestie
            a iaculis at erat pellentesque. Eget velit aliquet sagittis id
            consectetur purus. Sit amet massa vitae tortor condimentum lacinia
            quis vel eros. At varius vel pharetra vel turpis nunc eget. Augue
            mauris augue neque gravida. Nunc sed blandit libero volutpat.
            Tristique et egestas quis ipsum suspendisse ultrices gravida dictum.
            Ornare aenean euismod elementum nisi quis. Tempor commodo
            ullamcorper a lacus. Metus aliquam eleifend mi in nulla. Porta lorem
            mollis aliquam ut. Malesuada fames ac turpis egestas integer eget
            aliquet. Eget egestas purus viverra accumsan in nisl nisi.
          </p>
        </div>
      </div>
    </>
  );
};

export default AppointmentView;
