const Manager = require("../lib/Manager");

test("getRole() should return \"Manager\"", () => {
        const testVal = "Manager";
        const e = new Manager("Melo", 1, "test@test.com", 100);
        expect(e.getRole()).toBe(testVal);
    }),

    test("Can set office # via constructor", () => {
        const testVal = 100;
        const e = new Manager("Melo", 1, "test@test.com", testVal);
        expect(e.officeNumber).toBe(testVal);
    }),

    test("Can get office # via getOffice()", () => {
        const testVal = 100;
        const e = new Manager("Melo", 1, "test@test.com", testVal);
        expect(e.getOfficeNumber()).toBe(testVal);
    });