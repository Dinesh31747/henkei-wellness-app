import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box mt={5} p={3} bgcolor="primary.main" color="white" textAlign="center">
      {/* Footer branding and copyright */}
      <Typography variant="h6">
        Henkei & Wellness Platform
      </Typography>
      <Typography variant="body2" gutterBottom>
        © 2024 Henkei & Wellness Platform. All rights reserved.
      </Typography>

      {/* Links for Privacy Policy and Terms */}
      <Typography variant="body2">
        <Link href="/developing" color="inherit" underline="hover">Privacy Policy</Link> | 
        <Link href="/developing" color="inherit" underline="hover">Terms of Service</Link>
      </Typography>

      {/* Social Media Icons */}
      <Box mt={2}>
        <IconButton href="https://www.facebook.com" target="_blank" color="inherit" aria-label="Facebook">
          <Facebook />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" color="inherit" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" color="inherit" aria-label="Instagram">
          <Instagram />
        </IconButton>
        <IconButton href="https://www.linkedin.com" target="_blank" color="inherit" aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://www.youtube.com" target="_blank" color="inherit" aria-label="YouTube">
          <YouTube />
        </IconButton>
      </Box>

      {/* Additional recommendations */}
      <Box mt={2}>
        <Typography variant="body2" gutterBottom>
          Follow us on social media for the latest updates and wellness tips!
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
