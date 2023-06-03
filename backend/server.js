const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clinic'
})

db.connect(function (err) {
    if (err) {
        console.log('Error connecting to mySQL!');
        return;
    }
    console.log('Connection established');
});

app.post("/signin", (req, res) => {
    const sql = "SELECT * from `user` WHERE `email` = ? AND `password` = ?";
    const value = [
        req.body.email,
        req.body.password
    ]
    if (!req.body.name.trim())
        return res.json('Tên đăng nhập trống!');
    if (!req.body.password.trim())
        return res.json('Mật khẩu trống!');
    db.query(sql, value, (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) return res.json('success');
        else res.json('Sai tài khoản hoặc mật khẩu!');
    })
})

app.post("/signup", (req, res) => {
    const sql = "INSERT INTO `user` (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    console.log(values);
    //if (!req.body.name.trim())
    //    return res.json('Tên đăng nhập trống!');
    //if (!req.body.password.trim())
    //    return res.json('Mật khẩu trống!');
    //if (!req.body.email.trim())
    //    return res.json('Email đăng ký trống!');

    if (req.body.password != req.body.repassword)
        return res.json('Mật khẩu không khớp!');

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json('Email này đã được đăng ký!');
        }
        return res.json('success');
    })

})

app.listen(8800, () => {
    console.log('Listening');
})