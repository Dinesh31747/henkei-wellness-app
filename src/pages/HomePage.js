import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeCarousel from '../components/HomeCarousel';


const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to the Health & Wellness Platform</Typography>
      <Typography variant="body1" paragraph>
        Access resources for mental health, fitness, and nutrition to help improve your overall well-being.
      </Typography>

      <Box mt={4}>
        <HomeCarousel />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth component={Link} to="/mental-health">Mental Health</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth component={Link} to="/fitness">Fitness</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" fullWidth component={Link} to="/nutrition">Nutrition</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;

