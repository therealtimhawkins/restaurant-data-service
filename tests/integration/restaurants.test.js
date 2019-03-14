const request = require('supertest');
const {Restaurant} = require('../../src/models/restaurants');
const restaurantMockData = require('../mocks/restaurantMock');

let server;

describe('GET /api/restaurants', () => {
  it('should return true for aws configuration purposes', () => {
    expect(true).toEqual(true);
  })
});