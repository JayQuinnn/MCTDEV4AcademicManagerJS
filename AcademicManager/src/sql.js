const mysql = require('mysql');
let connection = mysql.createConnection({
    host: '94.224.211.168',
    port: '25568',
    user: 'Mitch',
    password: 'mitch123456789',
    database: 'academic02'
});

const DefaultStudent = {
    Name: "Het",
    LastName: "Test Object",
    CourseID: 1,
    Sex: "MALE",
    Picture: "c://path/pictures/something/memes.jpg",
    Email: "hetTestObject@telenet.be",
    Disabilities:"Geen",
    PhoneNumber:"0461010101",
    Year: 1,
    // Grades,
    Group: "A",
    Address: "Ergens"
}

function searchOn(tbl,fld,value){
    connection.connect();
    let firstResult = "";
    connection.query(`SELECT * FROM ${tbl} WHERE ${fld} = '${value}'`, function (error, results, fields){
        if (error) throw error;
        console.log(results);
        firstResult = results[0];
    })
    connection.end();
    return firstResult;
}

function addStudent(student){
    connection.connect();
    connection.query(`INSERT INTO tblStudent(fldName,fldLastName,fldCourse,fldGender,fldPicture,fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldAddress) VALUES('${student.Name}','${student.LastName}','${student.Course}','${student.Sex}','${student.Picture}','${student.Email}','${student.Disabilities}','${student.PhoneNumber}',${student.Year},'${student.Group}','${student.Address}')`);
    connection.end();
}

function getAllStudents(){
    connection.connect();
    connection.query(`SELECT * FROM tblStudent`,function(error, results, field){
        console.log(results)
    })
    connection.end();
}

function removeStudent(firstName,lastName){
  searchStudents()
  connection.connect();
  connection.query('DELETE FROM tblStudent WHERE fldstudentid = 1', function (error, results, fields) {
      if (error) throw error;
      console.log('deleted ' + results.affectedRows + ' rows');
    })
  connection.end();
}

function searchStudents(fld, value){
    connection.connect();
    let firstResult = "";
    connection.query(`SELECT * FROM tblStudent WHERE ${fld} = '${value}'`, function (error, results, fields){
        if (error) throw error;
        console.log(results);
        firstResult = results[0];
    })
    connection.end();
    return firstResult;
}


//addStudent(DefaultStudent);
//getAllStudents();
//removeStudent();
//searchStudents("fldCourse","MCT");
console.log("-------------------------------------------")
console.log(searchOn("tblcourse","fldCourseName","MCT"));
console.log("-------------------------------------------")




