/**INIT */
const mysql = require('mysql');
let sleep = require('system-sleep')
let connection = mysql.createConnection({
    host: '94.224.211.168',
    port: '25568',
    user: 'Mitch',
    password: 'mitch123456789',
    database: 'academic03'
});
let myValue = []
let output;//a

/**TEMPLATES*/
class student {
    constructor(Name, LastName, Course, Sex, Picture, Email, Disabilities, PhoneNumber, Year, Group, Address){
        this.Name = Name;
        this.LastName = LastName;
        this.Course = Course;
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

class exchangeStudent {
    constructor(Name, LastName, Sex, Picture, Email, Disabilities, PhoneNumber, Year, Group, Nationality, Alma, Dorm, Letter){
        this.Name = Name;
        this.LastName = LastName;
        this.Sex = Sex;
        this.Picture = Picture;
        this.Email = Email;
        this.Disabilities = Disabilities;
        this.PhoneNumber = PhoneNumber;
        this.Year = Year;
        this.Group = Group;
        this.Nationality = Nationality;
        this.Alma = Alma;
        this.Dorm = Dorm;
        this.Letter = Letter;
    }
}


let jochem = new student('Jochemmmm', 'Crab', 1, 'MALE', 'picture', 'jochem@jochem', 'Geen', '011111111111', '2', 'C', 'Leuven')
let mitch = new student('Mitch', 'Van Hove', 1, 'MALE', 'picture2', 'jochem@jochem', 'Geen', '011456461111', '3', 'B', 'Dilbeek')

let tom = new exchangeStudent('T0mmmm','Wouters', 'MALE', 'PictureTom', 'Tom@tom', 'Geen', '654654', '3', 'C', "Tokyo", "1", "1", "Letter_Tom" )
  
const setOutput = (rows) => {
    output = rows;
    console.log(output);
}


/**STUDENT TEMPLATES*/

const DefaultStudent = {
    Name: "Mitch",
    LastName: "Test Object",
    Course: "MCT",
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
    sleep(500)
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

/** ADD*/
function addStudent(student){
    connection.connect();
    console.log(`Adding ${student.Name} ${student.LastName}`)
    connection.query(`INSERT INTO tblStudent(fldName,fldLastName,fldCourse,fldGender,fldPicture,fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldAddress) 
    VALUES('${student.Name}','${student.LastName}','${student.Course}','${student.Sex}','${student.Picture}','${student.Email}','${student.Disabilities}','${student.PhoneNumber}',${student.Year},'${student.Group}','${student.Address}')`);
    connection.end();
}

function addExchangeStudent(exchangeStudent){
    connection.connect();
    connection.query(`INSERT INTO tblstudentexchange(fldName, fldLastName, fldGender, fldPicture, fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldNationality, fldAlmaID, fldDormID, fldMotivationalLetter) 
    VALUES ('${exchangeStudent.Name}','${exchangeStudent.LastName}','${exchangeStudent.Sex}','${exchangeStudent.Picture}','${exchangeStudent.Email}','${exchangeStudent.Disabilities}','${exchangeStudent.PhoneNumber}','${exchangeStudent.Year}','${exchangeStudent.Group}','${exchangeStudent.Nationality}','${exchangeStudent.Alma}','${exchangeStudent.Dorm}','${exchangeStudent.Letter}')`)
    connection.end();
}

function addAlma(alma){
    //connection.connect();
    connection.query(`INSERT INTO tblalma(fldName, fldAddress, fldNotes, fldEmail, fldPhoneNumber) VALUES('${alma.Name}','${alma.Address}','${alma.Notes}','${alma.Email}','${alma.PhoneNumber}')`)
    //connection.end()
}

/** FETCH ALL*/
function getAllStudents(){
    connection.connect();
    connection.query(`SELECT * FROM tblStudent`,function(error, results, field){
        console.log(results)
    })
    connection.end();
}

function getAllExchange(){
    connection.connect();
    connection.query(`SELECT * FROM tblstudentExchange`, function(error, results, field){
        console.log(results)
    })
    connection.end();
}

function renderAllAlmas(){
    let allAlma = document.getElementById('allAlma');
    let htmlString = ``;
    connection.connect();
    connection.query(`SELECT * FROM tblalma`,function(error, results, field){
        console.log(results);
        results.forEach(element => {
            htmlString = htmlString + `
            <div class="row">
                <div class="col">${element.fldName}</div>
                <div class="col">${element.fldAddress}</div>
                <div class="col">${element.fldNotes}</div>
                <div class="col">${element.fldEmail}</div>
                <div class="col">${element.fldPhoneNumber}</div>
            </div>`;
            allAlma.innerHTML = htmlString;
        });
    })
    connection.end();
}


/** REMOVE*/
function removeStudent(studentID){
  connection.connect();
  console.log(`Removing student with ID: ${studentID}`);
  connection.query(`DELETE FROM tblStudent WHERE fldstudentid = ${studentID}`, function (error, results, fields) {
      if (error) throw error;
      console.log('deleted ' + results.affectedRows + ' rows');
    })
  connection.end();
}

function removeExchange(studentID){
    connection.connect();
    console.log(`Removing student with ID: ${studentID}`);
    connection.query(`DELETE FROM tblstudentexchange WHERE fldStudentExchangeID = ${studentID}`, function(error, results, fields){
        if(error) throw error;
        console.log('deleted ' + results.affectedRows + ' rows');
    })
    connection.end();
}

/**UPDATE STUDENT */
function updateStudent(studentid, student){
    connection.connect();
    console.log(`Updating ${student.Name} ${student.LastName}`);
    connection.query(`UPDATE tblStudent SET fldName='${student.Name}' , 
    fldLastName='${student.LastName}', 
    fldCourse='${student.Course}', 
    fldGender='${student.Sex}', 
    fldPicture='${student.Picture}', 
    fldEmail='${student.Email}', 
    fldDisabilities='${student.Disabilities}', 
    fldPhoneNumber='${student.PhoneNumber}'  
    WHERE fldstudentid=${studentid}`)
    connection.end();
}

function updateExchange(studentid, student){
    connection.connect();
    console.log(`Updating ${student.Name} ${student.LastName}`);
    connection.query(`UPDATE tblstudentexchange SET fldName='${student.Name}' , 
    fldLastName='${student.LastName}', 
    fldGender='${student.Sex}', 
    fldPicture='${student.Picture}', 
    fldEmail='${student.Email}', 
    fldDisabilities='${student.Disabilities}', 
    fldPhoneNumber='${student.PhoneNumber}', 
    fldYear='${student.Year}', 
    fldGroup='${student.Group}', 
    fldNationality='${student.Nationality}', 
    fldAlmaID='${student.Alma}', 
    fldDormID='${student.Dorm}', 
    fldMotivationalLetter='${student.Letter}'  
    WHERE fldStudentExchangeID=${studentid}`);
    connection.end();
}



//console.log("-------------------------------------------")
//getAllStudents();
//removeStudent(2);
//updateStudent(1, jochem);
//addStudent(mitch);
//searchStudents("fldCourse","1");
//searchOn("tblcourse","fldCourseName","MCT")
//console.log(output)
//addExchangeStudent(tom);
//getAllExchange();
//removeExchange(2);
//updateExchange(3, tom);








