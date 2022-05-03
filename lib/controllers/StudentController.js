const Reader = require("../utils/Reader");
const StudentService = require("../service/StudentsServices");

class StudentController{
    static getStudents(){
        return Reader.readJsonFile("./data/visualpartners.json");
    }
    static getEmails(){
        const students = Reader.readJsonFile("./data/visualpartners.json");
        const emailsOfStudents = StudentService.getStudentEmails(students);
        return emailsOfStudents;
    }
    static getStudentCredits(){
        const students = Reader.readJsonFile("./data/visualpartners.json");
        const scorePlusEqual500 = StudentService.getStudentsCredits(students);
        return scorePlusEqual500;
    }
}

module.exports = StudentController;