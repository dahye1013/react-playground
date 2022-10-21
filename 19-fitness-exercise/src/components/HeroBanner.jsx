import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box>
      <Typography
        color="#ff2625"
        fontWeight="600"
        fontSize="26px"
        sx={{
          mt: { lg: '212px', xs: '7-px' },
          ml: { sm: '50px' },
        }}
        position="relative"
        p="20px"
      >
        Fitness Club
      </Typography>
      <Typography>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography>Check out the most effective exercises</Typography>
    </Box>
  );
};

export default HeroBanner;
