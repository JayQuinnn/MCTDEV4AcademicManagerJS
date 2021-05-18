function renderAllExchangeStudents() {
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<a href="../index.html"><p>Back</p></a>`

    let allAlma = document.getElementById('allStudent');
    let htmlString = `<div class="row d-flex border-bottom">
        <div class="col-1"><b>Name</b></div>
        <div class="col-1"><b>Surname</b></div>
        <div class="col-1"><b>Course</b></div>
        <div class="col-1"><b>Gender</b></div>
        <div class="col-2"><b>Email</b></div>
        <div class="col-1"><b>Disabilities</b></div>
        <div class="col-1"><b>Phone Number</b></div>
        <div class="col-1"><b>Year</b></div>
        <div class="col-1"><b>Group</b></div>
        <div class="col-1"><b>Nationality</b></div>
        <div class="col-1"><b>Action</b></div>
      </div>`;
    connection.query(`SELECT * FROM tblstudentexchange`, function (error, results, field) {
        console.log(results);
        results.forEach(element => {
            htmlString = htmlString + `
            <div class="row d-flex justify-content-start border-bottom">
                <div class="col-1">${element.fldName}</div>
                <div class="col-1">${element.fldLastName}</div>
                <div class="col-1">${element.fldCourse}</div>
                <div class="col-1">${element.fldGender}</div>
                <div class="col-2">${element.fldEmail}</div>
                <div class="col-1">${element.fldDisabilities}</div>
                <div class="col-1">${element.fldPhoneNumber}</div>
                <div class="col-1">${element.fldYear}</div>
                <div class="col-1">${element.fldGroup}</div>
                <div class="col-1">${element.fldNationality}</div>
                <div class="col-1"><button type="button" onclick="renderDetailedView('${element.fldName}','${element.fldLastName}','${element.fldCourse}','${element.fldGender}','${element.fldPicture}','${element.fldEmail}','${element.fldDisabilities}','${element.fldPhoneNumber}','${element.fldYear}','${element.fldGroup}','${element.fldNationality}','${element.fldMotivationalLetter}')"  class="btn btn-info">Info</button>
                <button type="button" onclick="removeExchange(${element.fldstudentid})"  
                class="btn btn-danger">REMOVE</button></div>
            </div>`;
            allAlma.innerHTML = htmlString;
        });
    })
}



function renderDetailedView(fldName, fldLastName, fldCourse, fldGender, fldPicture, fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldNationality, fldLetter){
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<button type="button" onclick="renderAllExchangeStudents()"  class="btn btn-danger">close</button>
                    <button type="button" id="PDF"  class="btn btn-warning">PDF</button>`
    
    let allAlma = document.getElementById('allStudent');
    let htmlString = `
        <h1>${fldName} ${fldLastName}</h1>
        <img class="pfp rounded float-right" src="${fldPicture}" alt="">
        <p>${fldNationality}</p>
        <p>${fldGender}</p>
        <p>Course: ${fldCourse}</p>
        <p>Year: ${fldYear}</p>
        <p>Group: ${fldGroup}</p>
        <p>Disabilities: ${fldDisabilities}</p>
        <h2>Contact</h2>
        <p>${fldEmail}</p>
        <p>${fldPhoneNumber}</p>
        <h2>Motivational Letter</h2>
        <p>${fldLetter}</p>
    `;
    allAlma.innerHTML = htmlString;
    document.getElementById("PDF").addEventListener("click", () => {
        const pdfBody = document.getElementById('allStudent').innerHTML;
        // send whatever you like
        printPDF(pdfBody, fldName, fldLastName);
        });
}

const ipcRenderer = require("electron").ipcRenderer;
        // cannot send message to other windows directly https://github.com/electron/electron/issues/991
        function sendCommandToWorker(content) {
            ipcRenderer.send("printPDF", content);
}

renderAllExchangeStudents();