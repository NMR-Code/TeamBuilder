const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
        const testVal = "Intern";
        const e = new Intern("Melo", 1, "test@test.com", "UM");
        expect(e.getRole()).toBe(testVal);
    }),

    test("Can set the school via constructor", () => {
        const testVal = "UM";
        const e = new Intern("Melo", 1, "test@test.com", testVal);
        expect(e.school).toBe(testVal);
    }),

    test("Can get the school via getSchool()", () => {
        const testVal = "UM";
        const e = new Intern("Melo", 1, "test@test.com", testVal);
        expect(e.getSchool()).toBe(testVal);
    });