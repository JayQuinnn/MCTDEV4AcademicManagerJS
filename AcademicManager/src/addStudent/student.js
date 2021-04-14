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