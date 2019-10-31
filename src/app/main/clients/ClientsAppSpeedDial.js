import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import ImportExportSharpIcon from '@material-ui/icons/ImportExportSharp';
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';

const useStyles = makeStyles((theme) => ({
	root: {
		zIndex: 99,
		transform: 'translateZ(0px)',
		flexGrow: 1
	},
	speedDial: {
		position: 'absolute',
		right: 50,
		bottom: 80
	}
}));

export default function ClientsAppSpeedDial(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [ hidden, setHidden ] = React.useState(false);
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleCreateExportClients = () => {};

	const actions = [
		{ icon: <PersonAddSharpIcon />, name: 'Add Client', click: () => dispatch(Actions.openNewClientDialog()) },
		{ icon: <ImportExportSharpIcon />, name: 'Export Clients', click: () => handleCreateExportClients() }
	];

	return (
		<div className={classes.root}>
			<SpeedDial
				ariaLabel="SpeedDial openIcon example"
				className={classes.speedDial}
				hidden={hidden}
				icon={<SpeedDialIcon openIcon={<EditIcon />} />}
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
			>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={action.click}
					/>
				))}
			</SpeedDial>
		</div>
	);
}
