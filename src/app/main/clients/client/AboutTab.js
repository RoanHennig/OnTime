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
import { useSelector } from 'react-redux';
import AgendaItemChip from '../../agenda/AgendaItemChip';

export default function AboutTab() {
	const client = useSelector(({ clientsApp }) => clientsApp.client.client);

	const formatter = new Intl.NumberFormat('en-ZA', {
		style: 'currency',
		currency: 'ZAR',
		minimumFractionDigits: 2
	});

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
								<Button className="normal-case" color="inherit" size="small">
									Edit
								</Button>
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

					<Card className="w-full mb-16  md:min-h-400">
						<AppBar position="static" elevation={0}>
							<Toolbar className="pl-16 pr-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1">
									Contact
								</Typography>
								<Button className="normal-case" color="inherit" size="small">
									Edit
								</Button>
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
					<Card className="w-full mb-16 md:min-h-400">
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
						<CardContent className="p-8 pl-28">
							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">Date</Typography>
								<Typography>{client.lastAppointment.date}</Typography>
							</div>

							<div className="mb-36">
								<Typography className="font-bold mb-4 text-15">Service</Typography>
								{client.lastAppointment.service.map((service) => (
									<AgendaItemChip className="mr-4 float-left" title={service} key={service} />
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
								<Button className="normal-case" color="inherit" size="small">
									View
								</Button>
								<Button className="normal-case" color="inherit" size="small">
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
