const StudentController = require("../lib/controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req,res) =>{
    res.json({message: "Student API Welcome!"});
});

app.get("/v1/students", (req,res) =>{
    res.json(StudentController.getStudents());
});

app.get("/v1/students/emails", (req,res) =>{
    const emails = StudentController.getEmails();
    res.json(emails);
});

app.get("/v1/students/credits", (req,res) =>{
    const creditsOfStudents = StudentController.getStudentCredits();
    res.json(creditsOfStudents);
});

app.listen(port, ()=>{
    console.log(`Student API in localhost: ${port}`);
});