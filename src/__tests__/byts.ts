import toths from '../../toths';

import messagesErrorsOfEnv from "../errors/env.json";

describe("testing environment module", () => {
  it("should return void", () => {
    expect(toths.env.set("username", "devjo")).toBeUndefined();
  });

  it("should return value of environment username", () => {
    expect(toths.env.get("username")).toBe("devjo");
  })

  it("should test if set env will return an error if it sends an empty string as the first parameter", () => {
    try {
      toths.env.set("", "value");
    } catch (err: any) {
      expect(err.message).toBe(messagesErrorsOfEnv.emptyString);
    }
  })
});