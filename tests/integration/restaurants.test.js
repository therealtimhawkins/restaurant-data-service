const request = require('supertest');
const {Restaurant} = require('../../src/models/restaurants');
const restaurantMockData = require('../mocks/restaurantMock');

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
    console.log(restaurantMockData.data);
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

    it('should return an error message if there are no restaurants in postcode', async () => {
      const res = await request(server).get('/api/restaurants/E147ZT');
      expect(res.body.length).toBe(0);
    });
  });

  describe('POST /api/restaurant', () => {
    it('should save the body param to the database', async () => {
      const body = {
        name: 'Chesters Chicken',
        postcode: 'E147DX',
        rating: 5
      }

      const res = await request(server).post('/api/restaurants').send(body);
      expect(res.body.name).toEqual('Chesters Chicken');
      expect(res.body.postcode).toEqual('E147DX');
      expect(res.body.rating).toEqual(5);
    });
  });
});