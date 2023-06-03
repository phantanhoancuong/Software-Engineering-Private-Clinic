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
    if (!req.body.email.trim())
        return res.json('Tên đăng nhập trống!');
    if (!req.body.password.trim())
        return res.json('Mật khẩu trống!');
    db.query(sql, value, (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) return res.json('success');
        else res.json('Sai tài khoản hoặc mật khẩu!');
    })
})

function generate(n) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
    if ( n > max ) { return generate(max) + generate(n - max); }
    
    max = Math.pow(10, n+add);
    var min = max/10; // Math.pow(10, n) basically
    var number = Math.floor( Math.random() * (max - min + 1) ) + min;
    
    return (" BN_" + number).substring(add); 
}

app.post("/signup", (req, res) => {
    const sql = "INSERT INTO `user` (`name`, `email`, `password`, `ID`) VALUES (?)";
    var ID = `${generate(5)}`;
    const checkID = "SELECT * FROM `user` WHERE `ID` = ?";
    var check = true;
    var tempData = '';
    
    // get compare ID later, below compare ID is incomplete!
    while (db.query(checkID, [ID], (err, data) => {tempData == data;})) {
        if (tempData === ""){
            check = false;
        };
        if (check === false)
            break;
        ID = `${generate(5)}`;
        console.log(`: ${tempData}`);
    };
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        ID
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
        return res.json(ID);
    })
})

app.post("/useredit", (req, res) => {
    
    // sql command below is unfinished, req need an identity user who logged in (ID) and need to add pk
    // below need to fix from INSERT INTO to UPDATE
    const sql = "INSERT INTO `user` (`name`, `email`, `dob`, `phone`, `address`) VALUES (?)";
    const data = [
        req.body.name,
        req.body.email,
        req.body.dob,
        req.body.phone,
        req.body.addr,
    ];

    console.log(data);
    //if (!req.body.name.trim())
    //    return res.json('Tên đăng nhập trống!');
    //if (!req.body.password.trim())
    //    return res.json('Mật khẩu trống!');
    //if (!req.body.email.trim())
    //    return res.json('Email đăng ký trống!');

    db.query(sql, [data], (err, data) => {
        if (err) {
            return res.json('Unfinished, fix later in server.js!');
        }
        return res.json('success');
    })

})

app.listen(8800, () => {
    console.log('Listening');
})
