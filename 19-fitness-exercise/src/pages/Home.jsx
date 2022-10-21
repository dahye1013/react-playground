import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercise';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <Exercises />
    </Box>
  );
};

export default Home;
