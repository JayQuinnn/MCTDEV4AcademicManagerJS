document.getElementById('FormButton').addEventListener("click",(Event)=>{
    Event.preventDefault()
    createStudent()
});
function createStudent(){
    
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
    const Address = document.getElementById("Address").value;

    const Student = {
        Name,
        LastName,
        CourseID,
        StudentID,
        Sex,
        Picture,
        Email,
        Disabilities,
        PhoneNumber,
        Year,
        // Grades,
        Group,
        Address
    }

    console.log(Student);
    addStudent(Student);

}