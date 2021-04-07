const mysql = require('mysql');
let connection = mysql.createConnection({
    host: '94.224.211.168',
    port: '25568',
    user: 'Mitch',
    password: 'mitch123456789',
    database: 'academic01'
});


function addStudent(Student){
    connection.connect();
    connection.query(`INSERT INTO tblStudent(fldName,fldLastName,fldCourse,fldGender,fldPicture,fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldAddress) VALUES('${student.Name}','${student.LastName}','${student.Course}','${student.Sex}','${student.Picture}','${student.Email}','${student.Disabilities}','${student.PhoneNumber}',${student.Year},'${student.Group}','${student.Address}')`);
    connection.end();
    /**connection.query({
        sql: 'SELECT * FROM `books` WHERE `author` = ?',
        timeout: 40000, // 40s
        values: ['David']
    }, function (error, results, fields) **/
}

function getAllStudents(){
    connection.connect();
    connection.query(`SELECT * FROM 'tblStudent' WHERE 'fldName' = ?`)
    connection.end();
}


addStudent();

const Student = {
    "Name",
    "LastName",
    "Course",
    "StudentID",
    "Sex",
    Picture,
    Email,
    Disabilities,
    PhoneNumber,
    Year,
    // Grades,
    Group,
    Address
}


