/**INIT */
const pdf = require('html-pdf');
const mysql = require('mysql');
let sleep = require('system-sleep')
defineConnection()

function defineConnection() {
    globalThis.connection = mysql.createConnection({
        host: '94.224.211.168',
        port: '25568',
        user: 'Mitch',
        password: 'mitch123456789',
        database: 'academic04',
    });

}

let myValue = []
let output;//a

/**TEMPLATES*/
class student {
    constructor(Name, LastName, Course, Sex, Picture, Email, Disabilities, PhoneNumber, Year, Group, Address) {
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
    constructor(Name, LastName, Sex, Picture, Email, Disabilities, PhoneNumber, Year, Group, Nationality, Alma, Dorm, Letter) {
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

const setOutput = (rows) => {
    output = rows;
    console.log(output);
}

/**SEARCH */
function searchOn(tbl, fld, value) {
    const query = `SELECT * FROM ${tbl} WHERE ${fld} = '${value}'`
    connection.connect(async (err) => {
        if (err) {
            console.log("Database COnnection Failed!", err);
            return;
        }
        console.log("Connected to Database");
        connection.query(query, (err, rows) => {
            if (err) {
                console.log("internal error", err);
                return;
            }
            setOutput(rows)
            console.log(rows)
        })
    })
    connection.end()
}

function searchStudents(fld, value) {
    let firstResult = "";
    connection.query(`SELECT * FROM tblStudent WHERE ${fld} = '${value}'`, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        firstResult = results[0];
    })
    return firstResult;
}

/** ADD*/
function addStudent(student) { //SIDE EFFECT: ADDING A RECORD INTO A DATABASE
    console.log(`Adding ${student.Name} ${student.LastName}`)
    connection.query(`INSERT INTO tblstudent (fldName, fldLastName, fldCourse, fldGender, fldPicture, fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldAddress) 
    VALUES('${student.Name}','${student.LastName}','${student.Course}','${student.Sex}','${student.Picture}','${student.Email}','${student.Disabilities}','${student.PhoneNumber}','${student.Year}','${student.Group}','${student.Address}')`);

}

function addLecturer(lecturer) { //SIDE EFFECT: ADDING A RECORD INTO A DATABASE
    console.log(`Adding ${lecturer.Name} ${lecturer.LastName}`)
    connection.query(`INSERT INTO tbllecturer(fldName,fldLastName,fldEmail, fldPhoneNumber, fldPaygrade, fldEmploymentStatus, fldKey) 
    VALUES ('${lecturer.Name}', '${lecturer.LastName}', '${lecturer.Email}', '${lecturer.PhoneNumber}', '${lecturer.Paygrade}', 'Is currently teaching', '${lecturer.Name + lecturer.LastName + lecturer.Email}')`)
}

function addExchangeStudent(exchangeStudent) { //SIDE EFFECT: ADDING A RECORD INTO A DATABASE
    connection.query(`INSERT INTO tblstudentexchange(fldName, fldLastName, fldCourse, fldGender, fldPicture, fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldNationality, fldAlmaID, fldDormID, fldMotivationalLetter) 
    VALUES ('${exchangeStudent.Name}','${exchangeStudent.LastName}','${exchangeStudent.Course}','${exchangeStudent.Sex}','${exchangeStudent.Picture}','${exchangeStudent.Email}','${exchangeStudent.Disabilities}','${exchangeStudent.PhoneNumber}','${exchangeStudent.Year}','${exchangeStudent.Group}','${exchangeStudent.Nationality}','${exchangeStudent.AlmaID}','${exchangeStudent.Dorm}','${exchangeStudent.Letter}')`)
}

function addAlma(alma) { //SIDE EFFECT: ADDING A RECORD INTO A DATABASE
    connection.query(`INSERT INTO tblalma(fldName, fldAddress, fldNotes, fldEmail, fldPhoneNumber, fldKey) VALUES('${alma.Name}','${alma.Address}','${alma.Notes}','${alma.Email}','${alma.PhoneNumber}', '${alma.Name + alma.PhoneNumber}')`,
        function (error, results, fields) {
            if (error) {
                console.log("ALMA ALREADY EXISTS");
                alert("ALMA ALREADY EXISTS");
                throw error
            }
        })
}

function renderAlmaOptions() { //SIDE EFFECT: UI TONEN AAN GEBRUIKER
    let AlmaOptions = document.getElementById('AlmaOptions')
    let htmlString = ``
    try {

    } catch (error) {

    }
    connection.query(`SELECT * FROM tblAlma`, function (error, results, field) {
        console.log(results);
        htmlString = `<div class="form-group">
                    <label for="AlmaName">Alma Name</label>
                    <select class="form-control" id="AlmaName">`
        results.forEach(element => {
            htmlString = htmlString + `
            <option value="${element.fldAlmaID}">${element.fldName}</option>`;
        });
        htmlString = htmlString + `</select>`
        AlmaOptions.innerHTML = htmlString;
    })
}

/** REMOVE*/
function removeStudent(studentID) {
    let responce = confirm("Are you sure you want to delete this student?");
    if (responce == true) {
        console.log(`Removing student with ID: ${studentID}`);
        connection.query(`DELETE FROM tblStudent WHERE fldstudentid = ${studentID}`, function (error, results, fields) {
            if (error) throw error;
            console.log('deleted ' + results.affectedRows + ' rows');
        })
    
    } else {
      
    }
    renderAllStudents()
}

function removeExchange(studentID) {
    let responce = confirm("Are you sure you want to delete this Exchange Student?");
    if (responce == true) {
    console.log(`Removing ExchangeStudent with ID: ${studentID}`);
    connection.query(`DELETE FROM tblstudentexchange WHERE fldStudentExchangeID = ${studentID}`, function (error, results, fields) {
        if (error) throw error;
        console.log('deleted ' + results.affectedRows + ' rows');
    })
    } else {
      
    }
    renderAllExchangeStudents()
}

function removeAlma(almaID) {
    let responce = confirm("Are you sure you want to delete this Exchange Student?");
    if (responce == true) {
    console.log(`Removing student with ID: ${almaID}`);
    connection.query(`DELETE FROM tblAlma WHERE fldAlmaID = ${almaID}`, function (error, results, fields) {
        if (error) throw error;
        console.log('deleted ' + results.affectedRows + ' rows');
    })
    } else {
      
    }
    renderAllAlmas()
}
function removeLecturer(lecturerID) {
    let responce = confirm("Are you sure you want to delete this lecturer?");
    if (responce == true) {
        console.log(`Removing Lecturer with ID: ${lecturerID}`);
        connection.query(`DELETE FROM tbllecturer WHERE fldlecturerID = ${lecturerID}`, function (error, results, fields) {
        if (error) throw error;
        console.log('deleted ' + results.affectedRows + ' rows');
    })
    } else {
      
    }
    renderAllLecturers()
}

/**UPDATE STUDENT */
function updateStudent(studentid, student) {
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
}

function updateExchange(studentid, student) {
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
}
