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
    database: 'user'
})

app.post("/signin", (req, res) =>{
    const sql = "SELECT * from `signin` WHERE `name` = ? AND `password` = ?";
    const q = "INSERT INTO `signin` (`id`, `name`, `email`, `password`) VALUES (?)";
    const value = [
        req.body.name,
        req.body.password
    ]

    db.query(sql, value, (err, data) => {
        if(err) return res.json(err);
        if(data.length > 0) return res.json('success');
        else res.json('fail');
    })
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login ('name', 'email', 'password') VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json('Error');
        }
        return res.json(data);
    })
})

app.listen(8800, ()=> {
    console.log('Listening');
})