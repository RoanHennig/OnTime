import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import service from './data/data.js';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { FuseAnimate, FuseScrollbars } from '@fuse';
import * as Actions from './Steps/store/actions';
import clsx from 'clsx';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import { bindActionCreators } from 'redux';
import Stepper from '@material-ui/core/Stepper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Avatar } from '@material-ui/core';
import auth0Service from 'app/services/auth0Service';
import history from '@history';
import withSizes from 'react-sizes';
import SwipeableViews from 'react-swipeable-views';
import validationEngine from 'devextreme/ui/validation_engine';
import * as ActionsBusiness from './store/actions';
import { useDispatch, useSelector } from 'react-redux';

function getSteps() {
	return [ 'Business Details', 'Business Type', 'Services Provided', 'Staff & Operating Hours' ];
}

const useStyles = makeStyles((theme) => ({
	root: {
		background:
			'radial-gradient(' +
			darken(theme.palette.primary.dark, 0.5) +
			' 0%, ' +
			theme.palette.primary.dark +
			' 80%)',
		color: theme.palette.primary.contrastText
	},
	button: {
		marginRight: theme.spacing(1),
		marginTop: theme.spacing(3)
	},
	input: {
		display: 'none'
	},
	mobileStepper: {
		maxWidth: 400,
		flexGrow: 1
	}
}));

