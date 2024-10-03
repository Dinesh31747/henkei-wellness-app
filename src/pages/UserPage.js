import React, { useContext } from 'react';
import { ContentContext } from '../context/ContentContext';
import { Container, Typography } from '@mui/material';

const UserPage = () => {
  const { content } = useContext(ContentContext); // Access context

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User View</Typography>
      <Typography variant="body1">Here is the current content:</Typography>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        {content}
      </Typography>
    </Container>
  );
};

export default UserPage;
