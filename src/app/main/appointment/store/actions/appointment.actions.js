import serviceAppointment from '../../data/appointmentdata-mock.js';

export const GET_APPOINTMENT = '[APPOINTMENT APP] GET APPOINTMENT';

export function getAppointmentByInvoiceId(invoiceId) {
	const appointment = serviceAppointment.getMockAppointmentByInvoice(invoiceId);
	return (dispatch) =>
		dispatch({
			type: GET_APPOINTMENT,
			payload: appointment
		});
}
