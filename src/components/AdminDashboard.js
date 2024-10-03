import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Manage Mental Health Resources</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Manage Fitness Programs</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Manage Nutrition Advice</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
