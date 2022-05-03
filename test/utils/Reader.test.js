const Reader = require("../../lib/utils/Reader");

describe("Test de Reader", () =>{
    test("Requerimiento 1: Leer el archivo visualpartners.json", ()=>{
        const students = Reader.readJsonFile("./data/visualpartners.json");
        expect(students).not.toBeUndefined();
        //console.log(students);
    });
});