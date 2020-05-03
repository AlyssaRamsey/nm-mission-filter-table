const axios = require("axios");
const { getTVSchedule } = require("./tvScheduleService");
const config = require("../config");

/**
 * Test cases will mock the API calls being made via tvScheduleService.js
 */
jest.mock("axios");

describe("API Service Test", () => {
  test("Test API Call: Success", async () => {
    const response = { tvShows: [{}] };
    axios.mockResolvedValue(response);
    await expect(getTVSchedule()).resolves.toEqual(response);
    expect(axios).toBeCalled();
    expect(axios).toBeCalledWith(config.tvSchedule.baseUrl);
  });

  test("Test API Call: Error Code", async () => {
    expect.assertions(3);
    const error = {
      response: {
        status: 500,
        data: "server error",
      },
    };
    axios.mockRejectedValue(error);
    expect(axios).toBeCalled();
    expect(axios).toBeCalledWith(config.tvSchedule.baseUrl);
    await expect(getTVSchedule()).rejects.toThrow(
      "Request to API failed with status 500: server error"
    );
  });

  test("Test API Call: No Response", async () => {
    expect.assertions(3);
    const error = {
      request: {},
      message: "no response",
    };
    axios.mockRejectedValue(error);
    expect(axios).toBeCalled();
    expect(axios).toBeCalledWith(config.tvSchedule.baseUrl);
    await expect(getTVSchedule()).rejects.toThrow(
      "No response received from API: no response"
    );
  });

  test("Test API Call: Generic Error", async () => {
    expect.assertions(3);
    const error = { message: "generic error" };
    axios.mockRejectedValue(error);
    expect(axios).toBeCalled();
    expect(axios).toBeCalledWith(config.tvSchedule.baseUrl);
    await expect(getTVSchedule()).rejects.toThrow(
      "Error sending request to API: generic error"
    );
  });
});
