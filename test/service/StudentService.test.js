const StudentServices = require("../../lib/service/StudentsServices");

describe("Test de StudentService", () =>{
    test("Requerimiento 1: Recibir a todos los estudiantes", ()=>{
        const students = StudentServices.getAllStudents("./data/visualpartners.json");
        expect(typeof students).toBe("object");
    });
    test("Requerimiento 2: Recibir el Email de lso estudiantes con certificacion", ()=>{
        const students =[{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "haveCertification": true
        }];
        const getEmail = StudentServices.getStudentEmails(students);
        expect(getEmail[0]).toEqual("Todd@visualpartnership.xyz");
    });
    test("Requerimiento 3: Obtener los estudiantes con creditos igual o mayores de 500", () =>{
        const students =[{credits: 500},{credits: 600},{credits: 300}, {credits: 1000}, {credits: 100}];

        const student1 = StudentServices.getStudentsCredits(students)[0];
        expect(student1).toEqual({credits: 500});
    });
});