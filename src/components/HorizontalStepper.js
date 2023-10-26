import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Upload from './upload';
import Extract from './extract';
import View from './view';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  stepper: {
    width: '100%',
    padding: '16px', // You can set spacing directly
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

function HorizontalStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Upload', 'Extract', 'View'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Upload />;
      case 1:
        return <Extract />;
      case 2:
        return <View />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <Paper>
            <Typography>All steps completed - you're finished</Typography>
          </Paper>
        ) : (
          <div>
            <div>
              {activeStep === steps.length ? null : (
                <div className={classes.buttons}>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {getStepContent(activeStep)} 
    </div>
  );
}

export default HorizontalStepper;
