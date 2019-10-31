import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TablePagination, TableRow, Checkbox } from '@material-ui/core';
import { FuseScrollbars, FuseUtils } from '@fuse';
import { withRouter } from 'react-router-dom';
import _ from '@lodash';
import ClientsTableHead from './ClientsTableHead';
import * as Actions from './store/actions';
import { useDispatch, useSelector } from 'react-redux';

function ClientsTable(props) {
	const dispatch = useDispatch();
	const clients = useSelector(({ clientsApp }) => clientsApp.clients.clients);
	const searchText = useSelector(({ clientsApp }) => clientsApp.clients.searchText);

	const [ selected, setSelected ] = useState([]);
	const [ data, setData ] = useState(clients);
	const [ page, setPage ] = useState(0);
	const [ rowsPerPage, setRowsPerPage ] = useState(10);
	const [ client, setClient ] = useState({
		direction: 'asc',
		id: null
	});

	const user = useSelector(({ auth }) => auth.user.data);

	useEffect(
		() => {
			dispatch(Actions.getClients(user.user_id));
		},
		[ user.user_id ]
	);

	useEffect(
		() => {
			setData(searchText.length === 0 ? clients : FuseUtils.filterArrayByString(clients, searchText));
		},
		[ clients, searchText ]
	);

	const handleRequestSort = (event, property) => {
		const id = property;
		let direction = 'desc';

		if (client.id === property && client.direction === 'desc') {
			direction = 'asc';
		}

		setClient({
			direction,
			id
		});
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			setSelected(data.map((n) => n.id));
			return;
		}
		setSelected([]);
	};

	const handleClick = (item) => {
		props.history.push('/clients/' + item.id);
	};

	const handleCheck = (event, id) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, page) => {
		setPage(page);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(event.target.value);
	};

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table className="min-w-xl" aria-labelledby="tableTitle">
					<ClientsTableHead
						numSelected={selected.length}
						client={client}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={data.length}
					/>

					<TableBody>
						{_.orderBy(
							data,
							[
								(o) => {
									switch (client.id) {
										case 'id': {
											return parseInt(o.id, 10);
										}
										case 'fullname': {
											return o.fullName;
										}
										case 'mobileNumber': {
											return o.mobileNumber;
										}
										case 'appointmentstotal': {
											return o.appointmentsTotal;
										}
										case 'lastAppointment': {
											return o.lastAppointment;
										}
										default: {
											return o[client.id];
										}
									}
								}
							],
							[ client.direction ]
						)
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((n) => {
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
										<TableCell className="w-48 pl-4 sm:pl-12" padding="checkbox">
											<Checkbox
												checked={isSelected}
												onClick={(event) => event.stopPropagation()}
												onChange={(event) => handleCheck(event, n.id)}
											/>
										</TableCell>

										<TableCell component="th" scope="row">
											{n.avatar}
										</TableCell>

										<TableCell className="truncate" component="th" scope="row">
											{n.fullName}
										</TableCell>

										<TableCell component="th" scope="row" align="left">
											{n.mobileNumber}
										</TableCell>

										<TableCell component="th" scope="row">
											{n.email}
										</TableCell>

										<TableCell component="th" scope="row">
											{n.appointmentsTotal}
										</TableCell>

										<TableCell component="th" scope="row">
											{n.lastAppointment}
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</FuseScrollbars>

			<TablePagination
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'Previous Page'
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page'
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	);
}

export default withRouter(ClientsTable);
