const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server"); // Import the Express app

describe("API Endpoints", () => {
  
  // Close MongoDB connection after tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Test /rates API
  it("should return a list of mortgage rates", async () => {
    const res = await request(app).get("/api/rates");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy(); // Should return an array
  });

  // Test /best-worst-days API
  it("should return the best and worst days to price the loan", async () => {
    const res = await request(app).get("/api/best-worst-days");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("bestDay");
    expect(res.body).toHaveProperty("worstDay");
  });

  // Test an unknown route
  it("should return 404 for unknown routes", async () => {
    const res = await request(app).get("/unknown-route");
    expect(res.statusCode).toBe(404);
  });

  // Test specific best and worst day values
  it("should return best day as 2024-02-17 and worst day as 2024-02-14", async () => {
    const res = await request(app).get("/api/best-worst-days");
    expect(res.statusCode).toBe(200);
    expect(res.body.bestDay).toBe("2024-02-17");
    expect(res.body.worstDay).toBe("2024-02-14");
  });

});
