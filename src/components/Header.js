/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.section``;
const NavBar = styled.div`
  display: flex;
  height: 6em;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  font-family: kalam;
`;
const Logo = styled.a`
  text-decoration: none;
  font-size: 24px;
  margin-left: 2em;
  flex: 1;
  justify-content: flex-start;
  color: #fff;
  cursor: pointer;
`;

const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  margin: 0.5em;
  font-size: 14px;
  height: 2.5em;
  width: 8em;
  background: transparent;
  border: none;
  border-radius: 12px;
  color: white;
  transition: ease;
  cursor: pointer;
  &:hover {
    border: 0.2px white solid;
  }
  &:active {
    background: #282828;
  }
  &:focus {
    background: #2b28d3;
  }
  &:last-of-type {
    margin-right: 9em;
  }
`;
const Header = () => {
  return (
    <Container>
      <NavBar>
        <Logo href="/">Digital Library</Logo>
        <Button to="home">Home</Button>
        <Button to="books">Books</Button>
        <Button to="profile">Profile</Button>
      </NavBar>
    </Container>
  );
};

export default Header;
