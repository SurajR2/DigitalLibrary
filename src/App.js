import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
// import Home from './components/screens/Home';
import Header from './components/Header';
import Home from './components/screens/Home';
import Books from './components/screens/Books';
import Profile from './components/screens/Profile';

const Page = styled.div`
  min-height: 100vh;
  padding: 0.5em;
  background: linear-gradient(180.59deg, #161515 0.46%, rgba(22, 21, 21, 0.96) 99.44%);
`;
const App = () => (
  <Page>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Header />
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="home" element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </Page>
);
export default App;
