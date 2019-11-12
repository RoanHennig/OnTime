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
import { ExportToCsv } from 'export-to-csv';
import * as CSVOptions from './utils/CSVExport';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

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

var data = [
	{
		name: 'Test 1',
		age: 13,
		average: 8.2,
		approved: true,
		description: "using 'Content here, content here' "
	},
	{
		name: 'Test 2',
		age: 11,
		average: 8.2,
		approved: true,
		description: "using 'Content here, content here' "
	},
	{
		name: 'Test 4',
		age: 10,
		average: 8.2,
		approved: true,
		description: "using 'Content here, content here' "
	}
];

export default function ClientsAppSpeedDial(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [ hidden ] = React.useState(false);
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleCreateExportClientsCSV = () => {
		const csvExporter = new ExportToCsv(CSVOptions.options);
		csvExporter.generateCsv(data);
	};

	const handleCreateExportClientsExcel = () => {};

	const actions = [
		{ icon: <PersonAddSharpIcon />, name: 'Add Client', click: () => dispatch(Actions.openNewClientDialog()) },
		{
			icon: <ImportExportSharpIcon />,
			name: 'Export Clients CSV',
			click: () => handleCreateExportClientsCSV()
		},
		{
			icon: <ChromeReaderModeIcon />,
			name: 'Export Clients Excel',
			click: () => handleCreateExportClientsCSV()
		}
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
