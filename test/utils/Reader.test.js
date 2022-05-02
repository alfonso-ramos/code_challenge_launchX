const Reader = require("../../lib/utils/Reader");

describe("Test de Reader", () =>{
    test("Requerimiento 1: Leer el archivo visualpartners.json", ()=>{
        const partners = Reader.readJsonFile("./data/visualpartners.json");
        expect(partners).not.toBeUndefined();
    });
});