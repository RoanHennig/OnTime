import React, { useEffect, useState } from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import { FuseAnimate } from '@fuse';
import AppointmentTooltipTemplate from './templates/AppointmentTooltipTemplate';
import AppointmentBlockedTemplate from './templates/AppointmentBlockedTemplate';

function CalendarAppContent(props) {
	const downHandler = (e) => {
		if (e.target.parentNode.rowIndex) {
			start = e.target.parentNode.rowIndex;
		}
	};

	const leaveHandler = (e) => {
		if (
			e.relatedTarget &&
			e.relatedTarget.outerHTML &&
			e.relatedTarget.outerHTML.indexOf('SpeedDialopenIconexample') == -1
		) {
			dispatch(Actions.setGrowSpeedDial(false));
			dispatch(Actions.setSelectedDates(null));
		}
	};

	const upHandler = (e) => {
		if (e.target.parentNode.rowIndex) {
			end = e.target.parentNode.rowIndex;
			const startHours = businessSettings.startingTime + start * 15 / 60;
			const startTime = (start * 15) % 60;
			const endHours = businessSettings.startingTime + (end + 1) * 15 / 60;
			const endTime = ((end + 1) * 15) % 60;
			const selectedDates = {
				startDate: new Date(2017, 5, 25, startHours, startTime),
				endDate: new Date(2017, 5, 25, endHours, endTime),
				staffIndex: e.target.cellIndex
			};
			dispatch(Actions.setSelectedDates(selectedDates));
			dispatch(Actions.setGrowSpeedDial(true));
		} else {
			dispatch(Actions.setSelectedDates(null));
			dispatch(Actions.setGrowSpeedDial(false));
		}
	};

	const getAppointmentTooltipTemplate = (data) => {
		return <AppointmentTooltipTemplate data={data} scheduler={props.scheduler} />;
	};

	const getAppointmentTemplate = (data) => {
		if (data.type == 2) {
			return <AppointmentBlockedTemplate data={data} />;
		} else {
			return null;
		}
	};

	const onContentReady = (e) => {
		if (props.scheduler == null) {
			e.component.element().onpointerdown = downHandler;
			e.component.element().onpointerup = upHandler;
			e.component.element().onpointerleave = leaveHandler;
			props.setScheduler(e.component);
		}
	};

	let end;
	let start;

	const dispatch = useDispatch();

	const user = useSelector(({ auth }) => auth.user.data);
	const businessSettings = useSelector(({ calendarApp }) => calendarApp.calendar.businessSettings);
	const filterStaff = useSelector(({ calendarApp }) => calendarApp.calendar.filterStaff);
	const data = useSelector(({ calendarApp }) => calendarApp.calendar.events);
	const eventTypes = useSelector(({ calendarApp }) => calendarApp.calendar.eventTypes);

	const groups = [ 'staffMember' ];
	const currentDate = new Date(2017, 5, 25);
	const views = [ 'day', 'week', 'workWeek', 'month' ];

	useEffect(
		() => {
			dispatch(Actions.getEvents());
			dispatch(Actions.getEventTypes());
			dispatch(Actions.getStaffMembers());
		},
		[ user.user_id ]
	);

	return (
		<FuseAnimate animation="transition.fadeIn" duration={200} delay={200}>
			<React.Fragment>
				<Scheduler
					dataSource={data}
					views={views}
					groups={groups}
					showCurrentTimeIndicator={true}
					adaptivityEnabled={props.isMobile}
					defaultCurrentView={'day'}
					defaultCurrentDate={currentDate}
					startDayHour={businessSettings.startingTime}
					endDayHour={businessSettings.endingTime}
					appointmentRender={getAppointmentTemplate}
					appointmentTooltipRender={getAppointmentTooltipTemplate}
					onContentReady={onContentReady}
					cellDuration={15}
				>
					<Resource dataSource={filterStaff} fieldExpr={'staffMember'} />
					<Resource dataSource={eventTypes} fieldExpr={'type'} label={'Type'} useColorAsDefault={true} />
				</Scheduler>
			</React.Fragment>
		</FuseAnimate>
	);
}

export default CalendarAppContent;
