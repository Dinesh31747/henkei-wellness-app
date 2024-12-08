import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  CardActions,
} from "@mui/material";

import pushup from "../assets/pushup.gif";
import plank from "../assets/plank.gif";
import burpees from "../assets/burpees.gif";
import squats from "../assets/squats.gif";
import lunges from "../assets/lunges.gif";
import bentover from "../assets/bentoverrows.gif";
import dumblerows from "../assets/dumblerows.gif";
import jumping_jacks from "../assets/jumpingjacks.gif";
import high_knees from "../assets/High-knees.gif";
import bicep_curls from "../assets/dumblecurls.gif";
import mountain_climbers from "../assets/mountainclimbers.gif";
import tricep_dips from "../assets/tricepdips.gif";

const ExercisePlan = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    {
      day: "Monday",
      exercises: [
        { name: "Push-ups", sets: 3, reps: 10, calories: 50, gif: pushup },
        { name: "Plank", sets: 3, reps: "30 sec hold", calories: 30, gif: plank },
      ],
    },
    {
      day: "Tuesday",
      exercises: [
        { name: "Squats", sets: 3, reps: 12, calories: 60, gif: squats},
        { name: "Lunges", sets: 3, reps: 10, calories: 50, gif: lunges },
      ],
    },
    {
      day: "Wednesday",
      exercises: [
        { name: "Dumbbell Rows", sets: 3, reps: 10, calories: 40, gif: dumblerows },
        { name: "Bent Over Rows", sets: 3, reps: 8, calories: 45, gif: bentover },
      ],
    },
    {
      day: "Thursday",
      exercises: [
        { name: "Jumping Jacks", sets: 3, reps: 20, calories: 70, gif: jumping_jacks },
        { name: "High Knees", sets: 3, reps: 30, calories: 80, gif: high_knees },
      ],
    },
    {
      day: "Friday",
      exercises: [
        { name: "Bicep Curls", sets: 3, reps: 10, calories: 35, gif: bicep_curls },
        { name: "Tricep Dips", sets: 3, reps: 10, calories: 40, gif: tricep_dips },
      ],
    },
    {
      day: "Saturday",
      exercises: [
        { name: "Mountain Climbers", sets: 3, reps: 15, calories: 50, gif: mountain_climbers },
        { name: "Burpees", sets: 3, reps: 10, calories: 80, gif: burpees },
      ],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Beginner's Gym Exercise Plan
      </Typography>
      <Grid container spacing={3}>
        {exercises.map((dayPlan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center">
                  {dayPlan.day}
                </Typography>
                {dayPlan.exercises.map((exercise, idx) => (
                  <Card key={idx} style={{ margin: "10px 0" }}>
                    <CardMedia
                      component="img"
                      height="500"
                      image={exercise.gif}
                      alt={exercise.name}
                    />
                    <CardContent>
                      <Typography variant="h6">{exercise.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Sets: {exercise.sets} | Reps: {exercise.reps} | Calories: {exercise.calories}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {exercise.Text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => setSelectedExercise(exercise)}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Details Dialog */}
      <Dialog
        open={Boolean(selectedExercise)}
        onClose={() => setSelectedExercise(null)}
        maxWidth="sm"
        fullWidth
      >
        {selectedExercise && (
          <>
            <DialogTitle>{selectedExercise.name}</DialogTitle>
            <DialogContent>
              <img
                src={selectedExercise.gif}
                alt={selectedExercise.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <Typography variant="body1" style={{ marginTop: "10px" }}>
                <strong>Sets:</strong> {selectedExercise.sets}
              </Typography>
              <Typography variant="body1">
                <strong>Reps:</strong> {selectedExercise.reps}
              </Typography>
              <Typography variant="body1">
                <strong>Calories Burned:</strong> {selectedExercise.calories}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedExercise(null)} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default ExercisePlan;
