import React, { useEffect, useState } from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import * as Actions from './store/actions';

function AgendaAppSidebarHeader() {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(Actions.getStaffMembers(0));
		},
		[ dispatch ]
	);

	const user = useSelector(({ auth }) => auth.user.data);
	const staff = useSelector(({ agendaApp }) => agendaApp.agendaSidebar.staff);

	const [ selectedStaffRole, setSelectedStaffRole ] = useState('owner');
	const [ selectedStaff, setSelectedStaff ] = useState(user.user_id);

	const handleStaffChange = (ev) => {
		setSelectedStaff(ev.target.value);
		setSelectedStaffRole(staff.find((x) => x.userId === ev.target.value).businessRole);
		dispatch(Actions.getAppointments(ev.target.value));
		dispatch(Actions.getNotifications(ev.target.value));
	};

	return (
		<div className="flex flex-col justify-center h-full p-24">
			<div className="flex items-center flex-1">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<CalendarTodaySharpIcon className="mr-16 text-32" />
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<span className="text-24">Today</span>
				</FuseAnimate>
			</div>

			<FuseAnimate animation="transition.slideUpIn" delay={300}>
				<TextField
					id="staff-selection"
					select
					label={selectedStaffRole}
					value={selectedStaff}
					onChange={handleStaffChange}
					placeholder="Select Staff Member"
					margin="normal"
				>
					{staff.map((staffMember) => (
						<MenuItem key={staffMember.userId} value={staffMember.userId}>
							{staffMember.name}
						</MenuItem>
					))}
				</TextField>
			</FuseAnimate>
		</div>
	);
}

export default AgendaAppSidebarHeader;
