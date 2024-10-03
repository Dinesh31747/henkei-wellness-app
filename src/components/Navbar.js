import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add custom styling if needed

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Health & Wellness Platform
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/mental-health">Mental Health</Button>
        <Button color="inherit" component={Link} to="/fitness">Fitness</Button>
        <Button color="inherit" component={Link} to="/nutrition">Nutrition</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/signup">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
