renderAllExchangeStudents();
const ipcRenderer = require("electron").ipcRenderer;
        // cannot send message to other windows directly https://github.com/electron/electron/issues/991
        function sendCommandToWorker(content) {
            ipcRenderer.send("printPDF", content);
        }

        
function doSomething(iets){
    console.log(iets);
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
            // send whatever you like
            sendCommandToWorker("<h1> hello </h1>");
        });
}