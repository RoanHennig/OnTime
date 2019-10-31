import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TablePagination, TableRow, Checkbox } from '@material-ui/core';
import { FuseScrollbars, FuseUtils } from '@fuse';
import { withRouter } from 'react-router-dom';
import _ from '@lodash';
import OrdersTableHead from './OrdersTableHead';
import OrdersStatus from '../order/OrdersStatus';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function AppointmentsTable() {
	const dispatch = useDispatch();
	const appointments = useSelector(({ eCommerceApp }) => eCommerceApp.appointments.data);
	const searchText = useSelector(({ eCommerceApp }) => eCommerceApp.appointments.searchText);

	const [ data, setData ] = useState(appointments);
	const [ appointment, setAppointment ] = useState({
		direction: 'asc',
		id: null
	});

	useEffect(
		() => {
			dispatch(Actions.getAppointments());
		},
		[ dispatch ]
	);

	useEffect(
		() => {
			setData(searchText.length === 0 ? appointments : FuseUtils.filterArrayByString(appointments, searchText));
		},
		[ appointments, searchText ]
	);

	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';

		if (appointment.id === property && appointment.direction === 'desc') {
			direction = 'asc';
		}

		setAppointment({
			direction,
			id
		});
	}

	function handleClick(item) {
		props.history.push('/clients/appointments/' + item.id + '/' + item.handle);
	}

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table className="min-w-xl" aria-labelledby="tableTitle">
					<AppointmentsTableHead
						appointment={appointment}
						onRequestSort={handleRequestSort}
						rowCount={data.length}
					/>

					<TableBody>
						{_.orderBy(
							data,
							[
								(o) => {
									switch (appointment.id) {
										case 'appointmentid': {
											return parseInt(o.id, 10);
										}
										case 'service': {
											return o.customer.service;
										}
										case 'staffMember': {
											return o.payment.staffMember;
										}
										case 'status': {
											return o.status;
										}
										default: {
											return o[appointmentid.id];
										}
									}
								}
							],
							[ appointment.direction ]
						).map((n) => {
							const isSelected = selected.indexOf(n.id) !== -1;
							return (
								<TableRow
									className="h-64 cursor-pointer"
									hover
									role="checkbox"
									aria-checked={isSelected}
									tabIndex={-1}
									key={n.id}
									selected={isSelected}
									onClick={(event) => handleClick(n)}
								>
									<TableCell component="th" scope="row">
										{n.id}
									</TableCell>

									<TableCell component="th" scope="row">
										{n.service}
									</TableCell>

									<TableCell className="truncate" component="th" scope="row">
										{n.staffMember}
									</TableCell>

									<TableCell component="th" scope="row" align="right">
										<span>$</span>
										{n.total}
									</TableCell>

									<TableCell component="th" scope="row">
										{n.status}
									</TableCell>

									<TableCell component="th" scope="row">
										{n.date}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</FuseScrollbars>
		</div>
	);
}

export default withRouter(AppointmentsTable);
