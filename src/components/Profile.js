import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserData(storedUser);
    } else {
      navigate('/login'); // Redirect to login if no user data is found
    }
  }, [navigate]);

  const handleSave = () => {
    // Save updated data to localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} p={2} boxShadow={3}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <form>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={userData.email}
            name="email"
            onChange={handleChange}
            disabled={!isEditing}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="normal"
            value={userData.phone}
            name="phone"
            onChange={handleChange}
            disabled={!isEditing}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={userData.password}
            name="password"
            onChange={handleChange}
            disabled={!isEditing}
          />
          {!isEditing ? (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '20px' }}
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '20px' }}
                onClick={handleSave}
              >
                Save Changes
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                style={{ marginTop: '10px' }}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </>
          )}
        </form>

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: '20px' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
