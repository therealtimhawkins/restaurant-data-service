const request = require('supertest');
const {Restaurant} = require('../../models/restaurants')

let server;

describe('/api/restaurants', () => {
  beforeEach(() => {
    server = require('../../index');
  });
  afterEach(async () => {
    server.close();
    await Restaurant.remove({});
  });


  describe('GET /', () => {
    it('should return a status of 200', async () => {
      const res = await request(server).get('/api/restaurants');
      expect(res.status).toBe(200);
    })

    it('should return all restaurants', async () => {
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
      ])

      const res = await request(server).get('/api/restaurants');
      expect(res.body.length).toBe(2);
    });
  });
});