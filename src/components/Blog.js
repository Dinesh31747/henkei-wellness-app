import React, { useState } from 'react';
import { Container, TextField, Button, Card, CardContent, Typography, Grid, IconButton, Avatar } from '@mui/material';
import { PhotoCamera, VideoCall, Send } from '@mui/icons-material';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handlePostSubmit = () => {
    if (newPost || image || video) {
      setPosts([...posts, { id: posts.length + 1, text: newPost, image, video }]);
      setNewPost('');
      setImage(null);
      setVideo(null);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px', textAlign: 'center' }}>
        User Reviews & Blog Posts
      </Typography>

      {/* Blog Submission Section */}
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6">Share Your Experience</Typography>
          <TextField
            label="Write a review or post..."
            fullWidth
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            multiline
            rows={4}
            variant="outlined"
            style={{ marginBottom: '10px' }}
          />

          {/* Upload Buttons */}
          <Grid container spacing={2}>
            <Grid item>
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
              />
              <label htmlFor="image-upload">
                <IconButton color="primary" component="span">
                  <PhotoCamera /> Add Photo
                </IconButton>
              </label>
            </Grid>

            <Grid item>
              <input
                accept="video/*"
                id="video-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
              />
              <label htmlFor="video-upload">
                <IconButton color="secondary" component="span">
                  <VideoCall /> Add Video
                </IconButton>
              </label>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Send />}
                onClick={handlePostSubmit}
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Displaying Posts */}
      {posts.length === 0 ? (
        <Typography variant="h6" color="textSecondary" style={{ textAlign: 'center' }}>
          No posts yet. Be the first to share!
        </Typography>
      ) : (
        posts.map((post) => (
          <Card key={post.id} style={{ marginBottom: '20px' }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar>{post.text.charAt(0)}</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="body1">{post.text}</Typography>
                  {post.image && <img src={post.image} alt="User post" style={{ width: '100%', maxHeight: '300px', marginTop: '10px' }} />}
                  {post.video && (
                    <video controls style={{ width: '100%', maxHeight: '300px', marginTop: '10px' }}>
                      <source src={post.video} type="video/mp4" />
                    </video>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Blog;
