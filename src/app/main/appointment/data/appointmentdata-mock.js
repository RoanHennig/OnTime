const appointmentData = [
	{
		client: {
			id: 1,
			firstName: 'Roan',
			lastName: 'Hennig',
			email: 'roanhennig@gmail.com'
		},
		detail: {},
		invoice: {
			id: 1,
			date: '2019-10-21',
			reference: '#00001',
			client: {
				firstName: 'Roan',
				lastName: 'Hennig',
				invoiceAddress: {
					address: 'De Velde Estate, Somerset West'
				},
				mobile: '082 317 1611',
				email: 'roanhennig@gmail.com'
			},
			services: [
				{
					id: 1,
					name: 'Mens Cut',
					price: '150'
				}
			],
			subtotal: '135',
			tax: '15',
			discount: '10',
			total: '150'
		}
	}
];

export default {
	getMockAppointmentByInvoice(invoiceId) {
		console.log(invoiceId);
		//return appointmentData.find((x) => x.invoice.id === invoiceId);
		return appointmentData[0];
	}
};
