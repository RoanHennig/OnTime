import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
import Form, { SimpleItem, RequiredRule } from 'devextreme-react/form';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { FuseAnimate } from '@fuse';

export default function ShiftDialog(props) {
	const useStyles = makeStyles((theme) => ({
		dialogAction: {
			display: 'block'
		},
		form: {
			marginBottom: theme.spacing(1)
		}
	}));

	const handleClose = () => {
		props.setClose(false);
		setData([ ...props.shiftDayOfWeek ]);
	};

	useEffect(
		() => {
			setData([ ...props.shiftDayOfWeek ]);
		},
		[ props.shiftDayOfWeek ]
	);

	const handleDeleteShift = (shift) => {
		const newShift = [ ...shiftData ];
		const index = newShift.indexOf(shift);
		newShift.splice(index, 1);
		setData(newShift);
	};

	const handleAddShiftClick = () => {
		if (props.shiftDayOfWeek.length > 0) {
			setData([
				...props.shiftDayOfWeek,
				{
					id: 2,
					shiftStart: props.shiftDayOfWeek[0].shiftEnd,
					shiftEnd: props.shiftDayOfWeek[0].shiftEnd,
					min: props.shiftDayOfWeek[0].shiftEnd,
					max: props.shiftDayOfWeek[0].shiftStart
				}
			]);
		} else {
			setData([ ...props.shiftDayOfWeek, { id: 1, shiftStart: '00:00', shiftEnd: '00:00' } ]);
		}
	};

	const onStaffOperatingOpeningHoursChanged = (e, shift) => {
		const newStaffOperatingHours = [ ...shiftData ];
		const index = newStaffOperatingHours.indexOf(shift);
		newStaffOperatingHours[index].shiftStart = e.value;

		setData(newStaffOperatingHours);
	};

	const onStaffOperatingClosingHoursChanged = (e, shift) => {
		const newStaffOperatingHours = [ ...shiftData ];
		const index = newStaffOperatingHours.indexOf(shift);
		newStaffOperatingHours[index].shiftEnd = e.value;

		setData(newStaffOperatingHours);
	};

	const [ shiftData, setData ] = useState([]);
	const classes = useStyles();

	return (
		<Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Edit Shift</DialogTitle>
			<DialogContent>
				<DialogContentText>Customize your working hours to suit your business.</DialogContentText>
				{shiftData.map((shift) => (
					<FuseAnimate key={shift.id} animation="transition.slideDownBigIn">
						<Form
							id={'form'}
							className={classes.form}
							formData={shift}
							readOnly={false}
							showColonAfterLabel={true}
							labelLocation={'top'}
							showRequiredMark={false}
							colCount={10}
							showValidationSummary={true}
							validationGroup={'staffOperatingHours'}
							stylingMode={'outlined'}
						>
							<SimpleItem
								colSpan={4}
								dataField={'shiftStart'}
								editorType={'dxDateBox'}
								editorOptions={{
									type: 'time',
									showClearButton: true,
									onValueChanged: (e) => onStaffOperatingOpeningHoursChanged(e, shift)
								}}
							>
								<RequiredRule message={'Please select a starting time for your shift'} />
							</SimpleItem>
							<SimpleItem
								colSpan={4}
								dataField={'shiftEnd'}
								editorType={'dxDateBox'}
								editorOptions={{
									type: 'time',
									showClearButton: true,
									onValueChanged: (e) => onStaffOperatingClosingHoursChanged(e, shift)
								}}
							>
								<RequiredRule message={'Please select an ending time for your shift'} />
							</SimpleItem>
							<SimpleItem dataField={'Remove'} colSpan={2}>
								<IconButton aria-label="delete" onClick={() => handleDeleteShift(shift)}>
									<DeleteIcon />
								</IconButton>
							</SimpleItem>
						</Form>
					</FuseAnimate>
				))}
				<Button
					className="sm:float-left sm:min-w-52 min-w-full"
					hidden={shiftData && shiftData.length === 2}
					variant="outlined"
					color="primary"
					onClick={handleAddShiftClick}
					startIcon={<AddIcon />}
				>
					Add Shift
				</Button>
			</DialogContent>

			<DialogActions className={classes.dialogAction} disableSpacing={true}>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.handleDeleteWholeShift()}
					className={'sm:float-left sm:m-16 mb-3 sm:min-w-52 min-w-full'}
					startIcon={<DeleteIcon />}
				>
					Delete
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => props.handleSaveShift(shiftData)}
					className={'sm:float-right sm:m-16 mb-3 sm:min-w-52 min-w-full'}
					startIcon={<SaveIcon />}
				>
					Save
				</Button>
				<Button className={'sm:float-right sm:m-16 mb-3 sm:min-w-52 min-w-full'} onClick={handleClose}>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}
