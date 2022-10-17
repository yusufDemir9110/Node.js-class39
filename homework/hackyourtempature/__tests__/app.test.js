import app from "../app.js";
import request from "supertest";

describe("post", () => {
  it("returns content-type as application/json", async () => {
    const res = await request(app).post("/weather");
    expect(res.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
  });
  it("returns status code 200 if cityName is passed", async () => {
    const res = await request(app)
      .post("/weather")
      .send({ cityName: "Amsterdam" });
    expect(res.statusCode).toEqual(200);
  });

  it("returns bad request if cityName is missing", async () => {
    const res = await request(app).post("/weather").send({ cityName: "" });
    expect(res.statusCode).toEqual(400);
  });
});
