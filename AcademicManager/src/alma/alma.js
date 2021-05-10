function renderAllAlmas() {
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<a href="../index.html"><p>Back</p></a>`

    let allAlma = document.getElementById('allAlma');
    let htmlString = `<div class="row d-flex justify-content-start border-bottom">
                <div class="col-2">Name</div>
                <div class="col-2">Address</div>
                <div class="col-2">Notes</div>
                <div class="col-3">Email</div>
                <div class="col-2">Phone Number</div>
                </div>`;
    connection.query(`SELECT * FROM tblalma`, function (error, results, field) {
        console.log(results);
        results.forEach(element => {
            htmlString = htmlString + `
            <div class="row d-flex justify-content-start border-bottom">
                <div class="col-2">${element.fldName}</div>
                <div class="col-2">${element.fldAddress}</div>
                <div class="col-2">${element.fldNotes}</div>
                <div class="col-3">${element.fldEmail}</div>
                <div class="col-2">${element.fldPhoneNumber}</div>
                <div style="float: right;"><button type="button" onclick="renderDetailedView('${element.fldName}','${element.fldAddress}','${element.fldNotes}','${element.fldEmail}','${element.fldPhoneNumber}')"  class="btn btn-info">Info</button></div>
            </div>`;
            allAlma.innerHTML = htmlString;
        });
    })
}


renderAllAlmas();

function doSomething(iets){
    console.log(iets);
}

function renderDetailedView(fldName, fldAddress, fldNotes, fldEmail, fldPhoneNumber){
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<button type="button" onclick="renderAllAlmas()"  class="btn btn-danger">close</button>`
    let allAlma = document.getElementById('allAlma');
    let htmlString = `
        <h1>${fldName}</h1>
        <p>${fldAddress}</p>
        <p>${fldNotes}</p>
        <h2>contact</h2>
        <p>${fldEmail}</p>
        <p>${fldPhoneNumber}</p>
    `;
    allAlma.innerHTML = htmlString;
}