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