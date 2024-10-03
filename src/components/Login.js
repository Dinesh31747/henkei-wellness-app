import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';

const Login = ({ onLoginSuccess }) => {
  const [selectedRole, setSelectedRole] = useState('user'); // Default to user
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Example hardcoded credentials for demo purposes
  const credentials = {
    admin: { username: 'admin', password: 'admin123' },
    user: { username: 'user', password: 'user123' }
  };

  const handleLogin = () => {
    const validCredentials = credentials[selectedRole];

    // Check if entered credentials match the stored ones
    if (username === validCredentials.username && password === validCredentials.password) {
      onLoginSuccess(selectedRole); // Call the function passed from the parent
      navigate(selectedRole === 'admin' ? '/admin' : '/user');
    } else {
      setError('Invalid username or password');
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

      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={Boolean(error)} // Show error state if error exists
        helperText={error} // Show error message
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={Boolean(error)} // Show error state if error exists
        helperText={error} // Show error message
      />

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
