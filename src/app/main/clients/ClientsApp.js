import React from 'react';
import { FusePageCarded, FuseAnimate } from '@fuse';
import ClientsAppSpeedDial from './ClientsAppSpeedDial';
import ClientsHeader from './ClientsHeader';
import ClientsTable from './ClientsTable';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';

function ClientsApp() {
	return (
		<React.Fragment>
			<FusePageCarded
				classes={{
					content: 'flex',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
				}}
				header={<ClientsHeader />}
				content={<ClientsTable />}
				innerScroll
			/>
			<FuseAnimate animation="transition.fadeIn" delay={300}>
				<ClientsAppSpeedDial />
			</FuseAnimate>
		</React.Fragment>
	);
}

export default withReducer('clientsApp', reducer)(ClientsApp);
