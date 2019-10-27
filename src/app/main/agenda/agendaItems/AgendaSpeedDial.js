import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';

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

const actions = [
	{ icon: <MonetizationOnSharpIcon />, name: 'Process Sale' },
	{ icon: <GroupAddSharpIcon />, name: 'Register Client' },
	{ icon: <DateRangeSharpIcon />, name: 'Add Appointment' },
	{ icon: <BlockSharpIcon />, name: 'Block Time Slot' }
];

export default function AgendaSpeedDial() {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const [ hidden, setHidden ] = React.useState(false);

	const handleVisibility = () => {
		setHidden((prevHidden) => !prevHidden);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<SpeedDial
				ariaLabel="SpeedDial openIcon example"
				className={classes.speedDial}
				hidden={hidden}
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
