import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';

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

const actions = [ { icon: <GetAppIcon />, name: 'Process Sale' }, { icon: <PrintIcon />, name: 'Cancel Appointment' } ];

export default function InvoiceAppSpeedDial() {
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
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={handleClose}
					/>
				))}
			</SpeedDial>
		</div>
	);
}
