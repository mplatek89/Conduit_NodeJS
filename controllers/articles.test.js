const app = require("../index").default; 
const supertest = require("supertest");
const request = supertest(app);

it("Get mature articles", async done => {
    const res = await request.get("api/articles/mature");
    expect(response.status).toBe(200);
    done();
});