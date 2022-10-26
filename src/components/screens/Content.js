/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { decodedToken } from '../utils';
// import { useNavigate } from 'react-router';

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-content: center;
  margin: 1em;
`;

const Items = styled.div`
  display: grid;
  grid-template-rows: 36% 28% 17%;
  border: 1px solid white;
  border-radius: 14px;

  width: 15em;
  height: 20em;
  padding: 2em;
  gap: 40px;
`;

const Img = styled.img`
  width: 6em;
`;
const Button = styled.a`
  display: flex;
  font-family: poppins;
  font-size: 18px;
  margin: auto;
  width: 5em;
  height: 1.5em;
  padding: 6px;
  text-decoration: none;
  color: white;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 14px;
  &:hover {
    background-color: #4681f4;
  }
`;

const MapItem = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
  }
`;

function Content({ content, save }) {
  //   const navigate = useNavigate();
  console.log(content);

  const handelSave = (book_id) => {
    console.log(decodedToken);
    const data = {
      user_id: decodedToken.id,
      book_id: book_id,
    };
    console.log(data);
    axios.post('http://localhost:8000/api/userBook', data).then((res) => console.log(res));
  };
  return (
    <div>
      <Div style={{ color: 'white' }}>
        {content.map((data) => (
          <Items key={data?.book_id}>
            {save ? (
              <>
                <Img src={require('../../assets/images/pdf.png')} alt={data?.book_id} />
                <MapItem key={data.book_id}>{data.book_name}</MapItem>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button href={`http://localhost:8000/api/${data.path}`}>Preview</Button>
                </div>
              </>
            ) : (
              <>
                <Img src={require('../../assets/images/pdf.png')} alt={data?.book_id} />
                <MapItem key={data.book_id}>{data.book_name}</MapItem>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button href={`http://localhost:8000/api/${data.path}`}>Preview</Button>

                  <Button
                    onClick={() => {
                      handelSave(data.book_id);
                      alert('Saved to your Home');
                    }}>
                    Save
                  </Button>
                </div>
              </>
            )}
          </Items>
        ))}
      </Div>
    </div>
  );
}

export default Content;
