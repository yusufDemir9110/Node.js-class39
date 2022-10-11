import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("post", () => {
  it("returns status code 200 if cityName is passed", async () => {
    const res = await request.post("/weather").send({ cityName: "Amsterdam" });
    expect(res.statusCode).toEqual(200);
  });

  it("returns bad request if cityName is missing", async () => {
    const res = await request.post("/weather").send({});
    expect(res.statusCode).toEqual(400);
  });
});
