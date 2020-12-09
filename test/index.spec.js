const chai = require("chai");
const app = require("../src/index");
const chaiHttp = require("chai-http");
expect = chai.expect;
chai.use(chaiHttp);

describe("Express server", () => {
  describe("/", () => {
    it("Responds with status 200", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
