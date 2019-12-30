import React from 'react';
import { Card, CardContent, Typography, TableCell, TableRow, TableBody, TableHead, Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		'& table ': {
			'& th:first-child, & td:first-child': {
				paddingLeft: 0 + '!important'
			},
			'& th:last-child, & td:last-child': {
				paddingRight: 0 + '!important'
			}
		}
	},
	divider: {
		width: 1,
		backgroundColor: theme.palette.divider,
		height: 144
	},
	seller: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.getContrastText(theme.palette.primary.dark),
		marginRight: -88,
		paddingRight: 66,
		width: 480,
		'& .divider': {
			backgroundColor: theme.palette.getContrastText(theme.palette.primary.dark),
			opacity: 0.5
		}
	}
}));

const InvoiceAppContent = (props) => {
	const classes = useStyles(props);

	const formatter = new Intl.NumberFormat('en-ZA', {
		style: 'currency',
		currency: 'ZAR',
		minimumFractionDigits: 2
	});

	return (
		<div id="appointmentinvoice" className={clsx(classes.root, 'flex-grow flex-shrink-0 p-0')}>
			{props.invoice && (
				<Card className="w-xl mx-auto" elevation={0}>
					<CardContent className="p-88 print:p-0">
						<Typography color="textSecondary" className="mb-32">
							{props.invoice.date}
						</Typography>

						<div className="flex justify-between">
							<div>
								<table className="mb-16">
									<tbody>
										<tr>
											<td className="pr-16 pb-4">
												<Typography className="font-light" variant="h6" color="textSecondary">
													INVOICE
												</Typography>
											</td>
											<td className="pb-4">
												<Typography className="font-light" variant="h6" color="inherit">
													{props.invoice.reference}
												</Typography>
											</td>
										</tr>
									</tbody>
								</table>

								<Typography color="textSecondary">
									{props.invoice.client.firstName + ' ' + props.invoice.client.lastName}
								</Typography>

								{props.invoice.client.invoiceAddress.address && (
									<Typography color="textSecondary">
										{props.invoice.client.invoiceAddress.address}
									</Typography>
								)}
								{props.invoice.client.mobile && (
									<Typography color="textSecondary">{props.invoice.client.mobile}</Typography>
								)}
								{props.invoice.client.email && (
									<Typography color="textSecondary">{props.invoice.client.email}</Typography>
								)}
							</div>

							<div className={clsx(classes.seller, 'flex items-center p-16')}>
								<div className={clsx(classes.divider, 'divider ml-8 mr-16 h-96')} />

								<div>
									<Typography color="inherit">FUSE INC.</Typography>

									<Typography color="inherit">2810 Country Club Road Cranford, NJ 07016</Typography>
									<Typography color="inherit">+66 123 455 87</Typography>
									<Typography color="inherit">hello@fuseinc.com</Typography>
									<Typography color="inherit">www.fuseinc.com</Typography>
								</div>
							</div>
						</div>

						<div className="mt-64">
							<Table className="simple">
								<TableHead>
									<TableRow>
										<TableCell>SERVICE</TableCell>
										<TableCell align="right">TOTAL</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{props.invoice.services.map((service) => (
										<TableRow key={service.id}>
											<TableCell>
												<Typography variant="subtitle1">{service.name}</Typography>
											</TableCell>
											<TableCell align="right">{formatter.format(service.price)}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>

							<Table className="simple mt-32">
								<TableBody>
									<TableRow>
										<TableCell>
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												SUBTOTAL
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												{formatter.format(props.invoice.subtotal)}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												TAX
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												{formatter.format(props.invoice.tax)}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												DISCOUNT
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography
												className="font-medium"
												variant="subtitle1"
												color="textSecondary"
											>
												{formatter.format(props.invoice.discount)}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography className="font-light" variant="h4" color="textSecondary">
												TOTAL
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography className="font-light" variant="h4" color="textSecondary">
												{formatter.format(props.invoice.total)}
											</Typography>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</div>

						<div className="mt-96">
							<Typography className="mb-24 print:mb-12" variant="body1">
								Please pay within 15 days. Thank you for your business.
							</Typography>

							<div className="flex">
								<Typography className="font-medium mb-64" variant="caption" color="textSecondary">
									In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue
									dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis
									pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam
									at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in
									porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros.
								</Typography>
							</div>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
};

export default React.memo(InvoiceAppContent);
