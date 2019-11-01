import React from 'react';
import { TableHead, TableSortLabel, TableCell, TableRow, Tooltip } from '@material-ui/core';

const rows = [
	{
		id: 'service',
		align: 'left',
		disablePadding: false,
		label: 'Service',
		sort: true
	},
	{
		id: 'staffMember',
		align: 'left',
		disablePadding: false,
		label: 'Staff Member',
		sort: true
	},
	{
		id: 'total',
		align: 'left',
		disablePadding: false,
		label: 'Total',
		sort: true
	},
	{
		id: 'status',
		align: 'left',
		disablePadding: false,
		label: 'Status',
		sort: true
	},
	{
		id: 'date',
		align: 'left',
		disablePadding: false,
		label: 'Date',
		sort: true
	}
];

function AppointmentsTableHead(props) {
	const createSortHandler = (property) => (event) => {
		props.onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow className="h-64">
				{rows.map((row) => {
					return (
						<TableCell
							key={row.id}
							align={row.align}
							padding={row.disablePadding ? 'none' : 'default'}
							sortDirection={props.appointment.id === row.id ? props.appointment.direction : false}
						>
							{row.sort && (
								<Tooltip
									title="Sort"
									placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
									enterDelay={300}
								>
									<TableSortLabel
										active={props.appointment.id === row.id}
										direction={props.appointment.direction}
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

export default AppointmentsTableHead;
