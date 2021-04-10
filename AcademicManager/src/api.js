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

function searchTable(tbl){
    var something;
    connection.connect();
    try {
        connection.query(`SELECT * FROM ${tbl}`,function(error, results, field){
            if (error) {
                return 'and error occured';
            }
            console.log(results)
            something = results;
        })
    } catch (error) {
        return 'and error occured';
    }
    connection.end();
    return something;
}


const bgRouter = express.Router();
const port = process.env.PORT || 25569;
app.use(bodyParser.urlencoded({ extended: true})); // Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.json()) // Returns middleware that only parses json

app.get('/:tbl/:fld/:value', (req,res)=> {
    const tbl = req.params.tbl;
    const fld = req.params.fld;
    const value = req.params.fld;
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

app.get('/:tbl', (req,res)=> {
    const tbl = req.params.tbl;
    let something = searchTable(tbl);
    res.json(something)
    
    
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});