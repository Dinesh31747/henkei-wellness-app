import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Container, List, ListItem, Divider } from '@mui/material';
import { NotificationsActive, Refresh } from '@mui/icons-material';

const Notification = () => {
  const [notifications] = useState([
    { id: 1, title: 'New Fitness Program Launched', message: 'Check out our latest fitness program to help you stay in shape!' },
    { id: 2, title: 'Mental Health Awareness Event', message: 'Join us on the 10th for a virtual mental health awareness session.' },
    { id: 3, title: 'Updated Nutrition Guidelines', message: 'New diet plans have been added. Check them out now!' },
  ]);

  const handleRefresh = () => {
    console.log("Refreshing notifications...");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px', textAlign: 'center' }}>
        <NotificationsActive /> Notifications
        <IconButton onClick={handleRefresh}>
          <Refresh />
        </IconButton>
      </Typography>
      <List>
        {notifications.map((notification) => (
          <React.Fragment key={notification.id}>
            <ListItem>
              <Card variant="outlined" style={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="h6">{notification.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{notification.message}</Typography>
                </CardContent>
              </Card>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default Notification;
