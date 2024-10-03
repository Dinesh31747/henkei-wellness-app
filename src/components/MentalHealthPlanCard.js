import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MentalHealthPlanCard = ({ plan }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px' }}>
            <CardMedia
                component="img"
                height="140"
                image={plan.image}
                alt={plan.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {plan.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {plan.description}
                </Typography>
                <Link to={plan.link} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                        Learn More
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default MentalHealthPlanCard;
