document.getElementById('FormButton').addEventListener("click",(Event)=>{
    Event.preventDefault()
    createStudent()
});
renderAlmaOptions()

function createStudent(){

    // Regular student
    
    const Name = document.getElementById("Name").value;
    const LastName = document.getElementById("LastName").value;
    const Course = document.getElementById("Course").value;
    const Sex = document.getElementById("Sex").value;
    const Picture = document.getElementById("Picture").value;
    const Email = document.getElementById("Email").value;
    const Disabilities = document.getElementById("Disabilities").value;
    const PhoneNumber = document.getElementById("PhoneNumber").value;
    const Year = document.getElementById("Year").value;
    const Group = document.getElementById("Group").value;

    // + Exchange

    let Nationality = document.getElementById("Nationality").value;
    Nationality = Nationality.toUpperCase()

    const AlmaID = document.getElementById("AlmaName").value;

    const Duration = document.getElementById("Duration").value;
    
    const Building = document.getElementById("Building").value;
    const Floor = document.getElementById("Floor").value;
    const Room = document.getElementById("Room").value;
    const Dorm = {
        Building,
        Floor,
        Room
    }

    const LetterBody = document.getElementById("LetterBody").value;

    const Student = {
        Name,
        LastName,
        Course,
        Sex,
        Picture,
        Email,
        Disabilities,
        PhoneNumber,
        Year,
        Group,
        Nationality,
        AlmaID,
        Dorm: "1",
        Letter: LetterBody,
    }
    addExchangeStudent(Student)

}