const Reader = require("../utils/Reader");
const StudentService = require("../service/StudentsServices");

class StudentController{
    static getStudents(allStudents){
        return Reader.readJsonFile(allStudents);
    }
    static getEmails(allStudents){
        const emailsOfStudents = StudentService.getStudentEmails(allStudents);
        return emailsOfStudents;
    }
    static getStudentCredits(allStudents){
        const scorePlusEqual500 = StudentService.getStudentsCredits(allStudents);
        return scorePlusEqual500;
    }
}

module.exports = StudentController;