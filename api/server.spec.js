const supertest = require("supertest");

const server = require("./server");
const db = require("../data/connection");

describe("server", () => {
  // describe("environment", () => {
  //   it('should set the DB_ENV variable to "testing"', () => {
  //     expect(process.env.DB_ENV).toBe("testing");
  //   });
  // });
  describe("GET request", () => {
    it("should return with a HTTP status 200", () => {
      return supertest(server).get('/character').then(res=> {
        expect(res.status).toBe(200)
      })
    });
    it("should return JSON", async () => {
      const res = await supertest(server).get("/");

      expect(res.type).toMatch(/json/i);
    });
    it("should return an api property with the value up", async () => {
      const res = await supertest(server).get("/");

      expect(res.body.api).toBe("up");
    });
  });
  
});
