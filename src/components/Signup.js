import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle signup logic here
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} p={2} boxShadow={3}>
        <Typography variant="h4" gutterBottom>Signup</Typography>
        <form onSubmit={handleSignup}>
          <TextField 
            fullWidth 
            label="Email" 
            margin="normal" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <TextField 
            fullWidth 
            label="Password" 
            type="password" 
            margin="normal" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <TextField 
            fullWidth 
            label="Confirm Password" 
            type="password" 
            margin="normal" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Signup</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
