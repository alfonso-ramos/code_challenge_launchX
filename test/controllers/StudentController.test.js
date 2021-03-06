const StudentController = require("../../lib/controllers/StudentController");

describe("Test de StudentController", () =>{
    test("Requerimiento 1: Retornar todos los estudiantes", () =>{
        const students = StudentController.getStudents("./data/visualpartners.json");
        expect(students[0]).toEqual({
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: [ "Visual Thinking Intermedio", "Visual Thinking Avanzado" ],
            previousCourses: 1,
            haveCertification: true
        });
        expect(typeof students).toBe("object");
    });
    test("Requerimiento 2: Retornar los email de los estudiantes que tengan certificado", () =>{
        const students = StudentController.getStudents("./data/visualpartners.json");
        const emailsOfStudents = StudentController.getEmails(students);
        console.log(emailsOfStudents);
        expect(typeof emailsOfStudents).toBe("object");
        expect(emailsOfStudents[0]).toMatch(/Todd@visualpartnership.xyz/);
        expect(emailsOfStudents[5]).toMatch(/Montoya@visualpartnership.xyz/);
    });
    test("Requerimiento3: Retornar los estudiantes que tengan 500 o mas creditos", () =>{
        const students = StudentController.getStudents("./data/visualpartners.json");
        const studentsCredits = StudentController.getStudentCredits(students);
        expect(typeof studentsCredits).toBe("object");
        expect(studentsCredits[0].credits).toBe(508);
    });
});