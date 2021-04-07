document.getElementById('FormButton').addEventListener("click",(Event)=>{
    Event.preventDefault()
    createStudent()
});

const DefaultStudent = {
        Name: "Het",
        LastName: "Test Object",
        Course: "MCT",
        Sex: "MALE",
        Picture: "c://path/pictures/something/memes.jpg",
        Email: "hetTestObject@telenet.be",
        Disabilities:"Deze knappe man is volledig kapabel",
        PhoneNumber:"0461010101",
        Year: "1",
        // Grades,
        Group: "A"
    }


function createStudent(){

    // Regular student
    
    const Name = document.getElementById("Name").value;
    const LastName = document.getElementById("LastName").value;
    const Course = document.getElementById("Course").value;
    const StudentID = document.getElementById("StudentID").value;
    const Sex = document.getElementById("Sex").value;
    const Picture = document.getElementById("Picture").value;
    const Email = document.getElementById("Email").value;
    const Disabilities = document.getElementById("Disabilities").value;
    const PhoneNumber = document.getElementById("PhoneNumber").value;
    const Year = document.getElementById("Year").value;
    // const Grades = document.getElementById("Grades").value;
    const Group = document.getElementById("Group").value;

    // + Exchange

    let Nationality = document.getElementById("Nationality").value;
    Nationality = Nationality.toUpperCase()

    const AlmaName = document.getElementById("AlmaName").value;
    const AlmaAddress = document.getElementById("AlmaAddress").value;
    const AlmaPhoneNumber = document.getElementById("AlmaPhoneNumber").value;
    const AlmaEmail = document.getElementById("AlmaEmail").value;
    const AlmaNotes = document.getElementById("AlmaNotes").value;
    const Alma = {
        AlmaName, AlmaAddress, AlmaPhoneNumber, AlmaEmail, AlmaNotes
    }

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
    const LetterSubject = document.getElementById("LetterSubject").value;
    const Letter = {
        LetterBody,
        LetterSubject
    }

    const Student = {
        Name,
        LastName,
        Course,
        StudentID,
        Sex,
        Picture,
        Email,
        Disabilities,
        PhoneNumber,
        Year,
        // Grades,
        Group
    }

    const ExchangeStudent = {
        Nationality, Alma, Duration, Dorm, Letter
    }

    console.log(Student, ExchangeStudent);

}