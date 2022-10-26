/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Content from './Content';
import { accessToken } from '../utils';

const OPTIONLIST = [
  'First Semester',
  'Second Semester',
  'Third Semester',
  'Fourth Semester',
  'Fifth Semester',
  'Sixth Semester',
  'Seventh Semester',
  'Eigth Semester',
];
``;
const Container = styled.section`
  margin: 12px;
`;
const Sidebar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

// let accessToken = localStorage.accessToken;

const SearchInput = styled.div`
  max-width: 16em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5em;
  margin-right: 2em;
`;

const Input = styled.input`
  font-family: poppins;
  width: 16em;
  height: 2.5em;
  border-radius: 12px;
  border: none;
  padding-left: 10px;
  padding-right: 40px;
`;
const Img = styled.img`
  margin-left: 14em;
  width: 20px;
  position: absolute;
  cursor: pointer;
`;

const Books = () => {
  const navigate = useNavigate();
  const [semesters, setSemesters] = useState([]);
  const [searchState, setSearchState] = useState('');

  const fetchSearchResults = async () => {
    let response = await axios.get(`http://localhost:8000/api/searchBook/${searchState}`, {
      headers: {
        token: accessToken,
      },
    });
    setSemesters(response.data);
    console.log(response.data);
  };
  const fetchBooks = async (value) => {
    await axios
      .get(`http://localhost:8000/api/getBooks/${value}`, {
        headers: {
          token: accessToken,
        },
      })
      .then((response) => {
        setSemesters(response.data);
      })
      .catch((error) => {
        if (error) {
          navigate('/');
        }
        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <Sidebar>
          <select
            onChange={(e) => {
              e.preventDefault();
              const value = e.target.value;

              fetchBooks(value);
            }}>
            <option value="" selected disabled hidden>
              Choose Semester
            </option>
            {OPTIONLIST.map((value, index) => (
              <option value={index + 1} key={index}>
                {value}
              </option>
            ))}
          </select>

          <SearchInput>
            <Input
              id="search"
              type="text"
              value={searchState}
              placeholder="Search Books"
              onChange={(e) => {
                let value = e.target.value;
                setSearchState(value);
                console.log(searchState);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  fetchSearchResults();
                }
              }}
            />

            <Img
              src={require('../../assets/images/search.png')}
              alt="search"
              onClick={() => {
                fetchSearchResults();
              }}
            />
          </SearchInput>
        </Sidebar>
      </Container>
      {semesters ? <Content content={semesters} save={false} /> : null}
    </>
  );
};

export default Books;
