import serviceAppointments from '../../data/appointmentdata-mock.js';

export const GET_APPOINTMENTS = '[CLIENTS APP] GET APPOINTMENTS';
export const SET_APPOINTMENTS_SEARCH_TEXT = '[CLIENTS APP] SET APPOINTMENTS SEARCH TEXT';

export function getAppointments(clientId) {
	const appointments = serviceAppointments.getMockAppointments(clientId);
	return (dispatch) =>
		dispatch({
			type: GET_APPOINTMENTS,
			payload: appointments
		});
}

export function setAppointmentsSearchText(event) {
	return {
		type: SET_APPOINTMENTS_SEARCH_TEXT,
		searchText: event.target.value
	};
}
