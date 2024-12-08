import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import emailjs from 'emailjs-com';

const Login = ({ onLoginSuccess }) => {
  const [selectedRole, setSelectedRole] = useState('user'); // Default to user
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser) {
      if (username === storedUser.email && password === storedUser.password) {
        if (storedUser.role === selectedRole) {
          // Send login confirmation email
          emailjs
            .send(
              'service_2gshur8',
              'template_1mjjnik',
              { email: storedUser.email, role: storedUser.role },
              'f6byxJMxQ8o6_M1Ue'
            )
            .then(() => {
              onLoginSuccess(selectedRole);
              navigate(`/${selectedRole}`);
            })
            .catch((error) => console.error('Failed to send email:', error));
        } else {
          setError('Role mismatch, please select the correct role.');
        }
      } else {
        setError('Invalid username or password.');
      }
    } else {
      setError('No user found, please sign up first.');
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
