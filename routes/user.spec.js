/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
const request = require('supertest');
const server = require('../api/server');

describe('user route', () => {
  describe('[POST] /api/users/login endpoint', () => {
    test('should return 200 OK', async () => {
      const response = await request(server)
        .post('/api/users/login')
        .send({ username: 'Solomon', password: 'lane' });

      expect(response.status).toBe(200);
    });

    test('should return 401 Unauthorized', async () => {
      const response = await request(server)
        .post('/api/users/login');

      expect(response.status).toBe(401);
    });
  });
});
