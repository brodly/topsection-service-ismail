const chai = require('chai'),
  chaiHttp = require('chai-http'),
  server = require('../server.js'),
  should = chai.expect();

chai.use(chaiHttp);

describe('Main API Routes', () => {

  test('GET / returns a success status code', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status('200');
      })
  })

  test('GET / returns html data', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.be.html;
      })
  })

  test('GET /course returns a success status code', () => {
    chai.request(server)
      .get('/course')
      .query({ courseId: 2 })
      .end((err, res) => {
        expect(res).to.have.status('200');
      })
  })

  test('GET /course returns json data', () => {
    chai.request(server)
      .get('/course')
      .query({ courseId: 2 })
      .end((err, res) => {
        expect(res).to.be.json;
      })
    })
  })

