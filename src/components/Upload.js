import React from 'react';
import styled from 'styled-components';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'poppins';
`;

const Upload = () => {
  return (
    <Container>
      <h2>Upload</h2>
      <p> Choose file you want to Upload</p>
      <div>
        <input type="file" name="file" />
        <select
          onChange={(e) => {
            e.preventDefault();
            const value = e.target.value;

            // fetchBooks(value);
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
      </div>

      <button>Upload</button>
    </Container>
  );
};

export default Upload;
