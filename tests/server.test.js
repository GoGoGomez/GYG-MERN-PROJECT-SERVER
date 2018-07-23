const request = require('supertest');
const expect = require('expect');

const {app} = require('../server');

describe('Server', () => {
  describe('GET /api/menu', () => {
    it('should return item objects', (done) => {
      request(app)
        .get('/api/menu')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            title: 'Drinks'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Andrew',
            age: 25
          });
        })
        .end(done);
    });
  });
});
