const clientDetailData = {
	client: [
		{
			id: 1,
			details: {
				firstName: 'Roan',
				lastName: 'Hennig',
				gender: 'Male',
				birthday: '2 November',
				birthDate: new Date(1993, 10, 2),
				mobile: '+27823171611',
				email: 'roanhennig@gmail.com',
				address: 'De Velde Estate',
				city: 'Cape Town',
				zipCode: '7130',
				notifications: 1,
				sendMarketingNotifications: true,
				notes: 'hi!',
				alwaysShowAppointmentNotes: false
			},
			lastAppointment: {
				date: '13 October 2019',
				service: [ 'Mens Cut', 'Styled' ],
				payment: 'Paid using Snapscan'
			},
			lastInvoice: {
				date: '14 October 2019',
				subtotal: '150',
				tax: '15',
				discount: '20',
				total: '145',
				number: 'INV0001258'
			}
		}
	]
};

export default {
	getMockClient(clientId) {
		return clientDetailData.client.find((x) => x.id === clientId);
	}
};
