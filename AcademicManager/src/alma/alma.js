function renderAllAlmas() { //SIDE EFFECT: UI TONEN AAN GEBRUIKER
    let nav = document.getElementById('navigationbar');
    nav.innerHTML = `<a href="../index.html"><p>Back</p></a>`

    let allAlma = document.getElementById('allAlma');
    let htmlString = `<div class="row d-flex justify-content-start border-bottom">
                <div class="col-1"><b>Name</b></div>
                <div class="col-2"><b>Address</b></div>
                <div class="col-2"><b>Notes</b></div>
                <div class="col-3"><b>Email</b></div>
                <div class="col-2"><b>Phone Number</b></div>
                <div class="col-2"><b>Action</b></div>
                </div>`;
    connection.query(`SELECT * FROM tblalma`, function (error, results, field) {
        console.log(results);
        results = bubbleSortAscending(results, 'fldName');
        results.forEach(element => {
            htmlString = htmlString + `
            <div class="row d-flex justify-content-start border-bottom">
                <div class="col-1">${element.fldName}</div>
                <div class="col-2">${element.fldAddress}</div>
                <div class="col-2">${element.fldNotes}</div>
                <div class="col-3">${element.fldEmail}</div>
                <div class="col-2">${element.fldPhoneNumber}</div>
                <div class="col-2" style="float: right;"><button type="button" onclick="renderDetailedView('${element.fldName}','${element.fldAddress}','${element.fldNotes}','${element.fldEmail}','${element.fldPhoneNumber}')"  class="btn btn-info">Info</button>
                <button type="button" onclick="removeAlma(${element.fldAlmaID})"  
                class="btn btn-danger">REMOVE</button>
                </div>
                </div>`;
            allAlma.innerHTML = htmlString;
        });
    })
}

//SIDE EFFECT: UI TONEN AAN GEBRUIKER
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
renderAllAlmas();