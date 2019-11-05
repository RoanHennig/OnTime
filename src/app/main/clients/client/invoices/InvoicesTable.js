import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { FuseScrollbars, FuseUtils, FuseAnimate } from '@fuse';
import { withRouter } from 'react-router-dom';
import _ from '@lodash';
import InvoicesTableHead from './InvoicesTableHead';
import InvoiceStatus from './invoice/InvoiceStatus';
import * as Actions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';

function InvoicesTable(props) {
	const dispatch = useDispatch();
	const invoices = useSelector(({ clientsApp }) => clientsApp.invoices.data);

	const [ data, setData ] = useState(invoices);
	const [ invoice, setInvoice ] = useState({
		direction: 'asc',
		id: null
	});

	useEffect(
		() => {
			dispatch(Actions.getInvoices(props.match.params));
		},
		[ dispatch, props.match.params ]
	);

	useEffect(
		() => {
			setData(invoices);
		},
		[ invoices ]
	);

	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';

		if (invoice.id === property && invoice.direction === 'desc') {
			direction = 'asc';
		}

		setInvoice({
			direction,
			id
		});
	}

	function handleClick(item) {
		props.history.push('/appointment/' + item.id);
	}

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<FuseAnimate animation="transition.slideUpIn" delay={150}>
					<Table className="min-w-xl" aria-labelledby="tableTitle">
						<InvoicesTableHead invoice={invoice} onRequestSort={handleRequestSort} rowCount={data.length} />

						<TableBody>
							{_.orderBy(
								data,
								[
									(o) => {
										switch (invoice.id) {
											case 'invoiceid': {
												return parseInt(o.id, 10);
											}
											case 'total': {
												return o.services;
											}
											case 'status': {
												return o.status;
											}
											case 'date': {
												return o.date;
											}
											default: {
												return o[invoice.id];
											}
										}
									}
								],
								[ invoice.direction ]
							).map((n) => {
								return (
									<TableRow
										className="h-64 cursor-pointer"
										hover
										tabIndex={-1}
										key={n.id}
										onClick={() => handleClick(n)}
									>
										<TableCell className="truncate" component="th" scope="row">
											{n.id}
										</TableCell>

										<TableCell component="th" scope="row">
											{FuseUtils.formatter.format(n.total)}
										</TableCell>

										<TableCell component="th" scope="row">
											<InvoiceStatus id={n.status} key={n.status} />
										</TableCell>

										<TableCell component="th" scope="row">
											{Moment(n.date).format('YYYY-MM-DD')}
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

export default withRouter(InvoicesTable);
