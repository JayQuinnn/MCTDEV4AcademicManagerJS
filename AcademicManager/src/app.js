const mysql = require('mysql');
let connection = mysql.createConnection({
    host: '94.224.211.168',
    port: '25568',
    user: 'Mitch',
    password: 'mitch123456789',
    database: 'academic01'
});

const DefaultStudent = {
    Name: "Het",
    LastName: "Test Object",
    Course: "MCT",
    Sex: "MALE",
    Picture: "c://path/pictures/something/memes.jpg",
    Email: "hetTestObject@telenet.be",
    Disabilities:"Deze knappe man is volledig kapabel",
    PhoneNumber:"0461010101",
    Year: "1",
    // Grades,
    Group: "A",
    Address: "Ergens"
}


function addStudent(student){
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
    connection.query(`SELECT * FROM tblStudent`,function(error, results, field){
        console.log(results)
    })
    connection.end();
}

function removeStudent(){
    connection.connect();
    connection.query('DELETE FROM tblstudent WHERE fldstudentid = 1', function (error, results, fields) {
        if (error) throw error;
        console.log('deleted ' + results.affectedRows + ' rows');
      })
    connection.end();
}


//addStudent(DefaultStudent);
//getAllStudents();
//removeStudent();




