import React from 'react';
import { FusePageCarded } from '@fuse';
import withReducer from 'app/store/withReducer';
import AppointmentsHeader from './AppointmentsHeader';
import AppointmentsTable from './AppointmentsTable';
import reducer from '../../store/reducers';

function Appointments() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<AppointmentsHeader />}
			content={<AppointmentsTable />}
			innerScroll
		/>
	);
}

export default withReducer('clientsApp', reducer)(Appointments);
