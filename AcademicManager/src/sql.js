/**INIT */
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
let output;//a
  
const setOutput = (rows) => {
    output = rows;
    console.log(output);
}


/**STUDENT TEMPLATES*/
class student {
    constructor(Name, LastName, CourseID, Sex, Picture, Email, Disabilities, PhoneNumber, Year, Group, Address){
        this.Name = Name;
        this.LastName = LastName;
        this.CourseID = CourseID;
        this.Sex = Sex;
        this.Picture = Picture;
        this.Email = Email;
        this.Disabilities = Disabilities;
        this.PhoneNumber = PhoneNumber;
        this.Year = Year;
        this.Group = Group;
        this.Address = Address;
    }
}

const DefaultStudent = {
    Name: "Mitch",
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


/**SEARCH */
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

/** ADD NEW STUDENT*/
function addStudent(student){
    connection.connect();
    connection.query(`INSERT INTO tblStudent(fldName,fldLastName,fldCourseID,fldGender,fldPicture,fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldAddress) VALUES('${student.Name}','${student.LastName}','${student.CourseID}','${student.Sex}','${student.Picture}','${student.Email}','${student.Disabilities}','${student.PhoneNumber}',${student.Year},'${student.Group}','${student.Address}')`);
    connection.end();
}
/** FETCH ALL STUDENTS*/
function getAllStudents(){
    connection.connect();
    connection.query(`SELECT * FROM tblStudent`,function(error, results, field){
        console.log(results)
    })
    connection.end();
}

/** REMOVE STUDENT*/
function removeStudent(studentID){
  connection.connect();

  console.log(`Removing student with ID: ${studentID}`);

  connection.query(`DELETE FROM tblStudent WHERE fldstudentid = ${studentID}`, function (error, results, fields) {
      if (error) throw error;
      console.log('deleted ' + results.affectedRows + ' rows');
    })
  connection.end();
}


/**UPDATE STUDENT */
function updateStudent(studentid, student){
    connection.connect();

    console.log(`Updating ${student.Name} ${student.LastName}`);

    connection.query(`UPDATE tblStudent SET fldName='${student.Name}' , fldLastName='${student.LastName}', fldCourseID='${student.CourseID}', fldGender='${student.Sex}', fldPicture='${student.Picture}', fldEmail='${student.Email}', fldDisabilities='${student.Disabilities}', fldPhoneNumber='${student.PhoneNumber}'   WHERE fldstudentid=${studentid}`)
    connection.end();
}

let jochem = new student('Jochemmmm', 'Crab', 1, 'MALE', 'picture', 'jochem@jochem', 'Geen', '011111111111', '2', 'C', 'Leuven')
let mitch = new student('Mitch', 'Van Hove', 1, 'MALE', 'picture2', 'jochem@jochem', 'Geen', '011456461111', '3', 'B', 'Dilbeek')


//getAllStudents();
//removeStudent(2);
//updateStudent(1, jochem);
//addStudent(mitch);
//searchStudents("fldCourseID","1");
console.log("-------------------------------------------")
searchOn("tblcourse","fldCourseName","MCT")
console.log(output)
console.log("-------------------------------------------")








