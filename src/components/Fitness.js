import React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import FitnessPlanCard from '../components/FitnessPlanCard';

import basic from '../assets/basic.png'
import inter from '../assets/inter.png'
import advanced from '../assets/advance.png'
import winterarc from '../assets/winterarc.jpg'

const Fitness = () => {
    const fitnessPlans = [
        {
            name: "Beginner's Workout",
            description: "A 4-week program to get you started on your fitness journey.",
            image: basic,
            link: "/developing",
        },
        {
            name: "Intermediate Training",
            description: "An 8-week program designed for those who have some experience.",
            image: inter,
            link: "/developing",
        },
        {
            name: "Advanced Strength",
            description: "A rigorous 12-week strength training program.",
            image: advanced,
            link: "/developing",
        },
        {
            name: "Winter Arc",
            description: "A rigorous 12-week strength training program.",
            image: winterarc,
            link: "/winterarc",
        }
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Fitness Programs</Typography>
            <Typography variant="body1">
                Explore fitness programs designed to improve your physical health. Participate in tailored workouts and track your progress.
            </Typography>
            <h1>Fitness Plans</h1>
            <Grid container spacing={2}>
                {fitnessPlans.map((plan, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <FitnessPlanCard plan={plan} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Fitness;
