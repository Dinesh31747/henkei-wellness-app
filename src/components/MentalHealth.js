import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MentalHealthPlanCard from '../components/MentalHealthPlanCard';

const MentalHealth = () => {
    const mentalHealthPlans = [
        {
            name: "Individual Therapy",
            description: "One-on-one sessions with a licensed therapist to address personal mental health concerns.",
            image: "https://via.placeholder.com/300x140?text=Individual+Therapy",
            link: "/mental-health-plans/individual",
        },
        {
            name: "Group Therapy",
            description: "Engage in group sessions to share experiences and support with others facing similar challenges.",
            image: "https://via.placeholder.com/300x140?text=Group+Therapy",
            link: "/mental-health-plans/group",
        },
        {
            name: "Family Counseling",
            description: "Work through family-related concerns with the help of a professional counselor.",
            image: "https://via.placeholder.com/300x140?text=Family+Counseling",
            link: "/mental-health-plans/family",
        },
        {
            name: "Crisis Counseling",
            description: "Immediate support for individuals in crisis situations who need urgent mental health help.",
            image: "https://via.placeholder.com/300x140?text=Crisis+Counseling",
            link: "/mental-health-plans/crisis",
        }
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Mental Health Counseling Programs</Typography>
            <Typography variant="body1">
                Explore various mental health counseling options tailored to meet your needs. Find the right plan and support.
            </Typography>
            <h1>Mental Health Plans</h1>
            <Grid container spacing={2}>
                {mentalHealthPlans.map((plan, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <MentalHealthPlanCard plan={plan} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MentalHealth;
