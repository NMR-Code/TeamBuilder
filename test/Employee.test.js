const Employee = require("../lib/Employee");
//Callback functions
describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor", () => {
        const name = "Nelson";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor", () => {
        const testVal = 100;
        const e = new Employee("Melo", testVal);
        expect(e.id).toBe(testVal);
    });

    it("Can set email via constructor", () => {
        const testVal = "test@test.com";
        const e = new Employee("Melo", 1, testVal);
        expect(e.email).toBe(testVal);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testVal = "Nelson";
            const e = new Employee(testVal);
            expect(e.getName()).toBe(testVal);
        });
    });

    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testVal = 100;
            const e = new Employee("Melo", testVal);
            expect(e.getId()).toBe(testVal);
        });
    });

    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testVal = "test@test.com";
            const e = new Employee("Melo", 1, testVal);
            expect(e.getEmail()).toBe(testVal);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testVal = "Employee";
            const e = new Employee("Nelson", 1, "test@test.com");
            expect(e.getRole()).toBe(testVal);
        });
    });
});