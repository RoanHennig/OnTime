import React from 'react';
import {
	AppBar,
	Button,
	Card,
	CardContent,
	Icon,
	Toolbar,
	Typography,
	TableCell,
	TableRow,
	TableBody,
	Table
} from '@material-ui/core';
import { FuseAnimateGroup } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';
import ServiceItemChip from '../../../../components/ServiceItemChip';
import * as Actions from '../store/actions';
import { withRouter } from 'react-router-dom';

function AboutTab(props) {
	const dispatch = useDispatch();
	const client = useSelector(({ clientsApp }) => clientsApp.client.client);

	const formatter = new Intl.NumberFormat('en-ZA', {
		style: 'currency',
		currency: 'ZAR',
		minimumFractionDigits: 2
	});

	function handleNavigateToAppointment() {
		props.history.push('/appointment/' + client.lastAppointment.id + '/appointment');
	}

	function handleNavigateToInvoice() {
		props.history.push('/appointment/' + client.lastInvoice.id + '/invoice');
	}

	return (
		<React.Fragment>
			<div className="flex flex-col flex-1 md:pr-32">
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<Card className="w-full mb-16 md:min-h-400">
						<AppBar position="static" elevation={0}>
							<Toolbar className="pl-16 pr-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1">
									General Information
								</Typography>
								<Button
									className="normal-case"
									color="inherit"
									size="small"
									onClick={(ev) => dispatch(Actions.openEditClientDialog(client.details))}
								>
									Edit
								</Button>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div className="mb-24 flex">
								<div className="mb-12 w-1/2">
									<Typography className="font-bold mb-4 text-15">First Name</Typography>
									<Typography>{client.details.firstName}</Typography>
								</div>

								<div className="mb-12 w-1/2">
									<Typography className="font-bold mb-4 text-15">Last Name</Typography>
									<Typography>{client.details.lastName}</Typography>
								</div>
							</div>
							<div className="mb-36 flex">
								<div className="w-1/2">
									<Typography className="font-bold mb-4 text-15">Gender</Typography>
									<Typography>{client.details.gender}</Typography>
								</div>

								<div className="w-1/2">
									<Typography className="font-bold mb-4 text-15">Birthday</Typography>
									<Typography>{client.details.birthday}</Typography>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/2">
									<Typography className="font-bold mb-4 text-15">Notes</Typography>
									<Typography>{client.details.notes}</Typography>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="w-full mb-16  md:min-h-400">
						<AppBar position="static" elevation={0}>
							<Toolbar className="pl-16 pr-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1">
									Contact
								</Typography>
								<Button
									className="normal-case"
									color="inherit"
									size="small"
									onClick={(ev) => dispatch(Actions.openEditClientDialog(client.details))}
								>
									Edit
								</Button>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div className="mb-24 flex">
								<div className="mb-12 w-1/2">
									<Typography className="font-bold mb-4 text-15">Mobile number</Typography>
									<Typography>{client.details.mobile}</Typography>
								</div>

								<div className="mb-12 w-1/2">
									<Typography className="font-bold mb-4 text-15">Email</Typography>
									<Typography>{client.details.email}</Typography>
								</div>
							</div>

							<div className="mb-24 flex">
								<div className="mb-12 w-1/2">
									<Typography className="font-bold mb-4 text-15">Address</Typography>
									<Typography>{client.details.address}</Typography>
								</div>
								<div className="mb-12 w-1/2">
									<Typography className="font-bold mb-4 text-15">City</Typography>
									<Typography>{client.details.city}</Typography>
								</div>
							</div>

							<div className="mb-24 flex">
								<div className="mb-12 w-1/2">
									<Typography className="font-bold mb-4 text-15">Zipcode</Typography>
									<Typography>{client.details.zipCode}</Typography>
								</div>
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
					<Card className="w-full mb-16 md:min-h-400">
						<AppBar position="static" elevation={0}>
							<Toolbar className="pl-16 pr-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1">
									Last Appointment
								</Typography>
								<Button
									className="normal-case"
									color="inherit"
									size="small"
									onClick={handleNavigateToAppointment}
								>
									View
								</Button>
								<Button
									className="normal-case"
									color="inherit"
									size="small"
									onClick={() => props.setTabValue(1)}
								>
									See All
								</Button>
							</Toolbar>
						</AppBar>
						<CardContent className="p-8 pl-28">
							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">Date</Typography>
								<Typography>{client.lastAppointment.date}</Typography>
							</div>

							<div className="mb-36">
								<Typography className="font-bold mb-4 text-15">Service</Typography>
								{client.lastAppointment.service.map((service) => (
									<ServiceItemChip className="mr-4 float-left" title={service} key={service} />
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

					<Card className="w-full mb-16 md:min-h-400">
						<AppBar position="static" elevation={0}>
							<Toolbar className="pl-16 pr-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1">
									Last Invoice
								</Typography>
								<Button
									className="normal-case"
									color="inherit"
									size="small"
									onClick={handleNavigateToInvoice}
								>
									View
								</Button>
								<Button
									className="normal-case"
									color="inherit"
									size="small"
									onClick={() => props.setTabValue(2)}
								>
									See All
								</Button>
							</Toolbar>
						</AppBar>
						<CardContent className="p-8">
							<div className="mb-24  pl-28">
								<Typography className="font-bold mb-4 text-15">Date</Typography>
								<Typography>{client.lastInvoice.date}</Typography>
							</div>

							<div className="pl-28">
								<Typography className="font-bold mb-4 text-15 ">Number</Typography>
								<Typography>{client.lastInvoice.number}</Typography>
							</div>

							<div>
								<Table className="simple mt-20">
									<TableBody>
										<TableRow>
											<TableCell>
												<Typography
													className="font-small"
													variant="subtitle1"
													color="textSecondary"
												>
													SUBTOTAL
												</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography
													className="font-small"
													variant="subtitle1"
													color="textSecondary"
												>
													{formatter.format(client.lastInvoice.subtotal)}
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<Typography
													className="font-small"
													variant="subtitle1"
													color="textSecondary"
												>
													TAX
												</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography
													className="font-small"
													variant="subtitle1"
													color="textSecondary"
												>
													{formatter.format(client.lastInvoice.tax)}
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<Typography
													className="font-small"
													variant="subtitle1"
													color="textSecondary"
												>
													DISCOUNT
												</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography
													className="font-small"
													variant="subtitle1"
													color="textSecondary"
												>
													{formatter.format(client.lastInvoice.discount)}
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<Typography className="font-light" variant="h5" color="textSecondary">
													TOTAL
												</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography className="font-light" variant="h5" color="textSecondary">
													{formatter.format(client.lastInvoice.total)}
												</Typography>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</React.Fragment>
	);
}

export default withRouter(AboutTab);
