import request from "supertest";
import { apiCore } from "../../../core/api/index";
import { Request, Response } from "express";

const app = apiCore;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send();
});

describe("Api", () => {
  it("should return 200 in get", () => {
    request(app)
      .get("/")
      .expect(200)
  })
})

request(app)
  .get("/")
  .expect(200);