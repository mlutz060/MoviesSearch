const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /search-movies', () => {
  it('should return an array of movie results', async () => {
    const res = await chai.request(app).get('/search-movies?query=example');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body.results).to.be.an('array');
  });
});

