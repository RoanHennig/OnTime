import serviceEvents from '../../data/calendardata-mock.js';

export const GET_EVENTS = '[CALENDAR APP] GET EVENTS';
export const GET_STAFF_MEMBERS = '[CALENDAR APP] GET STAFF MEMBERS';
export const GET_EVENT_TYPES = '[CALENDAR APP] GET EVENT TYPES';
export const SET_FILTER_STAFF_MEMBERS = '[CALENDAR APP] SET FILTER STAFF MEMBERS';
export const SET_SELECTED_DATES = '[CALENDAR APP] SET SELECTED DATES';
export const SET_GROW_SPEED_DIAL = '[CALENDAR APP] SET GROW SPEED DIAL';

export function getEvents(user) {
	const events = serviceEvents.getMockCalendarEvents(user);
	return (dispatch) =>
		dispatch({
			type: GET_EVENTS,
			payload: events
		});
}

export function getStaffMembers(user) {
	const staff = serviceEvents.getMockStaffData(user);
	return (dispatch) =>
		dispatch({
			type: GET_STAFF_MEMBERS,
			payload: staff
		});
}

export function getEventTypes(user) {
	const eventTypes = serviceEvents.getMockEventTypes(user);
	return (dispatch) =>
		dispatch({
			type: GET_EVENT_TYPES,
			payload: eventTypes
		});
}

export function setFilterStaffMembers(filter) {
	return (dispatch) =>
		dispatch({
			type: SET_FILTER_STAFF_MEMBERS,
			payload: filter
		});
}

export function setSelectedDates(selectedDates) {
	return (dispatch) =>
		dispatch({
			type: SET_SELECTED_DATES,
			payload: selectedDates
		});
}

export function setGrowSpeedDial(show) {
	return (dispatch) =>
		dispatch({
			type: SET_GROW_SPEED_DIAL,
			payload: show
		});
}
