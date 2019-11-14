import serviceAppointment from '../../data/appointmentdata-mock.js';

export const GET_APPOINTMENT = '[APPOINTMENT APP] GET APPOINTMENT';
export const SET_APPOINTMENT_STATUS = '[APPOINTMENT APP] SET APPOINTMENT STATUS';

export function getAppointmentByInvoiceId(invoiceId) {
	const appointment = serviceAppointment.getMockAppointmentByInvoice(invoiceId);
	return (dispatch) =>
		dispatch({
			type: GET_APPOINTMENT,
			payload: appointment
		});
}

export function getAppointmentByAppointmentId(appointmentId) {
	const appointment = serviceAppointment.getMockAppointmentByInvoice(appointmentId);
	return (dispatch) =>
		dispatch({
			type: GET_APPOINTMENT,
			payload: appointment
		});
}

export function setAppointmentStatus(appointmentStatus) {
	return (dispatch) =>
		dispatch({
			type: SET_APPOINTMENT_STATUS,
			payload: appointmentStatus
		});
}
