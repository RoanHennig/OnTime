import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FuseAnimate } from '@fuse';
import * as Actions from './store/actions';
import ShiftButtonCell from './Utils/ShiftButtonCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ShiftDialog from './Utils/ShiftDialog';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import validationEngine from 'devextreme/ui/validation_engine';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		overflowX: 'auto'
	},
	tableCell: {
		maxWidth: 250,
		padding: theme.spacing(1)
	},
	tableCellStaffName: {
		minWidth: 200
	},
	table: {
		marginBottom: theme.spacing(2),
		minWidth: 650
	},
	addStaffButton: {
		float: 'left',
		marginBottom: theme.spacing(1),
		marginLeft: theme.spacing(1)
	},
	cellButton: {
		marginBottom: theme.spacing(1)
	}
}));

function Step4({ setOperatingHours }) {
	const stepDetails = useSelector((state) => state.businessSetupSteps.Step4);

	const handleClick = (row, dayOfWeek) => {
		setShiftRow(row);
		setShiftDayOfWeek(dayOfWeek);
		setIsOpen(true);
	};

	const handleSaveShift = (shifts) => {
		const result = validationEngine.validateGroup('staffOperatingHours');

		if (result) {
			setIsOpen(false);
			const newDataSource = [ ...stepDetails.operatingHours ];
			const index = newDataSource.indexOf(shiftRow);
			const dayOfWeek = [ ...newDataSource[index].week ];
			const dayOfWeekIndex = dayOfWeek.indexOf(shiftDayOfWeek);
			newDataSource[index].week[dayOfWeekIndex] = shifts;
			setOperatingHours(newDataSource);
		}
	};

	const handleDeleteWholeShift = () => {
		setIsOpen(false);
		const newDataSource = [ ...stepDetails.operatingHours ];
		const index = newDataSource.indexOf(shiftRow);
		const dayOfWeek = [ ...newDataSource[index].week ];
		const dayOfWeekIndex = dayOfWeek.indexOf(shiftDayOfWeek);
		newDataSource[index].week[dayOfWeekIndex] = [];
		setOperatingHours(newDataSource);
	};

	const handleAddStaffClick = () => {
		const newStaffOperatingHours = [ ...stepDetails.operatingHours ];
		const newItem = { ...newStaffOperatingHours[0] };
		newItem.staffID = newStaffOperatingHours.length + 1;
		newItem.staffName = 'Staff Member';
		setOperatingHours(newStaffOperatingHours.concat(newItem));
	};

	const handleDeleteStaffMember = (row) => {
		const newDataSource = [ ...stepDetails.operatingHours ];
		const index = newDataSource.indexOf(row);
		newDataSource.splice(index, 1);

		setOperatingHours(newDataSource);
	};

	const handleStaffNameChange = (event, row) => {
		const newDataSource = [ ...stepDetails.operatingHours ];
		const index = newDataSource.indexOf(row);
		newDataSource[index].staffName = event.target.value;

		setOperatingHours(newDataSource);
	};

	const [ isOpen, setIsOpen ] = useState(false);
	const [ shiftRow, setShiftRow ] = useState(null);
	const [ shiftDayOfWeek, setShiftDayOfWeek ] = useState([]);

	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<ShiftDialog
				open={isOpen}
				setClose={setIsOpen}
				handleDeleteWholeShift={handleDeleteWholeShift}
				setShiftDayOfWeek={setShiftDayOfWeek}
				shiftDayOfWeek={shiftDayOfWeek}
				handleSaveShift={handleSaveShift}
				businessOperatingHours={stepDetails.businessOperatingHours}
			/>

			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Staff Member</TableCell>
						<TableCell className={classes.tableCell} align="center">
							Sunday
						</TableCell>
						<TableCell className={classes.tableCell} align="center">
							Monday
						</TableCell>
						<TableCell className={classes.tableCell} align="center">
							Tuesday
						</TableCell>
						<TableCell className={classes.tableCell} align="center">
							Wednesday
						</TableCell>
						<TableCell className={classes.tableCell} align="center">
							Thursday
						</TableCell>
						<TableCell className={classes.tableCell} align="center">
							Friday
						</TableCell>
						<TableCell className={classes.tableCell} align="center">
							Saturday
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{stepDetails.operatingHours.map((row) => (
						<FuseAnimate key={row.staffID} animation="transition.slideDownBigIn">
							<TableRow>
								<TableCell scope="row">
									{row.staffID !== 1 ? (
										<IconButton
											aria-label="delete"
											onClick={() => handleDeleteStaffMember(row)}
											className={classes.margin}
										>
											<DeleteIcon />
										</IconButton>
									) : null}
								</TableCell>
								<TableCell className={classes.tableCellStaffName} component="th" scope="row">
									<TextField
										margin="normal"
										onChange={(event) => handleStaffNameChange(event, row)}
										inputProps={{ 'aria-label': 'name' }}
										value={row.staffName}
									/>
								</TableCell>
								{row.week.map((weekDay) => (
									<TableCell className={classes.tableCell} key={weekDay.id} align="right">
										{weekDay.shifts.length > 0 ? (
											weekDay.shifts.map((shift) => (
												<ShiftButtonCell
													variant="contained"
													key={shift.id}
													shift={shift.shiftStart + ' - ' + shift.shiftEnd}
													click={() => handleClick(row, weekDay.shifts)}
												/>
											))
										) : (
											<ShiftButtonCell
												shift={'ADD'}
												startIcon={<AddIcon />}
												click={() => handleClick(row, weekDay.shifts)}
											/>
										)}
									</TableCell>
								))}
							</TableRow>
						</FuseAnimate>
					))}
				</TableBody>
			</Table>
			<Button
				className={classes.addStaffButton}
				variant="outlined"
				color="primary"
				onClick={handleAddStaffClick}
				startIcon={<AddIcon />}
			>
				Add Staff
			</Button>
		</Paper>
	);
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			setOperatingHours: Actions.setOperatingHours
		},
		dispatch
	);
};

export default connect(null, mapDispatchToProps)(Step4);
