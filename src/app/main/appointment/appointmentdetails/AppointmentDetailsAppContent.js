import React, { useEffect, useState } from 'react';
import {
	Avatar,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Icon,
	Tab,
	Tabs,
	Tooltip,
	Typography
} from '@material-ui/core';

import { FuseUtils } from '@fuse';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GoogleMap from 'google-map-react';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import WorkIcon from '@material-ui/icons/Work';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Moment from 'moment';
import AppointmentStatus from '../../../../components/AppointmentStatus';
import ServiceDialogChip from '../../../../components/ServiceDialogChip';

function Marker(props) {
	return (
		<Tooltip title={props.text} placement="top">
			<Icon className="text-red">place</Icon>
		</Tooltip>
	);
}

export default function AppointmentDetailsAppContent(props) {
	const [ map, setMap ] = useState('shipping');

	return (
		<div className="p-32">
			<div className="pb-48">
				<div className="pb-16 flex items-center">
					<HomeWorkIcon className="mr-16" color="action" />
					<Typography className="h2" color="textSecondary">
						Staff member
					</Typography>
				</div>

				<div className="mb-24">
					<div className="table-responsive mb-16">
						<table className="simple">
							<thead>
								<tr>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div className="flex items-center">
											<Avatar className="mr-8 w-84 h-84" src={props.appointment.staff.avatar} />
											<Typography className="truncate">
												{props.appointment.staff.firstName +
													' ' +
													props.appointment.staff.lastName}
											</Typography>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="pb-48">
				<div className="pb-16 flex items-center">
					<AccountCircleIcon className="mr-16" color="action" />
					<Typography className="h2" color="textSecondary">
						Client
					</Typography>
				</div>

				<div className="mb-24">
					<div className="table-responsive mb-16">
						<table className="simple">
							<thead>
								<tr>
									<th>Name</th>
									<th>Email</th>
									<th>Phone</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div className="flex items-center">
											<Avatar className="mr-8" src={props.appointment.client.avatar} />
											<Typography className="truncate">
												{props.appointment.client.firstName +
													' ' +
													props.appointment.client.lastName}
											</Typography>
										</div>
									</td>
									<td>
										<Typography className="truncate">{props.appointment.client.email}</Typography>
									</td>
									<td>
										<Typography className="truncate">{props.appointment.client.mobile}</Typography>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<ExpansionPanel
						elevation={1}
						expanded={map === 'invoice'}
						onChange={() => setMap(map !== 'invoice' ? 'invoice' : false)}
					>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<Typography className="font-600">Invoice Address</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails className="flex flex-col md:flex-row">
							<Typography className="w-full md:max-w-256 mb-16 md:mb-0">
								{props.appointment.invoice.client.invoiceAddress.address}
							</Typography>
							<div className="w-full h-320">
								<GoogleMap
									bootstrapURLKeys={{
										key: ''
									}}
									defaultZoom={15}
									defaultCenter={[
										props.appointment.invoice.client.invoiceAddress.lat,
										props.appointment.invoice.client.invoiceAddress.lng
									]}
								>
									<Marker
										text={props.appointment.invoice.client.invoiceAddress.address}
										lat={props.appointment.invoice.client.invoiceAddress.lat}
										lng={props.appointment.invoice.client.invoiceAddress.lng}
									/>
								</GoogleMap>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			</div>

			<div className="pb-48">
				<div className="pb-16 flex items-center">
					<WorkIcon className="mr-16" color="action" />

					<Typography className="h2" color="textSecondary">
						Service(s)
					</Typography>
				</div>

				<div className="table-responsive">
					<table className="simple">
						<thead>
							<tr>
								<th>Service</th>
								<th>Duration</th>
							</tr>
						</thead>
						<tbody>
							{props.appointment.details.services.map((service) => (
								<tr key={service.id}>
									<td>
										<ServiceDialogChip label={service.name} />
									</td>
									<td>{service.duration}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="pb-48">
				<div className="pb-16 flex items-center">
					<TrackChangesIcon className="mr-16" color="action" />

					<Typography className="h2" color="textSecondary">
						Appointment Record
					</Typography>
				</div>

				<div className="table-responsive">
					<table className="simple">
						<thead>
							<tr>
								<th>Status</th>
								<th>Updated On</th>
								<th>Note</th>
							</tr>
						</thead>
						<tbody>
							{props.appointment.details.history.map((status) => (
								<tr key={status.id}>
									<td>
										<AppointmentStatus id={status.id} key={status.id} />
									</td>
									<td>{Moment(status.date).format('YYYY-MM-DD HH:mm')}</td>
									<td>{status.note}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="pb-48">
				<div className="pb-16 flex items-center">
					<Icon className="mr-16" color="action">
						attach_money
					</Icon>
					<Typography className="h2" color="textSecondary">
						Payment
					</Typography>
				</div>

				<div className="table-responsive">
					<table className="simple">
						<thead>
							<tr>
								<th>TransactionID</th>
								<th>Payment Method</th>
								<th>Amount</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span className="truncate">{props.appointment.details.payment.transactionId}</span>
								</td>
								<td>
									<span className="truncate">{props.appointment.details.payment.method}</span>
								</td>
								<td>
									<span className="truncate">
										{FuseUtils.formatter.format(props.appointment.details.payment.amount)}
									</span>
								</td>
								<td>
									<span className="truncate">
										{Moment(props.appointment.details.payment.date).format('YYYY-MM-DD')}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
