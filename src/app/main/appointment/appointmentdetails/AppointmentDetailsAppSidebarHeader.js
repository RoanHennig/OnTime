import React from 'react';
import { FuseAnimate } from '@fuse';
import EventIcon from '@material-ui/icons/Event';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

function AppointmentDetailsAppSidebarHeader(props) {
	function handleGoToClient() {
		props.history.push('/clients/' + props.client.id);
	}

	return (
		<div className="flex flex-col justify-center h-full p-24">
			<div className="flex items-center flex-1">
				<FuseAnimate animation="transition.slideLeftIn" delay={200}>
					<EventIcon className="mr-16 text-32" />
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={200}>
					<span className="text-24">Appointment</span>
				</FuseAnimate>
			</div>

			<FuseAnimate animation="transition.slideLeftIn" delay={200}>
				<Button
					className="normal-case text-18 flex items-center"
					color="inherit"
					size="small"
					onClick={handleGoToClient}
					startIcon={<AccountCircleIcon className="mr-4 text-24" />}
				>
					{props.client.firstName + ' ' + props.client.lastName}
				</Button>
			</FuseAnimate>
		</div>
	);
}

export default withRouter(AppointmentDetailsAppSidebarHeader);
