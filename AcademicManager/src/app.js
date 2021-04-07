const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    port: '25568',
    user: 'root',
    password: 'root',
    database: 'mydb'
});


function test(){
connection.connect();
connection.query(`INSERT INTO tblStudent(fldName,fldLastName,fldCourse,fldGender,fldPicture,fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldAddress) VALUES('test','test','test','MALE','test','test','test','test',1,'MCT','test')`);
console.log('success');
connection.end();
/**connection.query({
    sql: 'SELECT * FROM `books` WHERE `author` = ?',
    timeout: 40000, // 40s
    values: ['David']
  }, function (error, results, fields) **/
}

test();
console.log('running');
