/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
const getToken = require('./generateToken');

describe('server', () => {
  describe('check token generation', () => {
    test('should return a token when username and password is passed in', async () => {
      const token = getToken({
        username: 'john',
        password: 'flyboy',
      });

      expect(token).toBeDefined();
    });
  });
});
