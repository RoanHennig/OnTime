import React, { useState, useRef, useEffect } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { FusePageCarded, FuseAnimate } from '@fuse';
import withReducer from 'app/store/withReducer';
import AppointmentSpeedDial from './AppointmentSpeedDial';
import InvoiceAppHeader from './invoice/InvoiceAppHeader';
import InvoiceAppToolbarMenu from './invoice/InvoiceAppToolbarMenu';
import InvoiceAppContent from './invoice/InvoiceAppContent';
import InvoiceAppSidebarHeader from './invoice/InvoiceAppSidebarHeader';
import InvoiceAppSidebarContent from './invoice/InvoiceAppSidebarContent';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store/reducers';
import * as Actions from './store/actions';

function AppointmentApp(props) {
	const pageLayout = useRef(null);
	const dispatch = useDispatch();

	const [ tabValue, setTabValue ] = useState(1);
	const appointment = useSelector(({ appointmentApp }) => appointmentApp.appointment.data);
	function handleChangeTab(event, tabValue) {
		setTabValue(tabValue);
	}

	useEffect(
		() => {
			if (props.match.params.destination === 'invoice') {
				dispatch(Actions.getAppointmentByInvoiceId(props.match.params.appointmentId));
			} else {
				//dispatch(Actions.getAppointmentByInvoiceId(props.match.params.appointmentId));
			}
		},
		[ dispatch, props.match.params.appointmentId, props.match.params.destination ]
	);

	return (
		<React.Fragment>
			<FusePageCarded
				classes={{
					contentWrapper: 'p-24 pb-20 sm:pb-20 h-full',
					root: 'w-full',
					content: 'flex flex-col',
					header: 'items-center min-h-72 h-72 sm:h-136 sm:min-h-136'
				}}
				header={
					tabValue === 1 && (
						<InvoiceAppHeader
							goBack={props.history.goBack}
							invoiceNumber={appointment.invoice.reference}
							pageLayout={pageLayout}
						/>
					)
				}
				contentToolbar={
					<React.Fragment>
						{tabValue === 1 && <InvoiceAppToolbarMenu />}

						<Tabs
							value={tabValue}
							onChange={handleChangeTab}
							indicatorColor="secondary"
							textColor="secondary"
							variant="scrollable"
							scrollButtons="auto"
							classes={{ root: 'w-full h-64' }}
						>
							<Tab className="h-64 normal-case" label="Details" />
							<Tab className="h-64 normal-case" label="Invoice" />
						</Tabs>
					</React.Fragment>
				}
				content={tabValue === 1 && <InvoiceAppContent invoice={appointment.invoice} />}
				leftSidebarHeader={tabValue === 1 && <InvoiceAppSidebarHeader client={appointment.client} />}
				leftSidebarContent={tabValue === 1 && <InvoiceAppSidebarContent client={appointment.client} />}
				ref={pageLayout}
				innerScroll
			/>
			<FuseAnimate animation="transition.expandIn" delay={300}>
				<AppointmentSpeedDial />
			</FuseAnimate>
		</React.Fragment>
	);
}

export default withReducer('appointmentApp', reducer)(AppointmentApp);
