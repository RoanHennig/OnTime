import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import NoteIcon from '@material-ui/icons/Note';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RestoreIcon from '@material-ui/icons/Restore';
import EventBusyIcon from '@material-ui/icons/EventBusy';

function AppointmentDetailsAppToolbarMenu(props) {
	function handleRebookAppointment() {}

	function handleEditAppointmentNotes() {}

	function handleRescheduleAppointment() {}

	function handleEditAppointment() {}

	function handleCancelAppointment() {}

	return (
		<div className="flex flex-1 items-center sm:px-8 mr-16">
			{props.appointmentStatus !== 'complete' ? (
				<React.Fragment>
					<Tooltip title="Rebook Appointment" placement="top">
						<IconButton
							aria-label="Rebook Appointment"
							onClick={(ev) => {
								handleRebookAppointment();
							}}
						>
							<DateRangeIcon />
						</IconButton>
					</Tooltip>

					<Tooltip title="Edit Appointment Notes" placement="top">
						<IconButton
							aria-label="Edit Appointment Notes"
							onClick={(ev) => {
								handleEditAppointmentNotes();
							}}
						>
							<NoteIcon />
						</IconButton>
					</Tooltip>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Tooltip title="Edit Appointment" placement="top">
						<IconButton
							aria-label="Edit Appointment"
							onClick={(ev) => {
								handleEditAppointment();
							}}
						>
							<EditIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Reschedule Appointment" placement="top">
						<IconButton
							aria-label="Reschedule Appointment"
							onClick={(ev) => {
								handleRescheduleAppointment();
							}}
						>
							<RestoreIcon />
						</IconButton>
					</Tooltip>

					<Tooltip title="Cancel Appointment" placement="top">
						<IconButton
							aria-label="Cancel Appointment"
							onClick={(ev) => {
								handleCancelAppointment();
							}}
						>
							<EventBusyIcon />
						</IconButton>
					</Tooltip>
				</React.Fragment>
			)}
		</div>
	);
}

export default AppointmentDetailsAppToolbarMenu;
