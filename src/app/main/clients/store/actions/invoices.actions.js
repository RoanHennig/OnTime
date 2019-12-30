import serviceInvoices from '../../data/invoicedata-mock.js';

export const GET_INVOICES = '[CLIENTS APP] GET INVOICES';

export function getInvoices(clientId) {
	const invoices = serviceInvoices.getMockInvoices(clientId);
	return (dispatch) =>
		dispatch({
			type: GET_INVOICES,
			payload: invoices
		});
}
