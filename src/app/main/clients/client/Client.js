import React, { useEffect, useState } from 'react';
import { Icon, Tab, Tabs, Typography, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { FuseAnimate, FusePageCarded } from '@fuse';
import { Link } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import AppointmentsTab from './AppointmentsTab';
import AboutTab from './AboutTab';
import InvoicesTab from './InvoicesTab';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import ClientDialog from './ClientDialog';

const useStyles = makeStyles({
	speedDial: {
		position: 'absolute',
		right: 45,
		bottom: 30,
		zIndex: 99
	}
});

function Client(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
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
		<React.Fragment>
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
											{'Client - ' + client.details.firstName + ' ' + client.details.lastName}
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
						<div className="p-16 sm:p-24 md:flex w-full">
							{tabValue === 0 && (
								<React.Fragment>
									<AboutTab />
									<FuseAnimate animation="transition.expandIn" delay={300}>
										<Fab
											color="secondary"
											aria-label="edit"
											className={classes.speedDial}
											onClick={(ev) => dispatch(Actions.openEditClientDialog(client.details))}
										>
											<EditIcon />
										</Fab>
									</FuseAnimate>
								</React.Fragment>
							)}
							{tabValue === 1 && <AppointmentsTab />}
							{tabValue === 2 && <InvoicesTab />}
						</div>
					)
				}
				innerScroll
			/>
			<ClientDialog />
		</React.Fragment>
	);
}

export default withReducer('clientsApp', reducer)(Client);
