import React, { useRef } from 'react';
import { FusePageCarded, FuseAnimate } from '@fuse';
import withReducer from 'app/store/withReducer';
import AgendaList from './agendaItems/AgendaList';
import AgendaSpeedDial from './agendaItems/AgendaSpeedDial';
import AppointmentDetails from './appointment/AppointmentDetails';
import AppointmentToolbar from './appointment/AppointmentToolbar';
import AgendaToolbar from './agendaItems/AgendaToolbar';
import AgendaAppHeader from './AgendaAppHeader';
import AgendaAppSidebarHeader from './AgendaAppSidebarHeader';
import AgendaAppSidebarContent from './AgendaAppSidebarContent';
import reducer from './store/reducers';

function AppointmentApp(props) {
	const pageLayout = useRef(null);
	const [ tabValue, setTabValue ] = useState(2);

	function handleChangeTab(event, tabValue) {
		setTabValue(tabValue);
	}

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
					tabValue === 2 && (
						<InvoiceAppHeader
							returnUrl={props.returnUrl}
							invoiceNumber={appointment.invoice.number}
							pageLayout={pageLayout}
						/>
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
						<Tab className="h-64 normal-case" label="Details" />
						<Tab className="h-64 normal-case" label="Invoice" />
					</Tabs>
				}
				content={tabValue === 2 && <InvoiceAppContent />}
				leftSidebarHeader={tabValue === 2 && <InvoiceAppSidebarHeader />}
				leftSidebarContent={tabValue === 2 && <InvoiceAppSidebarContent />}
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
