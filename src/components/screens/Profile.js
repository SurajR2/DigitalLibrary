import axios from 'axios';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { decodedToken, accessToken } from '../utils';

import Upload from '../Upload';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;
const Detail = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justifycontent: space-between;
  align-items: flex-start;

  height: 100vh;

  border-right: 1px solid white;
  font-family: 'poppins';
`;

const Profile = () => {
  const [viewUpload, setViewUpload] = useState(false);
  const [user, setUser] = useState('');

  const fetchUser = async () => {
    let data = decodedToken?.email;
    let response = await axios.get(`http://localhost:8000/api/getUser`, {
      params: {
        email: data,
      },
      headers: {
        token: accessToken,
      },
    });
    setUser(response.data);

    console.log(response.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  console.log(accessToken);
  return (
    <Container>
      <Detail>
        <p>Name: {user?.fullname}</p>
        <p>Username : {user?.username}</p>
        <p>Email : {user?.email}</p>
        <button>Change Password</button>
        <button
          onClick={() => {
            if (viewUpload == false) {
              setViewUpload(true);
            } else {
              setViewUpload(false);
            }
          }}>
          Upload
        </button>
      </Detail>

      {viewUpload ? <Upload /> : null}
    </Container>
  );
};

export default Profile;
