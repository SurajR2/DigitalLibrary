/* eslint-disable no-undef */
const jwt_decode = require('jwt-decode');
const token = localStorage.accessToken;
const decodedToken = jwt_decode(token);
console.log(decodedToken);
