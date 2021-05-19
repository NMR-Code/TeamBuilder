const Engineer = require("../lib/Engineer");

test("Can set Github account via constructor", () => {
        const testVal = "GithubUser";
        const e = new Engineer("Melo", 1, "test@test.com", testVal);
        expect(e.github).toBe(testVal);
    }),

    test("getRole() should return \"Engineer\"", () => {
        const testVal = "Engineer";
        const e = new Engineer("Melo", 1, "test@test.com", "GithubUser");
        expect(e.getRole()).toBe(testVal);
    }),

    test("Can get GitHub username via getGithub()", () => {
        const testVal = "GithubUser";
        const e = new Engineer("Melo", 1, "test@test.com", testVal);
        expect(e.getGithub()).toBe(testVal);
    });