import React, { useEffect } from 'react';
import { MenuItem, InputLabel, Select, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	menu: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

function CalendarAppToolbar() {
	const dispatch = useDispatch();

	const staffMembers = useSelector(({ calendarApp }) => calendarApp.calendar.staff.staffMembers);
	const classes = useStyles();
	const [ staffMember, setStaffMember ] = React.useState('all staff');
	const [ open, setOpen ] = React.useState(false);

	useEffect(
		() => {
			dispatch(Actions.setFilterStaffMembers(staffMember));
		},
		[ staffMembers ]
	);

	const handleChange = (event) => {
		setStaffMember(event.target.value);
		dispatch(Actions.setFilterStaffMembers(event.target.value));
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div className="flex flex-1 items-center sm:px-8">
			<FormControl className={classes.menu}>
				<InputLabel htmlFor="view-staff-open-select">staff</InputLabel>
				<Select
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={staffMember}
					onChange={handleChange}
					inputProps={{
						name: 'staff',
						id: 'view-staff-open-select'
					}}
				>
					<MenuItem value={'all staff'}>All Staff</MenuItem>
					<MenuItem value={'working staff'}>Working Staff</MenuItem>
					{staffMembers.map((staffMember) => (
						<MenuItem value={staffMember.id} key={staffMember.id}>
							{staffMember.text}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default CalendarAppToolbar;
