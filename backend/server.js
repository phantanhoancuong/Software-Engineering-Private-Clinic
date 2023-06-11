const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
}).query("CREATE DATABASE IF NOT EXISTS clinic;", (err, data) => {
    if (err) console.log(err);
    console.log("Database created!");
});

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
    // db.query("DROP TABLE IF EXISTS user;", (err, data) => {
    //     if (err) console.log(err);
    //     console.log("Table user dropped!");
    // });

    db.query(`CREATE TABLE IF NOT EXISTS user (
                ID VARCHAR(10) NOT NULL,
                name VARCHAR(50),
                email VARCHAR(100),
                password VARCHAR(100),
                PRIMARY KEY (email) 
            );`, (err, data) => {
        if (err) console.log(err);
        console.log("Table user created!");
    });

    db.query(`CREATE TABLE IF NOT EXISTS patient (
                ID VARCHAR(10) NOT NULL,
                name VARCHAR(50),
                email VARCHAR(100),
                dob DATE,
                gender VARCHAR(6),
                addr VARCHAR(200),
                PRIMARY KEY (email, ID) 
            );`, (err, data) => {
        if (err) console.log(err);
        console.log("Table patient created!");
    });

    db.query(`CREATE TABLE IF NOT EXISTS appointment (
                date DATE,
                time TIME,
                ID VARCHAR(10) NOT NULL,
                symptom VARCHAR(200),
                PRIMARY KEY (days, time),
                FOREIGN KEY (ID) REFERENCES patient(ID)
            );`, (err, data) => {
        if (err) console.log(err);
        console.log("Table appointment created!");
    });

    // db.query(`INSERT INTO user (ID, name, email, password, dob, phone, addr) VALUES ("BN_123456", "a", "a", "a", null, null, null);`, (err, data) => {
    //     if (err) console.log(err);
    //     console.log("User [ID: BN_123456, name: a, email: a, password: a] created!");
    // });
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

function generateIDpatient(n) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
    if (n > max) { return generate(max) + generate(n - max); }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return (" BN_" + number).substring(add);
}

function generateID(n) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
    if (n > max) { return generate(max) + generate(n - max); }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return (" MD_" + number).substring(add);
}

app.post("/signup", (req, res) => {
    const sql = "INSERT INTO `user` (`name`, `email`, `password`, `ID`) VALUES (?)";
    var ID = `${generateID(5)}`;
    const checkID = "SELECT * FROM `user` WHERE `ID` = ?";
    var check = true;
    var tempData = '';

    // get compare ID later, below compare ID is incomplete!
    while (db.query(checkID, [ID], (err, data) => { tempData == data; })) {
        if (tempData === "") {
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

    if (req.body.password != req.body.repassword)
        return res.json('Mật khẩu không khớp!');

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json('Email này đã được đăng ký!');
        }
        return res.json(ID);
    })
})

app.post("/patientcreate", (req, res) => {
    const sql = "INSERT INTO `patient` (`name`, `email`, `dob`, `gender`, `addr`, `ID`) VALUES (?)";
    var ID = `${generateIDpatient(5)}`;
    const checkID = "SELECT * FROM `patient` WHERE `ID` = ?";
    const checkEmail = "SELECT * FROM `patient` WHERE `email` = ?"
    var check = true;
    var tempData = '';

    // get compare ID later, below compare ID is incomplete!
    while (db.query(checkID, [ID], (err, data) => { tempData == data; })) {
        if (tempData === "") {
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
        req.body.dob,
        req.body.gender,
        req.body.addr,
        ID
    ];

    console.log(values);

    db.query(checkEmail, req.body.email, (err, data) => {
        console.log(data)
        if (err) {
            console.log(err)
            return res.json("Lỗi 1")
        }
        else if (data.length !== 0) {
            return res.json('Email này đã được đăng ký!');
        }
        else {
            db.query(sql, [values], (err, data) => {
                if (err) {
                    console.log(err)
                    return res.json("Lỗi 2");
                }
                return res.json(ID);
            })
        }
    })

})

app.post("/appointmentcreate", (req, res) => {
    const sql = "INSERT INTO `appointment` (`date`, `time`, `ID`, `symptom`) VALUES (?)";
    const checkID = "SELECT ID FROM `patient` WHERE `ID` = ?";

    const values = [
        req.body.date,
        req.body.time,
        req.body.ID,
        req.body.symptom 
    ];

    console.log(values);

    db.query(checkID, req.body.ID, (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Lỗi 1")
        }
        else if (data.length === 0) {
            return res.json("ID bệnh nhân không đúng!")
        }
        else {
            db.query(sql, [values], (err, data) => {
                if(err) {
                    console.log(err)
                    return res.json("Đã có bệnh nhân đăng ký")
                }
                return res.json('success')
            })
        }
    })
})

app.post("/appointmentview", (req, res) => {
    const sql = "SELECT date_format(`date`, '%m/%d/%Y') AS `date`, `time`, `ID`, `symptom` FROM `appointment` WHERE `date` = ?";

    db.query(sql, req.body.date, (err, data) => {
        if(err) {
            console.log(err)
            return res.json("Lỗi View")
        }
        if(data.length === 0) {
            return res.json('fail')
        }
        return res.json(data)
    })
})

app.post("/appointmentviewModal", (req, res) => {
    const sql = "SELECT `ID`, `name`, YEAR(`dob`) AS `year`, `gender`, `addr` FROM `patient` WHERE `ID` = ?";

    db.query(sql, req.body.ID, (err, data) => {
        if(err) {
            console.log(err)
            return res.json("Lỗi Modal")
        }
        return res.json(data)
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
