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

app.post("/signin", (req, res) => {
    const sql = "SELECT * from `user` WHERE `name` = ? AND `password` = ?";
    const value = [
        req.body.name,
        req.body.password
    ]

    db.query(sql, value, (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) return res.json('success');
        else res.json('fail');
    })
})

app.post("/signup", (req, res) => {
    const sql = "INSERT INTO `user` (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const value = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    const exist = "SELECT * from `user` WHERE `email` = ?";

    db.query(exist, req.body.email, (err1, data1) => {
        if (err1) return res.json(err1);
        if (data1.length > 0) return res.json('existed');
        else {
            db.query(sql, value, (err, data2) => {
                if (err) return res.json(err);
                return res.json('success');
            })
        }
    })

})

app.listen(8800, () => {
    console.log('Listening');
})