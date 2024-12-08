import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import emailjs from 'emailjs-com'; // Import EmailJS

const Signup = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = { email, phone, password, role };
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Signup successful!');

    // Send email to the user
    emailjs
      .send(
        'service_2gshur8', // Replace with your EmailJS service ID
        'template_py1zkwm', // Replace with your EmailJS template ID
        {
          email: email,
          message: `Hello ${email}, you have successfully signed up with the role of ${role}. Welcome!`,
        },
        'f6byxJMxQ8o6_M1Ue' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          console.log('Email sent successfully');
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
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
            label="Phone"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

          <RadioGroup
            row
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <FormControlLabel value="user" control={<Radio />} label="User" />
            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          </RadioGroup>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
