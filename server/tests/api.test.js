const request = require("supertest");
const app = require("../server");

describe("Tests API Bibliothèque", () => {
  test("GET /api/livres doit retourner une liste de livres", async () => {
    const response = await request(app).get("/api/livres");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("titre");
    expect(response.body[0]).toHaveProperty("auteur");
  });
});