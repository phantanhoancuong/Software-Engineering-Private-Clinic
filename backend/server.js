const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
})

database.connect( (error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log('Success connected')
    }
})

app.post('/', (req, res) => {
    const sql = "SELECT * from signin WHERE `name` = ? AND `password` = ?";
    const value = [
        req.body.name,
        req.body.password
    ]

    db.query(sql, [value], (err, data) => {
        if(err) return res.json('Failed');
        return res.json(data);
    })
})

// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login ('name', 'email', 'password') VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql, [values], (err, data) => {
//         if (err) {
//             return res.json('Error');
//         }
//         return res.json(data);
//     })
// })

app.listen(8081, ()=> {
    console.log('listening');
})