const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");;
app.use(cors());

const mysql = require('mysql');
let connection = mysql.createConnection({
    host: '94.224.211.168',
    port: '25568',
    user: 'Mitch',
    password: 'mitch123456789',
    database: 'academic02'
});



const bgRouter = express.Router();
const port = process.env.PORT || 25569;
app.use(bodyParser.urlencoded({ extended: true})); // Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.json()) // Returns middleware that only parses json

app.get('/:tbl/:fld/:value', (req,res)=> {
    const tbl = req.params.tbl;
    const fld = req.params.fld;
    const value = erq.params.fld;
    console.log(tbl, fld, value);
    if (req.params.value) {
        
    }
    // connection.connect();
    // connection.query(`SELECT * FROM tblStudent`,function(error, results, field){
    //     console.log(results)
    // })
    // connection.end();
    res.send("yyeet")
})

app.get('/gamemode', (req,res)=> {
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});