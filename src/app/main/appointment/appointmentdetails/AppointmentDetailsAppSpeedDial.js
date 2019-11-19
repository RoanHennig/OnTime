import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RestoreIcon from '@material-ui/icons/Restore';
import EventBusyIcon from '@material-ui/icons/EventBusy';

const useStyles = makeStyles((theme) => ({
	root: {
		zIndex: 99,
		transform: 'translateZ(0px)',
		flexGrow: 1
	},
	speedDial: {
		position: 'absolute',
		right: 50,
		bottom: 60
	}
}));

const incompleteActions = [
	{ icon: <MonetizationOnSharpIcon />, name: 'Process Sale', appointmentStatus: 'incomplete' },
	{ icon: <EditIcon />, name: 'Edit Appointment', appointmentStatus: 'incomplete' },
	{ icon: <EventBusyIcon />, name: 'Cancel Appointment', appointmentStatus: 'incomplete' },
	{ icon: <RestoreIcon />, name: 'Reschedule Appointment', appointmentStatus: 'incomplete' }
];

const completeActions = [ { icon: <DateRangeIcon />, name: 'Rebook Appointment', appointmentStatus: 'complete' } ];

export default function AppointmentSpeedDial(props) {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<SpeedDial
				ariaLabel="SpeedDial openIcon"
				className={classes.speedDial}
				icon={<SpeedDialIcon color="secondary" openIcon={<EditIcon />} />}
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
			>
				{props.appointmentStatus === 'Complete' ? (
					completeActions.map((action) => (
						<SpeedDialAction
							key={action.name}
							icon={action.icon}
							tooltipTitle={action.name}
							onClick={handleClose}
						/>
					))
				) : (
					incompleteActions.map((action) => (
						<SpeedDialAction
							key={action.name}
							icon={action.icon}
							tooltipTitle={action.name}
							onClick={handleClose}
						/>
					))
				)}
			</SpeedDial>
		</div>
	);
}
