const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Melo", 1, "test@test.com", "UM");
    expect(e.getRole()).toBe(testValue);
});
test("Can set the school via constructor", () => {
    const testValue = "UM";
    const e = new Intern("Melo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});
test("Can get the school via getSchool()", () => {
    const testValue = "UM";
    const e = new Intern("Melo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});