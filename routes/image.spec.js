/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
const request = require('supertest');
const server = require('../api/server');
require('dotenv').config();

const requestBody = {
  imageUrl: 'https://bezkoder.com/wp-content/uploads/2019/09/node-js-upload-multiple-files-feature-image.png',
};

afterAll(() => setTimeout(() => process.exit(), 1000));

describe('json patch route', () => {
  describe('[POST] /api/v1/image', () => {
    test('should return 200 OK', async () => {
      jest.setTimeout(30000);
      const response = await request(server)
        .post('/api/v1/image')
        .send(requestBody)
        .set('Authorization', process.env.TEST_TOKEN);

      expect(response.status).toBe(200);
    });

    test('should filter for valid URL', async () => {
      const response = await request(server)
        .post('/api/v1/image')
        .send({ imageUrl: 'invalid_url' })
        .set('Authorization', process.env.TEST_TOKEN);

      expect(response.status).toBe(400);
    });

    test('handle URL with no downloadable image', async () => {
      const response = await request(server)
        .post('/api/v1/image')
        .send({ imageUrl: 'https://bezkoder.com/wp-content/uploads/2019/09' })
        .set('Authorization', process.env.TEST_TOKEN);

      expect(response.status).toBe(400);
    });
  });
});
