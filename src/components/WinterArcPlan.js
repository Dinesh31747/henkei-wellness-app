import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const winterArcPlans = {
    dietPlans: {
        vegan: [
            {
                meal: "Breakfast",
                items: ["Oatmeal with almond milk, chia seeds, and berries"],
                calories: 300,
                protein: 10,
                carbs: 60,
                fats: 5,
            },
            {
                meal: "Lunch",
                items: ["Quinoa salad with chickpeas, cucumber, and olive oil"],
                calories: 400,
                protein: 15,
                carbs: 65,
                fats: 10,
            },
            {
                meal: "Dinner",
                items: ["Lentil stew with mixed vegetables"],
                calories: 350,
                protein: 18,
                carbs: 55,
                fats: 5,
            },
            {
                meal: "Snack",
                items: ["Carrots and hummus"],
                calories: 150,
                protein: 5,
                carbs: 30,
                fats: 3,
            },
        ],
        omnivore: [
            {
                meal: "Breakfast",
                items: ["Scrambled eggs with spinach and whole grain toast"],
                calories: 350,
                protein: 20,
                carbs: 30,
                fats: 15,
            },
            {
                meal: "Lunch",
                items: ["Grilled chicken salad with avocado"],
                calories: 450,
                protein: 35,
                carbs: 25,
                fats: 20,
            },
            {
                meal: "Dinner",
                items: ["Baked salmon with sweet potatoes and broccoli"],
                calories: 500,
                protein: 40,
                carbs: 45,
                fats: 15,
            },
            {
                meal: "Snack",
                items: ["Greek yogurt with honey"],
                calories: 200,
                protein: 10,
                carbs: 30,
                fats: 5,
            },
        ],
        vegetarian: [
            {
                meal: "Breakfast",
                items: ["Smoothie with banana, spinach, and almond milk"],
                calories: 250,
                protein: 5,
                carbs: 45,
                fats: 5,
            },
            {
                meal: "Lunch",
                items: ["Caprese salad with mozzarella and basil"],
                calories: 350,
                protein: 15,
                carbs: 30,
                fats: 20,
            },
            {
                meal: "Dinner",
                items: ["Vegetable stir-fry with tofu"],
                calories: 400,
                protein: 20,
                carbs: 50,
                fats: 15,
            },
            {
                meal: "Snack",
                items: ["Apple slices with almond butter"],
                calories: 200,
                protein: 5,
                carbs: 30,
                fats: 10,
            },
        ],
        basic: [
            {
                meal: "Breakfast",
                items: ["Whole grain cereal with milk"],
                calories: 300,
                protein: 10,
                carbs: 60,
                fats: 5,
            },
            {
                meal: "Lunch",
                items: ["Turkey sandwich with lettuce and tomato"],
                calories: 400,
                protein: 25,
                carbs: 40,
                fats: 15,
            },
            {
                meal: "Dinner",
                items: ["Pasta with marinara sauce and a side salad"],
                calories: 500,
                protein: 15,
                carbs: 70,
                fats: 10,
            },
            {
                meal: "Snack",
                items: ["Protein bar"],
                calories: 200,
                protein: 20,
                carbs: 30,
                fats: 5,
            },
        ],
    },
    workoutPlans: {
        beginner: [
            {
                day: "Monday",
                workout: "Bodyweight squats, push-ups, planks.",
                duration: "30 mins",
            },
            {
                day: "Tuesday",
                workout: "Walking or light jogging.",
                duration: "30 mins",
            },
            {
                day: "Wednesday",
                workout: "Rest day.",
                duration: "-",
            },
            {
                day: "Thursday",
                workout: "Yoga or stretching.",
                duration: "30 mins",
            },
            {
                day: "Friday",
                workout: "Bodyweight lunges, tricep dips.",
                duration: "30 mins",
            },
            {
                day: "Saturday",
                workout: "Light hiking or outdoor activity.",
                duration: "1 hour",
            },
            {
                day: "Sunday",
                workout: "Active recovery: walking or light stretching.",
                duration: "30 mins",
            },
        ],
        intermediate: [
            {
                day: "Monday",
                workout: "Weight training: deadlifts, bench press, rows.",
                duration: "45 mins",
            },
            {
                day: "Tuesday",
                workout: "Running intervals.",
                duration: "30 mins",
            },
            {
                day: "Wednesday",
                workout: "Rest day.",
                duration: "-",
            },
            {
                day: "Thursday",
                workout: "HIIT workout: burpees, jump squats, mountain climbers.",
                duration: "30 mins",
            },
            {
                day: "Friday",
                workout: "Weight training: squats, overhead press.",
                duration: "45 mins",
            },
            {
                day: "Saturday",
                workout: "Cycling or swimming.",
                duration: "1 hour",
            },
            {
                day: "Sunday",
                workout: "Active recovery: walking or light yoga.",
                duration: "30 mins",
            },
        ],
        advanced: [
            {
                day: "Monday",
                workout: "Split weight training: legs and back.",
                duration: "60 mins",
            },
            {
                day: "Tuesday",
                workout: "Speed work: sprint intervals.",
                duration: "30 mins",
            },
            {
                day: "Wednesday",
                workout: "Rest day.",
                duration: "-",
            },
            {
                day: "Thursday",
                workout: "CrossFit workout: AMRAPs and EMOMs.",
                duration: "45 mins",
            },
            {
                day: "Friday",
                workout: "Split weight training: chest and arms.",
                duration: "60 mins",
            },
            {
                day: "Saturday",
                workout: "Long-distance run or swim.",
                duration: "1 hour",
            },
            {
                day: "Sunday",
                workout: "Active recovery: hiking or mobility work.",
                duration: "30 mins",
            },
        ],
        basic: [
            {
                day: "Monday",
                workout: "Brisk walking.",
                duration: "30 mins",
            },
            {
                day: "Tuesday",
                workout: "Bodyweight exercises: squats, push-ups.",
                duration: "30 mins",
            },
            {
                day: "Wednesday",
                workout: "Rest day.",
                duration: "-",
            },
            {
                day: "Thursday",
                workout: "Yoga or stretching.",
                duration: "30 mins",
            },
            {
                day: "Friday",
                workout: "Brisk walking or light jogging.",
                duration: "30 mins",
            },
            {
                day: "Saturday",
                workout: "Leisurely bike ride.",
                duration: "1 hour",
            },
            {
                day: "Sunday",
                workout: "Active recovery: light stretching.",
                duration: "30 mins",
            },
        ],
    },
};

