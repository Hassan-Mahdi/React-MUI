import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Paper,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from '@mui/material';

function GoalSection({ goalNumber, goalLabel, options, value, onChange }) {
  return (
    <Box padding={2} >
      <Typography sx={{ marginBottom: 2 }}>
        <span style={{ fontWeight: 'bold' }}>{goalNumber}</span> of 3
      </Typography>
      <TextField sx={{ marginBottom: 2 }} fullWidth label={`Goal ${goalLabel}`} />
      <FormControl fullWidth>
        <Select value={value} onChange={onChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

function SetGoal() {
  const [goals, setGoals] = React.useState([
    { goalValue: 10 },
    { goalValue: 10 },
    { goalValue: 10 },
  ]);

  const handleOptionChange = (index) => (event) => {
    const newGoals = [...goals];
    newGoals[index].goalValue = event.target.value;
    setGoals(newGoals);
  };

  const goalOptions = [
    { label: 'Option One', value: 10 },
    { label: 'Option Two', value: 20 },
    { label: 'Option Three', value: 30 },
  ];

  return (
    <Box>
      <Paper variant="outlined">
        <Box padding={2}>
          <Typography variant="h5" spacing={2}>
            Set Goal Metrics
          </Typography>
        </Box>

        <Divider light />

        {[1, 2, 3].map((goalNumber, index) => (
          <GoalSection
            key={goalNumber}
            goalNumber={goalNumber}
            goalLabel={`${goalNumber}`}
            options={goalOptions}
            value={goals[index].goalValue}
            onChange={handleOptionChange(index)}
          />
        ))}
      </Paper>
    </Box>
  );
}

export default SetGoal;