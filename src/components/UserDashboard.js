import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const UserDashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>Mental Health Resources</Typography>
              <Button variant="contained" color="primary" fullWidth>
                Explore
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>Fitness Programs</Typography>
              <Button variant="contained" color="primary" fullWidth>
                Explore
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>Nutrition Plans</Typography>
              <Button variant="contained" color="primary" fullWidth>
                Explore
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
