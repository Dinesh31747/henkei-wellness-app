import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import NutritionAdviceCard from '../components/NutritionAdviceCard';

const Nutrition = () => {
    const nutritionPlans = [
        {
            name: "Balanced Diet Plan",
            description: "A well-rounded diet plan for maintaining a healthy lifestyle.",
            image: "https://via.placeholder.com/300x140?text=Balanced+Diet+Plan",
            link: "/nutrition-advice/balanced-diet",
        },
        {
            name: "Weight Loss Plan",
            description: "A tailored plan focused on safe and sustainable weight loss.",
            image: "https://via.placeholder.com/300x140?text=Weight+Loss+Plan",
            link: "/nutrition-advice/weight-loss",
        },
        {
            name: "Muscle Gain Plan",
            description: "A high-protein plan aimed at building muscle and strength.",
            image: "https://via.placeholder.com/300x140?text=Muscle+Gain+Plan",
            link: "/nutrition-advice/muscle-gain",
        },
        {
            name: "Vegan Nutrition",
            description: "A plant-based nutrition guide for those following a vegan diet.",
            image: "https://via.placeholder.com/300x140?text=Vegan+Nutrition",
            link: "/nutrition-advice/vegan",
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
