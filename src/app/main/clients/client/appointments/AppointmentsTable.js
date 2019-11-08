import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { FuseScrollbars, FuseUtils, FuseAnimate } from '@fuse';
import { withRouter } from 'react-router-dom';
import _ from '@lodash';
import AppointmentsTableHead from './AppointmentsTableHead';
import AppointmentStatus from '../../../../../components/AppointmentStatus';
import ServicesPopoverChip from '../../../../../components/ServicesPopoverChip';
import * as Actions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';

function AppointmentsTable(props) {
	const dispatch = useDispatch();
	const appointments = useSelector(({ clientsApp }) => clientsApp.appointments.data);
	const searchText = useSelector(({ clientsApp }) => clientsApp.appointments.searchText);

	const [ data, setData ] = useState(appointments);
	const [ appointment, setAppointment ] = useState({
		direction: 'asc',
		id: null
	});

	useEffect(
		() => {
			dispatch(Actions.getAppointments(props.match.params));
		},
		[ dispatch, props.match.params ]
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

	function handleClick(event) {
		//event.preventDefault();
		//props.history.push('/clients/' + props.match.params.clientId + '/appointments/' + item.id);
	}

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<FuseAnimate animation="transition.slideUpIn" delay={150}>
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
											case 'services': {
												return o.services;
											}
											case 'staffMember': {
												return o.staffMember;
											}
											case 'statuses': {
												return o.statuses;
											}
											default: {
												return o[appointment.id];
											}
										}
									}
								],
								[ appointment.direction ]
							).map((n) => {
								return (
									<TableRow
										className="h-64 cursor-pointer"
										hover
										tabIndex={-1}
										key={n.id}
										onClick={() => handleClick(n)}
									>
										<TableCell component="th" scope="row">
											<ServicesPopoverChip label={n.services.label} />
										</TableCell>

										<TableCell className="truncate" component="th" scope="row">
											{n.staffMember}
										</TableCell>

										<TableCell component="th" scope="row">
											{FuseUtils.formatter.format(n.total)}
										</TableCell>

										<TableCell component="th" scope="row">
											<div className="flex items-center">
												{n.statuses.map((status) => (
													<AppointmentStatus id={status} key={status} />
												))}
											</div>
										</TableCell>

										<TableCell component="th" scope="row">
											{Moment(n.date).format('YYYY-MM-DD HH:mm')}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</FuseAnimate>
			</FuseScrollbars>
		</div>
	);
}

export default withRouter(AppointmentsTable);
