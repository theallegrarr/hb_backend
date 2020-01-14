/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
const request = require('supertest');
const server = require('../api/server');
require('dotenv').config();

const patchObject = {
  jsonObject: {
    baz: 'qux',
    foo: 'bar',
  },
  jsonPatchObject: [{
    op: 'replace',
    path: '/baz',
    value: 'boo',
  },
  ],
};

describe('json patch route', () => {
  describe('[POST] /api/patch', () => {
    test('should return 200 OK', async () => {
      const response = await request(server)
        .post('/api/patch')
        .send(patchObject)
        .set('Authorization', process.env.TEST_TOKEN);

      expect(response.status).toBe(200);
    });

    test('should return 400 Error', async () => {
      const response = await request(server)
        .post('/api/patch')
        .set('Authorization', process.env.TEST_TOKEN);

      expect(response.status).toBe(400);
    });

    test('should return 401 Unauthorized', async () => {
      const response = await request(server)
        .post('/api/patch')
        .send(patchObject);

      expect(response.status).toBe(401);
    });

    test('should return 401 for wrong token', async () => {
      const response = await request(server)
        .post('/api/patch')
        .send(patchObject)
        .set('Authorization', 'wrong_token');

      expect(response.status).toBe(401);
    });

    test('should return 401 Unauthorized', async () => {
      const response = await request(server)
        .post('/api/users/login');

      expect(response.status).toBe(401);
    });
  });
});
