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

// Import exercise GIFs
import diamoundpushup from "../assets/diamondpushup.gif";
import sideplank from "../assets/sideplank.gif";
import jumpsquat from "../assets/jumpsquat.gif";
import revlunges from "../assets/reversesquat.gif";
import bentover from "../assets/bentoverrowsInter.gif";
import renegade from "../assets/regenade.gif";
import burpeesWith from "../assets/burpeesWithpush.gif";
import high_knees from "../assets/Highknees.gif";
import concen_curl from "../assets/concentration.gif";
import mountain_climbers from "../assets/twistclimb.gif";
import tricep_dips from "../assets/tricepdips.gif";
import plyometric from "../assets/plyoPushup.gif";
const IntermediateExercisePlan = () => {
  const [open, setOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    {
      day: "Monday",
      exercises: [
        { name: "Diamond Push-ups", sets: 4, reps: 12, calories: 70, gif: diamoundpushup, link: "https://www.example.com/diamond-pushups" },
        { name: "Side Plank", sets: 3, reps: "45 sec hold", calories: 40, gif: sideplank, link: "https://www.example.com/side-plank" },
      ],
    },
    {
      day: "Tuesday",
      exercises: [
        { name: "Jump Squats", sets: 4, reps: 15, calories: 80, gif: jumpsquat, link: "https://www.example.com/jump-squats" },
        { name: "Reverse Lunges", sets: 4, reps: 12, calories: 60, gif: revlunges, link: "https://www.example.com/reverse-lunges" },
      ],
    },
    {
      day: "Wednesday",
      exercises: [
        { name: "Bent Over Rows", sets: 4, reps: 10, calories: 50, gif: bentover, link: "https://www.example.com/bent-over-rows" },
        { name: "Renegade Rows", sets: 4, reps: 12, calories: 55, gif: renegade, link: "https://www.example.com/renegade-rows" },
      ],
    },
    {
      day: "Thursday",
      exercises: [
        { name: "High Knees with Dumbbells", sets: 4, reps: 20, calories: 100, gif: high_knees, link: "https://www.example.com/high-knees" },
        { name: "Burpees with Push-ups", sets: 4, reps: 10, calories: 120, gif: burpeesWith, link: "https://www.example.com/burpees-pushups" },
      ],
    },
    {
      day: "Friday",
      exercises: [
        { name: "Concentration Curls", sets: 3, reps: 12, calories: 40, gif: concen_curl, link: "https://www.example.com/concentration-curls" },
        { name: "Tricep Bench Dips", sets: 4, reps: 12, calories: 50, gif: tricep_dips, link: "https://www.example.com/tricep-dips" },
      ],
    },
    {
      day: "Saturday",
      exercises: [
        { name: "Mountain Climbers with Twists", sets: 4, reps: 15, calories: 90, gif: mountain_climbers, link: "https://www.example.com/mountain-climbers" },
        { name: "Plyometric Push-ups", sets: 4, reps: 10, calories: 100, gif: plyometric, link: "https://www.example.com/plyometric-pushups" },
      ],
    },
  ];

  const handleOpen = (exercise) => {
    setSelectedExercise(exercise);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedExercise(null);
    setOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Intermediate Gym Exercise Plan
      </Typography>
      <Grid container spacing={3}>
        {exercises.map((dayPlan, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Typography variant="h5" gutterBottom>
              {dayPlan.day}
            </Typography>
            {dayPlan.exercises.map((exercise, idx) => (
              <Card key={idx} style={{ marginBottom: "20px" }}>
                <CardMedia
                  component="img"
                  height="450"
                  image={exercise.gif}
                  alt={`${exercise.name} demo`}
                />
                <CardContent>
                  <Typography variant="h6">{exercise.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Sets: {exercise.sets} | Reps: {exercise.reps} | Calories Burned: {exercise.calories}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleOpen(exercise)}>
                    View Details
                  </Button>
                  <Button size="small" color="secondary" href={exercise.link} target="_blank">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Exercise Details */}
      {selectedExercise && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{selectedExercise.name}</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              <strong>Sets:</strong> {selectedExercise.sets}
            </Typography>
            <Typography gutterBottom>
              <strong>Reps:</strong> {selectedExercise.reps}
            </Typography>
            <Typography gutterBottom>
              <strong>Calories Burned:</strong> {selectedExercise.calories}
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image={selectedExercise.gif}
              alt={`${selectedExercise.name} demo`}
              style={{ marginTop: "10px" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default IntermediateExercisePlan;
