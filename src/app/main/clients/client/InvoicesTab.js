import React from 'react';
import InvoicesTable from './invoices/InvoicesTable';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { FuseAnimate } from '@fuse';

export default function InvoicesTab(props) {
	return (
		<React.Fragment>
			<InvoicesTable />
			<FuseAnimate animation="transition.expandIn" delay={300}>
				<Fab
					color="secondary"
					aria-label="edit"
					className={props.classes.speedDial}
					//onClick={(ev) => dispatch(Actions.openEditClientDialog(client.details))}
				>
					<AddIcon />
				</Fab>
			</FuseAnimate>
		</React.Fragment>
	);
}
