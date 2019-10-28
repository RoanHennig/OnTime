import React, { useEffect, useState } from 'react';
import {
	Avatar,
	AppBar,
	Button,
	Card,
	CardContent,
	Icon,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Toolbar,
	Tab,
	Tabs,
	Typography
} from '@material-ui/core';
import { FuseAnimateGroup } from '@fuse';
import { FuseAnimate, FusePageCarded } from '@fuse';
import { Link } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import AgendaItemChip from '../../agenda/AgendaItemChip';

function About(props) {
	const dispatch = useDispatch();
	const client = useSelector(({ clientsApp }) => clientsApp.client.client);

	const [ tabValue, setTabValue ] = useState(0);

	useEffect(
		() => {
			dispatch(Actions.getClient(props.match.params));
		},
		[ dispatch, props.match.params ]
	);

	function handleChangeTab(event, tabValue) {
		setTabValue(tabValue);
	}

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				client && (
					<div className="flex flex-1 w-full items-center justify-between">
						<div className="flex flex-1 flex-col items-center sm:items-start">
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Typography
									className="normal-case flex items-center sm:mb-12"
									component={Link}
									role="button"
									to="/clients"
									color="inherit"
								>
									<Icon className="mr-4 text-20">arrow_back</Icon>
									Clients
								</Typography>
							</FuseAnimate>

							<div className="flex flex-col min-w-0 items-center sm:items-start">
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography className="text-16 sm:text-20 truncate">
										{'Client ' + client.fullName}
									</Typography>
								</FuseAnimate>
							</div>
						</div>
					</div>
				)
			}
			contentToolbar={
				<Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="secondary"
					textColor="secondary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
				>
					<Tab className="h-64 normal-case" label="About" />
					<Tab className="h-64 normal-case" label="Appointments" />
					<Tab className="h-64 normal-case" label="Invoices" />
				</Tabs>
			}
			content={
				client && (
					<div className="p-16 sm:p-24 md:flex max-w-2xl w-full">
						<div className="flex flex-col flex-1 md:pr-32">
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideUpBigIn'
								}}
							>
								<Card className="w-full mb-16">
									<AppBar position="static" elevation={0}>
										<Toolbar className="pl-16 pr-8">
											<Typography variant="subtitle1" color="inherit" className="flex-1">
												General Information
											</Typography>
										</Toolbar>
									</AppBar>

									<CardContent>
										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Gender</Typography>
											<Typography>{client.general.gender}</Typography>
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Birthday</Typography>
											<Typography>{client.general.birthday}</Typography>
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Notes</Typography>
											<Typography>{client.general.notes}</Typography>
										</div>
									</CardContent>
								</Card>

								<Card className="w-full mb-16">
									<AppBar position="static" elevation={0}>
										<Toolbar className="pl-16 pr-8">
											<Typography variant="subtitle1" color="inherit" className="flex-1">
												Contact
											</Typography>
										</Toolbar>
									</AppBar>

									<CardContent>
										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Mobile number</Typography>
											<Typography>{client.contact.mobile}</Typography>
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Email</Typography>
											<Typography>{client.contact.email}</Typography>
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Address</Typography>
											<Typography>{client.contact.address}</Typography>
										</div>
									</CardContent>
								</Card>
							</FuseAnimateGroup>
						</div>
						<div className="flex flex-col md:w-384">
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideUpBigIn'
								}}
							>
								<Card className="w-full mb-16">
									<AppBar position="static" elevation={0}>
										<Toolbar className="pl-16 pr-8">
											<Typography variant="subtitle1" color="inherit" className="flex-1">
												Last Appointment
											</Typography>
											<Button className="normal-case" color="inherit" size="small">
												View
											</Button>
											<Button className="normal-case" color="inherit" size="small">
												See All
											</Button>
										</Toolbar>
									</AppBar>
									<CardContent className="p-8">
										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Date</Typography>
											<Typography>{client.lastAppointment.date}</Typography>
										</div>

										<div className="mb-36">
											<Typography className="font-bold mb-4 text-15">Service</Typography>
											{client.lastAppointment.service.map((service) => (
												<AgendaItemChip
													className="mr-4 float-left"
													title={service}
													key={service}
												/>
											))}
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Payment</Typography>
											<Typography className="align-middle">
												<Icon className="text-green mr-8">check_circle</Icon>
												{client.lastAppointment.payment}
											</Typography>
										</div>
									</CardContent>
								</Card>

								<Card className="w-full mb-16">
									<AppBar position="static" elevation={0}>
										<Toolbar className="pl-16 pr-8">
											<Typography variant="subtitle1" color="inherit" className="flex-1">
												Last Invoice
											</Typography>
											<Button className="normal-case" color="inherit" size="small">
												View
											</Button>
											<Button className="normal-case" color="inherit" size="small">
												See All
											</Button>
										</Toolbar>
									</AppBar>
									<CardContent className="p-8">
										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Date</Typography>
											<Typography>{client.lastInvoice.date}</Typography>
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Number</Typography>
											<Typography>{client.lastInvoice.number}</Typography>
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Amount</Typography>
											<Typography>{client.lastInvoice.amount}</Typography>
										</div>
									</CardContent>
								</Card>
							</FuseAnimateGroup>
						</div>
					</div>
				)
			}
			innerScroll
		/>
	);
}

export default withReducer('clientsApp', reducer)(About);