function BusinessSetup(props) {
	const dispatch = useDispatch();
	const isStepOptional = (step) => {
		return step === 2;
	};
	const isSetupComplete = (step) => {
		return step === 4;
	};
	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}
		const success = handleValidation(activeStep);
		if (success) {
			ActionsBusiness.saveBusinessDetails(props);
			setActiveStep(activeStep + 1);
			setSkipped(newSkipped);
		}
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep({ activeStep: activeStep + 1 });
		const newSkipped = new Set(skipped.values());
		newSkipped.add(activeStep);
		setSkipped(newSkipped);
	};

	const handleComplete = () => {
		auth0Service.getUserData().then((tokenData) => {
			tokenData.user_metadata.accountStatus = 'Complete';
			auth0Service.updateUserData(tokenData.user_metadata);
			auth0Service.setRegistrationComplete();
			history.push({
				pathname: '/agenda'
			});
		});
	};

	const handleValidation = (step) => {
		switch (step) {
			case 0: {
				var result = validationEngine.validateGroup('businessData');
				if (result.isValid) {
					if (props.Step4.operatingHours && props.Step4.operatingHours.length > 0) {
						const newStaffOperatingHours = [ ...props.Step4.operatingHours ];
						const newFirstStaffMember = { ...newStaffOperatingHours[1] };
						newFirstStaffMember.staffName =
							props.Step1.businessDetails.FirstName + ' ' + props.Step1.businessDetails.LastName;
						newStaffOperatingHours[1] = newFirstStaffMember;
						props.setOperatingHours(newStaffOperatingHours);
					}
					return true;
				} else {
					return false;
				}
			}
			case 1: {
				result = validationEngine.validateGroup('businessType');
				if (
					result.isValid &&
					props.Step2.businessTypeDetails.businessType &&
					props.Step2.businessTypeDetails.businessType
				) {
					return true;
				} else {
					return false;
				}
			}
			case 3: {
				if (props.Step4.operatingHours && props.Step4.operatingHours.length > 1) {
					return true;
				} else {
					return false;
				}
			}
			default: {
				return true;
			}
		}
	};

	const [ activeStep, setActiveStep ] = useState(0);
	const [ skipped, setSkipped ] = useState(new Set());
	const classes = useStyles();
	const steps = getSteps();

	useEffect(() => {
		dispatch(ActionsBusiness.getBusinessDetails(props.businessId));
	}, []);

	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto flex-shrink-0 items-center justify-center sm:p-32 p-2'
			)}
		>
			<div className="flex flex-col items-center justify-center w-full">
				<Container
					maxWidth="md"
					className="md:max-w-4xl flex flex-col items-stretch justify-center sm:p-32 p-2 text-center"
				>
					<FuseAnimate animation="transition.expandIn">
						<Card className="md:max-w-4xl xl:max-h-full max-h-screen">
							<CardContent className="flex flex-col items-stretch justify-center p-32 text-center">
								<div>
									{props.isMobile ? (
										<MobileStepper
											variant="dots"
											steps={4}
											activeStep={activeStep}
											position="static"
											className={classes.mobileStepper}
										>
											{steps.map((label, index) => {
												const stepProps = {};
												const labelProps = {};
												if (isStepSkipped(index)) {
													stepProps.completed = false;
												}
												return (
													<Step key={label} {...stepProps}>
														<StepLabel {...labelProps}>{label}</StepLabel>
													</Step>
												);
											})}
										</MobileStepper>
									) : (
										<Stepper activeStep={activeStep}>
											{steps.map((label, index) => {
												const stepProps = {};
												const labelProps = {};
												if (isStepSkipped(index)) {
													stepProps.completed = false;
												}
												return (
													<Step key={label} {...stepProps}>
														<StepLabel {...labelProps}>{label}</StepLabel>
													</Step>
												);
											})}
										</Stepper>
									)}
									<div>
										<div>
											<FuseScrollbars
												className="w-full xl:max-h-full max-h-400 overflow-auto"
												scrollToTopOnChildChange={true}
											>
												<SwipeableViews
													className="overflow-hidden "
													index={activeStep}
													enableMouseEvents={false}
													disabled={true}
												>
													<div>
														<Typography
															color="inherit"
															className="text-24 sm:text-32 font-light mb-24"
														>
															Tell us a little bit about your business...
														</Typography>
														<Step1 businessDetails={props.Steps.step1} />
													</div>
													<div>
														<Typography
															color="inherit"
															className="text-24 sm:text-32 font-light mb-24"
														>
															What type of business are you in?
														</Typography>
														<Step2 />
													</div>
													<div>
														<Typography
															color="inherit"
															className="text-24 sm:text-32 font-light mb-24"
														>
															What kind of services do you provide?
														</Typography>
														<Step3 />
													</div>
													<div>
														<Typography
															color="inherit"
															className="text-24 sm:text-32 font-light mb-24"
														>
															What times are you open for business?
														</Typography>
														<Step4 />
													</div>
													<div>
														<Typography
															color="inherit"
															className="text-24 sm:text-32 font-light mb-24"
														>
															Setup Complete!
														</Typography>
														<Typography
															color="inherit"
															className="text-14 sm:text-18 font-light mb-24"
														>
															Set your business logo so your clients can recognize you
														</Typography>
														<div className="flex flex-col items-center justify-center pb-24">
															<Avatar
																className="w-128 h-128"
																alt="contact avatar"
																src={'assets/images/avatars/profile.jpg'}
															/>

															<input
																accept="image/*"
																className={classes.input}
																id="contained-button-file"
																multiple
																type="file"
															/>
															<label htmlFor="contained-button-file">
																<Button
																	variant="contained"
																	color="secondary"
																	component="span"
																	className={classes.button}
																>
																	Upload
																</Button>
															</label>
														</div>
													</div>
												</SwipeableViews>
											</FuseScrollbars>
											<div>
												<Button
													disabled={activeStep === 0}
													onClick={handleBack}
													className={classes.button}
												>
													Back
												</Button>
												{isStepOptional(activeStep) && (
													<Button
														variant="contained"
														color="primary"
														onClick={handleSkip}
														className={classes.button}
													>
														Skip
													</Button>
												)}

												{!isSetupComplete(activeStep) && (
													<Button
														variant="contained"
														color="primary"
														onClick={handleNext}
														className={classes.button}
													>
														{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
													</Button>
												)}
												{isSetupComplete(activeStep) && (
													<Button
														variant="contained"
														color="primary"
														onClick={handleComplete}
														className={classes.button}
													>
														Take me to my business dashboard
													</Button>
												)}
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</FuseAnimate>
				</Container>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		Steps: state.businessSetup.BusinessSetup.businessSetupSteps,
		userId: state.auth.user.data.user_id,
		businessId: state.auth.user.data.business_id,
		Step1: state.businessSetupSteps.Step1,
		Step2: state.businessSetupSteps.Step2,
		Step4: state.businessSetupSteps.Step4
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			setOperatingHours: Actions.setOperatingHours
		},
		dispatch
	);
};

const mapSizesToProps = ({ width }) => ({
	isMobile: width < 480
});

export default compose(withSizes(mapSizesToProps))(connect(mapStateToProps, mapDispatchToProps)(BusinessSetup));
