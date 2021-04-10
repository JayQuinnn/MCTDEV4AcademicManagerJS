document.getElementById('FormButton').addEventListener("click",(Event)=>{
    Event.preventDefault()
    createAlma()
});
document.getElementById('Secondary').addEventListener("click",(Event)=>{
    Event.preventDefault()
    addAlma(DefaultAlma)
});
connection.connect();
const DefaultAlma = {
    Name: "Een Test Alma",
    Address: "Een Test adres 39",
    Notes: "Dit zijn heel veel notes",
    Email: "hetTestObject@telenet.be",
    PhoneNumber:"0461010101",
}

function createAlma(){
    const Name = document.getElementById('Name').value
    const Address = document.getElementById('Address').value
    const Notes = document.getElementById('Notes').value
    const Email = document.getElementById('Email').value
    const PhoneNumber = document.getElementById('PhoneNumber').value
    const alma = {
        Name: Name,
        Address: Address,
        Notes: Notes,
        Email: Email,
        PhoneNumber: PhoneNumber,
    }
    addAlma(alma)
}
