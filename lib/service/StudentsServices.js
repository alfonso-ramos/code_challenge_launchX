const Reader = require("../utils/Reader");

class StudentServices{
    static getAllStudents(students){
        return Reader.readJsonFile(students);
    }
    static getStudentEmails(students){
        const studentCertifiaction = students.filter((student) => student.haveCertification == true);
        const studentEmail = studentCertifiaction.map((student) => student.email);
        return studentEmail;
    }
    static getStudentsCredits(students){
        const studentCredits = students.filter((student) => student.credits >= 500);
        return studentCredits;
    }
}

module.exports = StudentServices;