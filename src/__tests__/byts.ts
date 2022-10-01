import byts from '../../byts';

describe("testing environment module", () => {
  test("set environment", () => {
    expect(byts.env.set("username", "devjo")).toBeUndefined();
  });

  test("get environment", () => {
    expect(byts.env.get("username")).toBe("devjo");
  })
});