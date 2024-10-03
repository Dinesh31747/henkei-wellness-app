import React, { useContext, useState } from 'react';
import { ContentContext } from '../context/ContentContext';
import { Button, TextField, Container, Typography } from '@mui/material';

const AdminPage = () => {
  const { content, setContent } = useContext(ContentContext); // Access context
  const [newContent, setNewContent] = useState(content);

  const handleSave = () => {
    setContent(newContent); // Update content
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Panel</Typography>
      <Typography variant="body1">Modify the content here:</Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Content"
        multiline
        rows={4}
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Changes
      </Button>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Current Content: {content}
      </Typography>
    </Container>
  );
};

export default AdminPage;
