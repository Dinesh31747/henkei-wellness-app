/*import React from 'react';
import { Container, Typography } from '@mui/material';

const Fitness = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Fitness Programs</Typography>
      <Typography variant="body1">
        Explore fitness programs designed to improve your physical health. Participate in tailored workouts and track your progress.
      </Typography>
    </Container>
  );
};

export default Fitness;*/
import React from 'react';
import { Container, Grid, Typography} from '@mui/material';
import FitnessPlanCard from '../components/FitnessPlanCard';

const Fitness = () => {
    const fitnessPlans = [
        {
            name: "Beginner's Workout",
            description: "A 4-week program to get you started on your fitness journey.",
            image: "https://via.placeholder.com/300x140?text=Beginner%27s+Workout",
            link: "/fitness-plans/beginner",
        },
        {
            name: "Intermediate Training",
            description: "An 8-week program designed for those who have some experience.",
            image: "https://via.placeholder.com/300x140?text=Intermediate+Training",
            link: "/fitness-plans/intermediate",
        },
        {
            name: "Advanced Strength",
            description: "A rigorous 12-week strength training program.",
            image: "https://via.placeholder.com/300x140?text=Advanced+Strength",
            link: "/fitness-plans/advanced",
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
