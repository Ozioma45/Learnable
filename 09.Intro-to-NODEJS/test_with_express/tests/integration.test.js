const request = require("supertest");
const app = require("../app");
const constants = require("../constants");
const { MESSAGES } = constants;

describe("Testing api routes", () => {
  it("it should get all users", async () => {
    const { body } = await request(app).get("/api/v1/users");
    expect(body.message).toEqual(MESSAGES.FETCHED);
    expect(body.success).toEqual(true);
    expect(body.success).toBeTruthy(true);
  });
});
