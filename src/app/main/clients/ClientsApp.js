import React, { useEffect, useRef } from 'react';
import { FusePageSimple, FuseAnimate } from '@fuse';
import { useDispatch } from 'react-redux';

export default function ClientsApp(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const user = useSelector(({ auth }) => auth.user.data);

	useEffect(
		() => {
			dispatch(Actions.getClients(user.user_id));
		},
		[ user.user_id ]
	);

	return (
		<React.Fragment>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 pb-80 sm:pb-80 h-full',
					content: 'flex flex-col h-full',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
				}}
				header={<ClientsHeader pageLayout={pageLayout} />}
				content={<ClientsList />}
				ref={pageLayout}
				innerScroll
			/>
			<FuseAnimate animation="transition.expandIn" delay={300}>
				<Fab
					color="primary"
					aria-label="add"
					className={classes.addButton}
					onClick={(ev) => dispatch(Actions.openNewContactDialog())}
				>
					<Icon>person_add</Icon>
				</Fab>
			</FuseAnimate>
			<ContactDialog />
		</React.Fragment>
	);
}
