const mysql = require('mysql');
let sleep = require('system-sleep')
let connection = mysql.createConnection({
    host: '94.224.211.168',
    port: '25568',
    user: 'Mitch',
    password: 'mitch123456789',
    database: 'academic02'
});

let myValue = []
let output;
  
const setOutput = (rows) => {
    output = rows;
    console.log(output);
}


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
    const query = `SELECT * FROM ${tbl} WHERE ${fld} = '${value}'`
    connection.connect(async(err) => {
        if (err) {
            console.log("Database COnnection Failed!", err);
            return;
        }

        console.log("Connected to Database");
        connection.query(query, (err,rows) =>{
            if (err) {
                console.log("internal error", err);
                return;
            }
            setOutput(rows)
        })
    })
    sleep(10)
    connection.end()
}

function addStudent(student){
    connection.connect();
    connection.query(`INSERT INTO tblStudent(fldName,fldLastName,fldCourseID,fldGender,fldPicture,fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldAddress) VALUES('${student.Name}','${student.LastName}','${student.CourseID}','${student.Sex}','${student.Picture}','${student.Email}','${student.Disabilities}','${student.PhoneNumber}',${student.Year},'${student.Group}','${student.Address}')`);
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

function setValue(val){
    myValue = val;
    console.log(myValue)
}
//addStudent(DefaultStudent);
//getAllStudents();
//removeStudent();
//searchStudents("fldCourse","MCT");
console.log("-------------------------------------------")
searchOn("tblcourse","fldCourseName","MCT")

console.log(output)
console.log("-------------------------------------------")




