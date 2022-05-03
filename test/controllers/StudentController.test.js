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
});