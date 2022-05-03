const StudentServices = require("../../lib/service/StudentsServices");

describe("Test de StudentService", () =>{
    test("Requerimiento 1: Recibir a todos los estudiantes", ()=>{
        const students = StudentServices.getAllStudents("./data/visualpartners.json");
        expect(typeof students).toBe("object");
        //console.log(students);
    });
    test("Requerimiento 2: Recibir el Email de lso estudiantes con certificacion", ()=>{
        const students =[{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "haveCertification": true
        }];

        console.log(StudentServices.getStudentEmails(students));
        const getEmail = StudentServices.getStudentEmails(students);
        expect(getEmail[0]).toEqual("Todd@visualpartnership.xyz");
    });
});