import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5} p={3} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body2">
        © 2024 Health & Wellness Platform. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="/developing" color="inherit">Privacy Policy</Link> | <Link href="/developing" color="inherit">Terms of Service</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
