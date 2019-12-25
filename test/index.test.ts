import helloFunc from "../src/index";

describe("Test library function", () => {
  it("Checks function happy path", () => {
    const helloResult = helloFunc("hello");
    expect(helloResult).toStrictEqual(true);
  });
  it("Returns false if another value is given", () => {
    const helloResult = helloFunc("something else");
    expect(helloResult).toStrictEqual(false);
  });
});
