import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Goal', 'Assessment', 'Metrics', 'Summary'];

function SteperBar() {
  const [activeStep] = useState(0);

  return (
    <Box
      sx={{
        width: '80%',
        margin: '0 auto',
        backgroundColor: '#757575',
        padding: '10px 15px',
        borderRadius: '50px',
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default SteperBar;

