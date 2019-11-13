import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import ImportExportSharpIcon from '@material-ui/icons/ImportExportSharp';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import { ExportToCsv } from 'export-to-csv';
import * as CSVOptions from './utils/CSVExport';
import ExcelExport from './utils/ExcelExport';
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

export default function ClientsAppSpeedDial(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const [ downloadExcel, setDownloadExcel ] = React.useState(false);
	const clients = useSelector(({ clientsApp }) => clientsApp.clients.clients);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleCreateExportClientsCSV = () => {
		const clientsToExport = clients.filter((x) => props.selected.find((y) => y === x.id));
		const csvExporter = new ExportToCsv(CSVOptions.options);
		if (clientsToExport.length > 0) {
			csvExporter.generateCsv(clientsToExport);
		} else {
			csvExporter.generateCsv(clients);
		}
	};

	const handleCreateExportClientsExcel = () => {
		setDownloadExcel(true);
	};

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
			click: () => handleCreateExportClientsExcel(),
			excelfile: true
		}
	];

	return (
		<div className={classes.root}>
			<SpeedDial
				ariaLabel="SpeedDial openIcon example"
				className={classes.speedDial}
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

				{downloadExcel ? <ExcelExport setDownloadExcel={setDownloadExcel} data={clients} /> : null}
			</SpeedDial>
		</div>
	);
}
