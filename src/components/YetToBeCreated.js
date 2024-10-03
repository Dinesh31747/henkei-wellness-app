import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function YetToBeCreated() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Yet To Be Created
        </Typography>
        <Typography variant="body2" color="textSecondary">
          This component is currently under development.
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <CircularProgress />
        </div>
      </CardContent>
    </Card>
  );
}

export default YetToBeCreated;