/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  height: 100vh;
  background: linear-gradient(180.59deg, #161515 0.46%, rgba(22, 21, 21, 0.96) 99.44%);
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const Box = styled.div`
  display: flex;
  min-height: 30em;
  width: 25em;
  padding: 3em;
  background-color: white;
  border-radius: 24px;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  height: 35em;
  flex-direction: column;
  width: 25em;
`;
const Input = styled.input`
  font-family: poppins;
  height: 3em;
  padding: 0 12px;

  margin: 0.6em 0 0.6em 0;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
  position: relative;
  font-family: poppins;
  top: 12px;
  padding-bottom: 12px;
`;
const PasswordField = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  font-family: poppins;
  font-size: 14px;

  height: 3em;
  margin-top: 1em;
  border: none;
  border-radius: 6px;
  ${'' /* background-color: #2f8bfd; */}
  cursor: pointer;
`;

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const config = {
    //   Headers: {

    //   },
    // };
    const data = new FormData(e.currentTarget);
    const formData = {
      fullname: data.get('fullname'),
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    };
    axios.post('http://localhost:8000/api/register', formData).then((response) => {
      if (response.status == 200) {
        useNavigate('login');
      }
    });
    console.log('submitted', formData);
  };

  return (
    <Section>
      <Box>
        <h1 style={{ position: 'relative', left: '40%' }}>Signup</h1>
        <Form onSubmit={handleSubmit} action="submitForm">
          <Label>Full Name</Label>
          <Input
            id="fullname"
            type="text"
            name="fullname"
            placeholder="Enter your Fullname "
            required
          />
          <Label>Username</Label>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="Choose your username "
            required
          />
          <Label>Email Address</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your Email Address "
            required
          />
          <PasswordField>
            <Label>Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
            />
          </PasswordField>
          <Button type="submit">Signup</Button>
        </Form>
      </Box>
    </Section>
  );
};

export default Signup;