const WinterArcPlan = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Winter Arc Diet and Workout Plans
            </Typography>
            <Grid container spacing={3}>
                {/* Diet Plans */}
                <Grid item xs={12}>
                    <Typography variant="h5">Diet Plans</Typography>
                </Grid>
                {Object.entries(winterArcPlans.dietPlans).map(([key, plan]) => (
                    <Grid item xs={12} sm={6} md={3} key={key}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{key.charAt(0).toUpperCase() + key.slice(1)} Diet</Typography>
                                {plan.map((meal, index) => (
                                    <div key={index}>
                                        <Typography variant="body1"><strong>{meal.meal}:</strong> {meal.items.join(", ")}</Typography>
                                        <Typography variant="body2">Calories: {meal.calories}, Protein: {meal.protein}, Carbs: {meal.carbs}, Fats: {meal.fats}</Typography>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {/* Workout Plans */}
                <Grid item xs={12}>
                    <Typography variant="h5">Workout Plans</Typography>
                </Grid>
                {Object.entries(winterArcPlans.workoutPlans).map(([key, plan]) => (
                    <Grid item xs={12} sm={6} md={3} key={key}>
                        <Card>
                            <CardContent>
                            <Typography variant="h6">{key.charAt(0).toUpperCase() + key.slice(1)} Workout</Typography>
                                {plan.map((workout, index) => (
                                    <div key={index}>
                                        <Typography variant="body1">
                                            <strong>{workout.day}:</strong> {workout.workout}
                                        </Typography>
                                        <Typography variant="body2">Duration: {workout.duration}</Typography>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default WinterArcPlan;

