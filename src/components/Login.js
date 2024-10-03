import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Login = ({ setRole }) => {
  const [selectedRole, setSelectedRole] = useState('user'); // Default to user
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('role', selectedRole); // Store role in localStorage
    setRole(selectedRole);
    if (selectedRole === 'admin') {
      navigate('/admin'); // Redirect to admin page
    } else {
      navigate('/user'); // Redirect to user page
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>

      <RadioGroup
        row
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <FormControlLabel value="user" control={<Radio />} label="User" />
        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
      </RadioGroup>

      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        style={{ marginTop: '20px' }}
      >
        Login as {selectedRole === 'admin' ? 'Admin' : 'User'}
      </Button>
    </Container>
  );
};

export default Login;
