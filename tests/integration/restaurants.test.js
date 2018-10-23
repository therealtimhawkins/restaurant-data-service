const request = require('supertest');
let server;

describe('/api/restaurants', () => {
  beforeEach(() => {
    server = require('../../index');
  });
  afterEach(() => {
    server.close();
  });


  describe('GET /', () => {
    it('should return all restaurants', async () => {
      const res = await request(server).get('/api/restaurants');
      expect(res.status).toBe(200);
    });
  });
});