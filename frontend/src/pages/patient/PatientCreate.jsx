import React, { useState } from "react";
import "../page.css";
import style from "../../components/button/button.module.css";

import axios from 'axios'
import { useNavigate } from "react-router-dom";

const PatientCreate = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [addr, setAddr] = useState('');
  var gender = useState('')

  if (document.querySelector('#gender') != null) {
   gender = document.querySelector('#gender').value;
  }

  function handleSubmit (event) {
    event.preventDefault();
    if (name === "" || email === "" || dob === "" || addr === "") {
      alert("Vui lòng điền đủ thông tin")
    }
    else {
      axios.post('http://localhost:8800/patientcreate', { name, email, dob, gender, addr })
      .then((res, err) => {
        if (res.data[0] === 'B' && res.data[1] === 'N') {
          alert(`Thành công! ID của bệnh nhân là ${res.data}`);
          navigate('/appointmentCreate');
        }
        else {
          alert(res.data);
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <>
      <div className="page-container">
        <div className="page_form">
          <form>
            <label>
              <p>Họ tên</p>
              <input type="text" style={{ width: "300px" }} 
               onChange={e => setName(e.target.value)}
              />
            </label>

            <label>
              <p>Giới tính</p>
              <select id="gender">
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </label>

            <label>
              <p>Ngày sinh</p>
              <input type="date" style={{ width: "300px" }} 
              onChange={e => setDob(e.target.value)}
              />
            </label>

            <label>
              <p>Địa chỉ</p>
              <input type="text" style={{ width: "600px" }} 
              onChange={e => setAddr(e.target.value)}
              />
            </label>

            <label>
              <p>Email bệnh nhân</p>
              <input type="text" style={{ width: "600px" }} 
              onChange={e => setEmail(e.target.value)}
              />
            </label>
          </form>
          <div className="page_action">
            <button className={`${style.button} ${style.green}`}
            onClick={handleSubmit}>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientCreate;
