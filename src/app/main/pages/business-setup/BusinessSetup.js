import React, { Component } from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import service from './data.js';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { FuseAnimate, FuseAnimateGroup } from '@fuse';
import clsx from 'clsx';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Stepper from '@material-ui/core/Stepper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { compose } from 'redux'
import {Avatar} from '@material-ui/core';
import auth0Service from 'app/services/auth0Service';
import history from '@history';
import withSizes from 'react-sizes'

function getSteps() {
    return ['Business Details', 'Business Type', 'Services Provided', 'Staff & Operating Hours'];
}

const styles = theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color: theme.palette.primary.contrastText
    },
    button: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(3),
    },
    mobileStepper:
    {
        maxWidth: 400,
        flexGrow: 1,
    }
});

class BusinessSetup extends Component {
    constructor() {
        super();
        this.businessDetails = service.getbusinessDetails();
        this.state = {
            activeStep: 0,
            skipped: new Set(),
            step1: <Step1 businessDetails={this.businessDetails} />,
            step2: <Step2 />,
            step3: <Step3 />,
            step4: <Step4 />
        };
    }

    render() {
        const {
            activeStep
        } = this.state;

        const { classes } = this.props;
        const steps = getSteps();

        return (
            <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 items-center justify-center sm:p-32 p-2")}>

                <div className="flex flex-col items-center justify-center w-full">
                    <Container maxWidth="xl" className=".max-w-3xl flex flex-col items-center justify-center sm:p-32 p-2 text-center">
                        <FuseAnimate animation="transition.expandIn">

                            <Card className=".max-w-3xl max-h-full ">

                                <CardContent className="flex flex-col items-center justify-center p-32 text-center">
                                    <div >
                                       {this.props.isMobile ?                                   
                                       <MobileStepper 
                                            variant="dots"
                                            steps={4}
                                            activeStep={activeStep}
                                            position="static"
                                            className={classes.mobileStepper}>

                                            {steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                if (this.isStepSkipped(index)) {
                                                    stepProps.completed = false;
                                                }
                                                return (
                                                    <Step key={label} {...stepProps}>
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </Step>
                                                );
                                            })}
                                        </MobileStepper >
                                            :
                                       <Stepper activeStep={activeStep}>
                                            {steps.map((label, index) => {
                                                const stepProps = {};
                                                const labelProps = {};
                                                if (this.isStepSkipped(index)) {
                                                    stepProps.completed = false;
                                                }
                                                return (
                                                    <Step key={label} {...stepProps}>
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </Step>
                                                );
                                            })}
                                        </Stepper >}
                                        <div>
                                            {activeStep === steps.length ? (
                                                <div>
                                                        <Typography color="inherit" className="text-24 sm:text-32 font-light mb-24">
                                                            Setup Complete!
                                                        </Typography>
                                                        <Typography color="inherit" className="text-14 sm:text-18 font-light mb-24">
                                                            Set your business logo so your clients can recognize you
                                                        </Typography>
                                                        <div className="flex flex-col items-center justify-center pb-24">
                                                            <Avatar className="w-128 h-128" alt="contact avatar" src={'assets/images/avatars/profile.jpg'} />
      
                                                            <Button variant="contained" color="secondary" onClick={this.handleComplete} className={classes.button} >
                                                                Upload
                                                            </Button>
                                                        </div>

                                                    <Button variant="contained" color="primary" onClick={this.handleComplete} className={classes.button} >
                                                        Take me to my business dashboard
                                                    </Button>
                                                </div>
                                            ) : (
                                                    <div>
                                                        <FuseAnimateGroup
                                                            enter={{
                                                                animation: "transition.slideLeftBigIn"
                                                            }}
                                                            leave={{
                                                                animation: "transition.slideRightBigOut"
                                                            }}>
                                                            {this.getStepContent(activeStep)}
                                                        </FuseAnimateGroup>

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
                                                                onClick={this.handleNext}
                                                                className={classes.button}
                                                                disabled={!this.props.enableNext}
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
                return <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideLeftBigIn"
                    }}
                    leave={{
                        animation: "transition.slideRightBigOut"
                    }}>
                    <Typography color="inherit" className="text-24 sm:text-32 font-light mb-24">
                        Tell us a little bit about your business...
                        </Typography>
                    {this.state.step1}
                </FuseAnimateGroup>;
            case 1:
                return <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideLeftBigIn"
                    }}
                    leave={{
                        animation: "transition.slideRightBigOut"
                    }}>
                    <Typography color="inherit" className="text-24 sm:text-32 font-light mb-24">
                        What type of business are you in?
                        </Typography>
                    {this.state.step2}
                </FuseAnimateGroup>;
            case 2:
                return <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideLeftBigIn"
                    }}
                    leave={{
                        animation: "transition.slideRightBigOut"
                    }}>
                    <Typography color="inherit" className="text-24 sm:text-32 font-light mb-24">
                        What kind of services do you provide?
                        </Typography>
                    {this.state.step3}
                </FuseAnimateGroup>;
            case 3:
                return <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideLeftBigIn"
                    }}
                    leave={{
                        animation: "transition.slideRightBigOut"
                    }}>
                    <Typography color="inherit" className="text-24 sm:text-32 font-light mb-24">
                        What times are you open for business?
                        </Typography>
                    {this.state.step4}
                </FuseAnimateGroup>;
            default:
                return 'Unknown step';
        }
    };

    isStepOptional = step => {
        return step === 2;
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
        this.setState({ activeStep: this.state.activeStep + 1 })
        this.setState({ skipped: newSkipped });
    };

    handleBack = () => {
        this.setState({ activeStep: this.state.activeStep - 1 })
    };

    handleSkip = () => {
        if (!this.isStepOptional(this.state.activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState({ activeStep: this.state.activeStep + 1 });
        const newSkipped = new Set(this.state.skipped.values());
        newSkipped.add(this.state.activeStep);
        this.setState({ skipped: newSkipped });

    };

    handleComplete = () => {
        auth0Service.getUserData().then(tokenData => {
            console.log(tokenData);
            tokenData.user_metadata.accountStatus = 'Complete';
            auth0Service.updateUserData(tokenData.user_metadata);
            auth0Service.setRegistrationComplete();
            history.push({
                pathname: '/example'
            });
        });
    };

}

const mapStateToProps = state => {
    return {
        enableNext: state.businessSetup.BusinessSetup.enableNext
    };
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 480,
  })

  export default compose(
    withStyles(styles, { withTheme: true }),
    withSizes(mapSizesToProps)
  )(connect(mapStateToProps, null)(BusinessSetup))