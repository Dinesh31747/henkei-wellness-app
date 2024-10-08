import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArticleIcon from '@mui/icons-material/Article';
import './Navbar.css'; // Add custom styling if needed

const Navbar = ({ role, handleLogout, notificationCount }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Henkei & Wellness Platform
        </Typography>

        {/* Links for main sections */}
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/mental-health">Mental Health</Button>
        <Button color="inherit" component={Link} to="/fitness">Fitness</Button>
        <Button color="inherit" component={Link} to="/nutrition">Nutrition</Button>

        {/* Admin link (visible only for admins) */}
        {role === 'admin' && (
          <Button color="inherit" component={Link} to="/admin">Admin</Button>
        )}

        {/* Notifications Icon with badge */}
        <IconButton color="inherit" component={Link} to="/notifications">
          <Badge badgeContent={notificationCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Blog Icon */}
        <IconButton color="inherit" component={Link} to="/blog">
          <ArticleIcon />
        </IconButton>

        {/* User account actions: login/signup or logout */}
        {role ? (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
