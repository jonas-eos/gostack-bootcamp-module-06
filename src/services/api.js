import axios from 'axios';

/**
 * This is api manipulator for github.
 * @const api
 * @type {object}
 * @default
 */
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
