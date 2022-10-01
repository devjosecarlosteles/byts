import toths from '../../../toths';

describe ("testing log module", () => {
  it("should test if log return as message string teste", () => {
    expect(toths.info("teste")).toBe("teste");
  });
});