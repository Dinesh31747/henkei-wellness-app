import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import NutritionAdviceCard from '../components/NutritionAdviceCard';

import vegan from '../assets/vegan.jpeg'
import weightloss from '../assets/weightloss.jpeg'
import musclegain from '../assets/musclegain.jpeg'
import balanced from '../assets/balanced.jpeg'
const Nutrition = () => {
    const nutritionPlans = [
        {
            name: "Balanced Diet Plan",
            description: "A well-rounded diet plan for maintaining a healthy lifestyle.",
            image: balanced,
            link: "/developing",
        },
        {
            name: "Weight Loss Plan",
            description: "A tailored plan focused on safe and sustainable weight loss.",
            image: weightloss,
            link: "/developing",
        },
        {
            name: "Muscle Gain Plan",
            description: "A high-protein plan aimed at building muscle and strength.",
            image: musclegain,
            link: "/developing",
        },
        {
            name: "Vegan Nutrition",
            description: "A plant-based nutrition guide for those following a vegan diet.",
            image: vegan,
            link: "/developing",
        }
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Nutrition Advice</Typography>
            <Typography variant="body1">
                Discover nutrition plans that suit your lifestyle and goals. Whether you're looking to lose weight, gain muscle, or maintain a healthy diet, we have the right plan for you.
            </Typography>
            <h1>Nutrition Plans</h1>
            <Grid container spacing={2}>
                {nutritionPlans.map((plan, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <NutritionAdviceCard plan={plan} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Nutrition;
