import React, {Component} from 'react';
import {Container, Card, CardContent} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import service from './data.js';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import clsx from 'clsx';
import Step1 from './Steps/Step1';
import Stepper  from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function getSteps() {
    return ['Business Details', 'Business Type', 'Services Provided' ,'Opening Times','Additional Extensions'];
  } 

const styles = theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }, 
    button: {
        marginRight: theme.spacing(1),
      }
});

class BusinessSetup extends Component {
    constructor() {
        super();
        this.businessDetails = service.getbusinessDetails();
        this.state = {
            activeStep: 0,
            skipped: new Set(),
            step1: <Step1 businessDetails = {this.businessDetails}/>
          };
      }

      render()
      {
        const {
            activeStep
          } = this.state;

          const { classes } = this.props;
          console.log(styles);
          const steps = getSteps();

          return (
                <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">
                <Container maxWidth="md" className="max-w-lg flex flex-col items-center justify-center p-32 text-center">
                    <FuseAnimate animation="transition.expandIn">

                        <Card className="max-w-lg max-h-full ">

                            <CardContent className="flex flex-col items-center justify-center p-32 text-center">
                            <div >
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    if (this.isStepOptional(index)) {
                                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                                    }
                                    if (this.isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                    })}
                                </Stepper >
                                <div>
                                    {activeStep === steps.length ? (
                                    <div>
                                        <Typography>
                                            <Step1
                                                companies = {this.companies}
                                            />
                                        </Typography>
                                        <Button onClick={this.handleReset} className={classes.button} >
                                        Reset
                                        </Button>
                                    </div>
                                    ) : (
                                    <div>
                                        <Typography>{this.getStepContent(activeStep)}</Typography>
                                        <div>
                                        <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                        {this.isStepOptional(activeStep) && (
                                            <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleSkip}
                                            className={classes.button}
                                            >
                                            Skip
                                            </Button>
                                        )}

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext } 
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                        </div>
                                    </div>
                                    )}
                                </div>
                                </div>
                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </Container>
                </div>
            </div>
          )
      }


    getStepContent = (step) => {
        switch (step) {
          case 0:
            return this.state.step1;
          case 1:
            return 'What is an ad group anyways?';
          case 2:
            return 'This is the bit I really care about!';
          default:
            return 'Unknown step';
        }
    };

    isStepOptional = step => {
        return step === 1;
    };
    isStepSkipped = step => {
        return this.state.skipped.has(step);
    };

    handleNext = () => {
        let newSkipped = this.state.skipped;
        if (this.isStepSkipped(this.state.activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(this.state.activeStep);
        }
    
        this.setState({activeStep: this.state.activeStep + 1})
        this.setState({skipped: newSkipped});
    };

    handleBack = () => {
        this.setState({activeStep: this.state.activeStep - 1})
    };

    handleSkip = () => {
        if (!this.isStepOptional(this.state.activeStep)) {
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        this.setState({activeStep: this.state.activeStep + 1});
        const newSkipped = new Set(this.state.skipped.values());
        newSkipped.add(this.state.activeStep);
        this.setState({skipped: newSkipped});

    };

    handleReset = () => {
        this.setState({activeStep: 0});
    };

  }
  
  
  export default withStyles(styles, {withTheme: true})(BusinessSetup);