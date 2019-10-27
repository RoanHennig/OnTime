import React, { useEffect, useRef } from 'react';
import { FusePageCarded, FuseAnimate } from '@fuse';
import ClientsAppSpeedDial from './ClientsAppSpeedDial';
import ClientsHeader from './ClientsHeader';
import ClientsTable from './ClientsTable';
import { useDispatch } from 'react-redux';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';

function ClientsApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);

	return (
		<React.Fragment>
			<FusePageCarded
				classes={{
					contentWrapper: 'p-0 sm:p-24 pb-20 sm:pb-20 h-full',
					content: 'flex flex-col h-full',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
				}}
				header={<ClientsHeader pageLayout={pageLayout} />}
				content={<ClientsTable />}
				ref={pageLayout}
				innerScroll
			/>
			<FuseAnimate animation="transition.fadeIn" delay={500}>
				<ClientsAppSpeedDial />
			</FuseAnimate>
		</React.Fragment>
	);
}

export default withReducer('clientsApp', reducer)(ClientsApp);
