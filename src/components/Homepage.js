// import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;
const Hero = styled.div`
  width: 30em;
  display: flex;
  text-align: center;
  color: white;
  font-size: 38px;
`;
const Homepage = () => {
  return (
    <>
      <HeroSection>
        <Hero>
          Need for pokhara university engineering notes please login first to access all the books
        </Hero>
        <div>
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </HeroSection>
    </>
  );
};

export default Homepage;
