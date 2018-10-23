const request = require('supertest');
const {Restaurant} = require('../../models/restaurants')

let server;

describe('GET /api/restaurants', () => {
  beforeEach( async () => {
    server = require('../../index');
    await Restaurant.collection.insertMany([
      { name: 'Chesters Chicken',
        postcode: 'E147DX',
        rating: 5
      },
      {
        name: 'Diamond Pizza',
        postcode: 'E146QP',
        rating: 4
      }
    ]);
  });
  afterEach(async () => {
    server.close();
    await Restaurant.remove({});
  });


  describe('GET /api/restaurant', () => {
    it('should return a status of 200', async () => {
      const res = await request(server).get('/api/restaurants');
      expect(res.status).toBe(200);
    });

    it('should return all restaurants', async () => {
      const res = await request(server).get('/api/restaurants');
      expect(res.body.length).toBe(2);
    });
  });

  describe('GET /api/restaurant/POSTCODE', () => {
    it('should return a status of 200', async () => {
      const res = await request(server).get('/api/restaurants/E147DX');
      expect(res.status).toBe(200);
    });

    it('should return restaurants in the postcode param', async () => {
      const res = await request(server).get('/api/restaurants/E147DX');
      expect(res.body.length).toBe(1);
    });
  });

  describe('POST /api/restaurant', () => {
    it('should save the body param to the database', () => {

    });
  });
});