import React from 'react';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes } from './pages/Routes';
const App = () => {
  return (
    <Box width="400px">
      <NavBar />
      <Routes />
      <Footer />
    </Box>
  );
};

export default App;
