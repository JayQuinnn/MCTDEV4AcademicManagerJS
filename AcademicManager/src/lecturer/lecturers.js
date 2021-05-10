function renderAllLecturers() {
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<a href="../index.html"><p>Back</p></a>`

    let allAlma = document.getElementById('allLecturers');
    let htmlString = `<div class="row d-flex justify-content-start border-bottom">
                <div class="col-1">Name</div>
                <div class="col-2">Last Name</div>
                <div class="col-2">Employment Status</div>
                <div class="col-2">Email</div>
                <div class="col-2">Phone Number</div>
                <div class="col-2">Paygrade</div>
                </div>`;
    connection.query(`SELECT * FROM tbllecturer`, function (error, results, field) {
        console.log(results);
        results.forEach(element => {
            htmlString = htmlString + `
            <div class="row d-flex justify-content-start border-bottom">
                <div class="col-1">${element.fldName}</div>
                <div class="col-2">${element.fldLastName}</div>
                <div class="col-2">${element.fldEmploymentStatus}</div>
                <div class="col-2">${element.fldEmail}</div>
                <div class="col-2">${element.fldPhoneNumber}</div>
                <div class="col-2">${element.fldPaygrade}</div>

                <div style="float: right;"><button type="button" onclick="renderDetailedView
                ('${element.fldName}','${element.fldLastName}','${element.fldEmploymentStatus}',
                '${element.fldEmail}','${element.fldPhoneNumber}','${element.fldPaygrade}')"  
                class="btn btn-info">Info</button></div>
            </div>`;
            allAlma.innerHTML = htmlString;
        });
    })
}

function renderDetailedView(fldName, fldLastName, fldEmploymentStatus, fldEmail, fldPhoneNumber, fldPaygrade){
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<button type="button" onclick="renderAllLecturers()"  class="btn btn-danger">close</button>`
    let allAlma = document.getElementById('allLecturers');
    let htmlString = `
        <h1>${fldName} ${fldLastName}</h1>
        <p>${fldEmploymentStatus}</p>
        <p>Paygrade: ${fldPaygrade}</p>
        <h2>contact</h2>
        <p>${fldEmail}</p>
        <p>${fldPhoneNumber}</p>
    `;
    allAlma.innerHTML = htmlString;
}



renderAllLecturers()