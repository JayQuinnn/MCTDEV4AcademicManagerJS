function renderAllStudents() {
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<a href="../index.html"><p>Back</p></a>`

    let allAlma = document.getElementById('allStudent');
    let htmlString = `<div class="row d-flex border-bottom">
        <div class="col-1">Name</div>
        <div class="col-1">Surname</div>
        <div class="col-1">Course</div>
        <div class="col-1">Gender</div>
        <div class="col-2">Email</div>
        <div class="col-1">Disabilities</div>
        <div class="col-1">Phone Number</div>
        <div class="col-1">Year</div>
        <div class="col-1">Group</div>
        <div class="col-1">Address</div>
      </div>`;
    connection.query(`SELECT * FROM tblstudent`, function (error, results, field) {
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
                <div class="col-1">${element.fldAddress}</div>
                <div class="col-1"><button type="button" onclick="renderDetailedView('${element.fldName}','${element.fldLastName}','${element.fldCourse}','${element.fldGender}','${element.fldPicture}','${element.fldEmail}','${element.fldDisabilities}','${element.fldPhoneNumber}','${element.fldYear}','${element.fldGroup}','${element.fldAddress}')"  class="btn btn-info">Info</button>
                <button type="button" onclick="removeStudent(${element.fldstudentid})"  
                class="btn btn-danger">REMOVE</button></div>
            </div>
            
                </div>
            `;
            allAlma.innerHTML = htmlString;
        });
    })
}

renderAllStudents();

function doSomething(iets){
    console.log(iets);
}

function renderDetailedView(fldName, fldLastName, fldCourse, fldGender, fldPicture, fldEmail, fldDisabilities, fldPhoneNumber, fldYear, fldGroup, fldAddress){
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<button type="button" onclick="renderAllStudents()"  class="btn btn-danger">close</button>`
    let allAlma = document.getElementById('allStudent');
    let htmlString = `
        <h1>${fldName} ${fldLastName}</h1>
        <img class="pfp rounded float-right" src="${fldPicture}" alt="">
        <p>${fldGender}</p>
        <p>Course: ${fldCourse}</p>
        <p>Year: ${fldYear}</p>
        <p>Group: ${fldGroup}</p>
        <p>Disabilities: ${fldDisabilities}</p>
        <h2>Contact</h2>
        <p>${fldEmail}</p>
        <p>${fldPhoneNumber}</p>
        <p>${fldAddress}</p>
    `;
    allAlma.innerHTML = htmlString;
}