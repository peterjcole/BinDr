const {app} = require('../index');
const request = require('supertest');
const api = request(app);

describe('main page loads', () => {
  test('shows main page', () => {
    api.get('/').expect(200);
  });
});