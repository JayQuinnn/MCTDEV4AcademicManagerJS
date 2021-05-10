document.getElementById('FormButton').addEventListener("click",(Event)=>{
    Event.preventDefault()
    createLecturer()
});

function createLecturer(){    
    const Name = document.getElementById("Name").value;
    const LastName = document.getElementById("LastName").value;
    const Paygrade = document.getElementById("paygrade").value;
    const Email = document.getElementById("Email").value;
    const PhoneNumber = document.getElementById("PhoneNumber").value;

    const Lecturer = {
        Name,
        LastName,
        Paygrade,
        Email,
        PhoneNumber,
    }
    console.log(Lecturer);
    addLecturer(Lecturer);

}