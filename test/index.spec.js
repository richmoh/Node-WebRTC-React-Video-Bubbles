const chai = require("chai");
const app = require("../src/index");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const should = chai.should();
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

  describe("/status", () => {
    it("Responds with status 200", (done) => {
      chai
        .request(app)
        .get("/status")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Serves status contents from template", (done) => {
      chai
        .request(app)
        .get("/status")
        .end((err, res) => {
          console.log("res", res.text);

          res.text.should.match(/<h1>Server running on port 8080<\/h1>/);
          done();
        });
    });
  });
});
