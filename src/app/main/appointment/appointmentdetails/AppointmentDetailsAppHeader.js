import React from 'react';
import { Hidden, Icon, IconButton } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import Typography from '@material-ui/core/Typography';
import Moment from 'moment';
import AppointmentStatus from '../../../../components/AppointmentStatus';
import { useSelector } from 'react-redux';

function AppointmentDetailsAppHeader(props) {
	const appointmentStatus = useSelector(({ appointmentApp }) => appointmentApp.appointment.appointmentStatus);
	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex flex-1 flex-col items-center sm:items-start">
				<div className="flex flex-shrink items-center sm:w-288">
					<Hidden lgUp>
						<IconButton
							onClick={(ev) => props.pageLayout.current.toggleLeftSidebar()}
							aria-label="open left sidebar"
							className="mr-40 float-left"
						>
							<Icon className="text-32">menu</Icon>
						</IconButton>
					</Hidden>
					<div className="flex items-center">
						<FuseAnimate animation="transition.slideLeftIn" delay={200}>
							<Typography
								className="normal-case text-20 flex items-center sm:mb-12"
								role="button"
								onClick={() => props.goBack()}
								color="inherit"
							>
								<Icon className="mr-4 text-32">arrow_back</Icon>
								Back
							</Typography>
						</FuseAnimate>
					</div>
				</div>

				<div className="flex flex-col min-w-0 items-center sm:items-start hidden sm:flex">
					<FuseAnimate animation="transition.slideLeftIn" delay={200}>
						<Typography className="text-16 sm:text-20 truncate">
							{Moment(props.details.startTime).format('YYYY-MM-DD') +
								' ' +
								Moment(props.details.startTime).format('HH:mm') +
								' - ' +
								Moment(props.details.endTime).format('HH:mm')}
						</Typography>
					</FuseAnimate>
				</div>
				<div className="flex flex-col min-w-0 items-center sm:items-start sm:flex mt-8 mb-8">
					<FuseAnimate animation="transition.fadeIn" delay={200}>
						<AppointmentStatus id={appointmentStatus.id} />
					</FuseAnimate>
				</div>
			</div>
		</div>
	);
}

export default AppointmentDetailsAppHeader;
