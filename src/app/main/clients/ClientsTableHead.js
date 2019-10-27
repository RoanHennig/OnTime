import React, { useState } from 'react';
import {
	TableHead,
	TableSortLabel,
	TableCell,
	TableRow,
	Checkbox,
	Tooltip,
	IconButton,
	Icon,
	Menu,
	MenuList,
	MenuItem,
	ListItemIcon,
	ListItemText
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const rows = [
	{
		id: 'avatar',
		align: 'left',
		disablePadding: false,
		label: '',
		sort: false
	},
	{
		id: 'fullname',
		align: 'left',
		disablePadding: false,
		label: 'Name',
		sort: true
	},
	{
		id: 'mobilenumber',
		align: 'left',
		disablePadding: false,
		label: 'Mobile Number',
		sort: true
	},
	{
		id: 'email',
		align: 'left',
		disablePadding: false,
		label: 'Email',
		sort: true
	},
	{
		id: 'appointmentstotal',
		align: 'left',
		disablePadding: false,
		label: 'Appointments',
		sort: true
	},
	{
		id: 'lastappointment',
		align: 'left',
		disablePadding: false,
		label: 'Last Appointment',
		sort: true
	}
];

const useStyles = makeStyles((theme) => ({
	actionsButtonWrapper: {
		background: theme.palette.background.paper
	}
}));

export default function ClientsTableHead(props) {
	const classes = useStyles(props);
	const [ selectedClientssMenu, setSelectedClientsMenu ] = useState(null);

	const createSortHandler = (property) => (event) => {
		props.onRequestSort(event, property);
	};

	function openSelectedClientsMenu(event) {
		setSelectedClientsMenu(event.currentTarget);
	}

	function closeSelectedClientsMenu() {
		setSelectedClientsMenu(null);
	}

	return (
		<TableHead>
			<TableRow className="h-64">
				<TableCell padding="checkbox" className="relative pl-4 sm:pl-12">
					<Checkbox
						indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
						checked={props.numSelected === props.rowCount}
						onChange={props.onSelectAllClick}
					/>
					{props.numSelected > 0 && (
						<div
							className={clsx(
								'flex items-center justify-center absolute w-64 top-0 left-0 ml-68 h-64 z-10',
								classes.actionsButtonWrapper
							)}
						>
							<IconButton
								aria-owns={selectedClientssMenu ? 'selectedClientssMenu' : null}
								aria-haspopup="true"
								onClick={openSelectedClientsMenu}
							>
								<Icon>more_horiz</Icon>
							</IconButton>
							<Menu
								id="selectedClientssMenu"
								anchorEl={selectedClientssMenu}
								open={Boolean(selectedClientssMenu)}
								onClose={closeSelectedClientsMenu}
							>
								<MenuList>
									<MenuItem
										onClick={() => {
											closeSelectedClientsMenu();
										}}
									>
										<ListItemIcon className="min-w-40">
											<Icon>export</Icon>
										</ListItemIcon>
										<ListItemText primary="Export" />
									</MenuItem>
								</MenuList>
							</Menu>
						</div>
					)}
				</TableCell>
				{rows.map((row) => {
					return (
						<TableCell
							key={row.id}
							align={row.align}
							padding={row.disablePadding ? 'none' : 'default'}
							sortDirection={props.client.id === row.id ? props.client.direction : false}
						>
							{row.sort && (
								<Tooltip
									title="Sort"
									placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
									enterDelay={300}
								>
									<TableSortLabel
										active={props.client.id === row.id}
										direction={props.client.direction}
										onClick={createSortHandler(row.id)}
									>
										{row.label}
									</TableSortLabel>
								</Tooltip>
							)}
						</TableCell>
					);
				}, this)}
			</TableRow>
		</TableHead>
	);
}
