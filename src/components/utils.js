import jwt_decode from 'jwt-decode';
import { useState } from 'react';

let accessToken = localStorage.accessToken;

let decodedToken = jwt_decode(accessToken);
// eslint-disable-next-line no-unused-vars
function decsode() {
  const [decodedToken, setDecodeToken] = useState();
  if (accessToken !== undefined) {
    try {
      let data = jwt_decode(accessToken);
      setDecodeToken(data);
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.removeItem('accessToken');
      }
    } catch (e) {
      console.log(e);
    }
  }
  return decodedToken;
}
export { decodedToken, accessToken };
