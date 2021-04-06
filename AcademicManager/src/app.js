function def(){

    const createStudent = () => {

    const Name = document.getElementById("Name").value;
    const LastName = document.getElementById("LastName").value;
    const Course = document.getElementById("Course").value;
    const StudentID = document.getElementById("StudentID").value;
    const Sex = document.getElementById("Sex").value;
    const Picture = document.getElementById("Picture").value;
    const Email = document.getElementById("Email").value;
    const Disabilities = document.getElementById("Disablities").value;
    const PhoneNumber = document.getElementById("PhoneNumber").value;
    const Year = document.getElementById("Year").value;
    const Grades = document.getElementById("Grades").value;
    const Group = document.getElementById("Group").value;

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
        Grades,
        Group
    }

    console.log(Student);

    }



document.getElementById("FormButton").addEventListener('click', () => {
    console.log('clicked');
    createStudent();
});
}