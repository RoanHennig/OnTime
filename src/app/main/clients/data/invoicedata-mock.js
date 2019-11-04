const invoiceData = {
	clientId: 1,
	invoices: [
		{
			id: 1,
			status: 1,
			total: '150',
			date: new Date(2019, 9, 30)
		},
		{
			id: 2,
			status: 2,
			total: '500.50',
			date: new Date(2019, 9, 25)
		}
	]
};

export default {
	getMockInvoices() {
		return invoiceData;
	}
};
