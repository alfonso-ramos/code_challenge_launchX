const Reader = require("../utils/Reader");
const StudentService = require("../service/StudentsServices");

class StudentController{
    static getStudents(allStudents){
        return Reader.readJsonFile(allStudents);
    }
}

module.exports = StudentController;