const request = require("supertest");
const { setupCommunication, app } = require("./services/communicationService");

describe("Test Server Setup", () => {
  test("Test TV Shows Endpoint", async () => {
    setupCommunication([{}]);
    const response = await request(app).get("/tvshows");
    expect(response.statusCode).toBe(200);
  });
});
