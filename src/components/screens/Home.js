import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { decodedToken } from '../utils';
import styled from 'styled-components';

import Content from './Content';

const Label = styled.label`
  font-family: poppins sans-serif;
  font-size: 20px;
  font-weight: normal;
  position: relative;
  left: 45vw;
`;

const Div = styled.div`
  display: flex;
  justifycontent: center;
`;

const Home = () => {
  const [savedBooks, setSavedBooks] = useState('');

  useEffect(() => {
    const fetchSaveBooks = async () => {
      let response = await axios.get('http://localhost:8000/api/userBook', {
        params: {
          user_id: decodedToken.id,
        },
      });
      console.log(response.data);
      setSavedBooks(response.data);
    };
    fetchSaveBooks();
  }, []);
  if (savedBooks == '') {
    return null;
  }
  console.log(savedBooks);
  return (
    <Div>
      <div style={{ color: 'white' }}>
        <Label>Saved Books</Label>
        <Content content={savedBooks} save={true} />
      </div>
    </Div>
  );
};

export default Home;
