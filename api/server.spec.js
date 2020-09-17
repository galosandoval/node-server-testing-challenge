const supertest = require("supertest");

const server = require("./server");
const db = require("../data/connection");

describe("server", () => {
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


  describe("POST request", ()=>{
    // beforeEach(async () => {
    //   // trucate or empty the hobbits table
    //   await db("ff7").truncate();
    // });
    it('should post a 201 when correct data is posted', ()=>{
      return supertest(server)
      .post('/character').send({name:'Aerith'}).then(res => {
        expect(res.status).toBe(201)
      })
    })
    it('should post a 400 when passed incorrect data', () =>{
      return supertest(server)
      .post('/character').send({}).then(res=>{
        expect(res.status).toBe(400)
      })
    })
  })


  describe('DELETE request', ()=>{
    it('should post a 204 error code when character is deleted', ()=>{
      return supertest(server)
      .delete('/character/5').then(res=>{
        expect(res.status).toBe(204)
      })
    })
    it('should post an error message if id is not found', () => {
      return supertest(server)
      .delete('/character/100').then(res=>{
        expect(res.body.message).toBe('Could not find scheme with given id')
      })
    })
  })
  
});
