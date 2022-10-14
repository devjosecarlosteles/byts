import toths from '../../../toths';

describe ("testing log module", () => {
  it("should test if log return as message string teste type info", () => {
    expect(toths.info("teste")).toBe("teste");
  });

  it("should test if log return as message string teste type warn", () => {
    expect(toths.warn("teste")).toBe("teste");
  });

  it("should test if log return as message string teste type error", () => {
    expect(toths.error("teste")).toBe("teste");
  });
});