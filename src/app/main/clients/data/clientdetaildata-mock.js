const clientDetailData = {
	client: [
		{
			id: 1,
			fullName: 'Roan Hennig',
			general: {
				gender: 'male',
				birthday: 'November 2nd',
				notes: 'always the same mens cut'
			},
			contact: {
				mobile: '082 317 1611',
				email: 'roan@gmail.com',
				address: 'De Velde Estate'
			},
			lastAppointment: {
				date: '13 October 2019',
				service: [ 'Mens Cut', 'Styled' ],
				payment: 'Paid using Snapscan'
			},
			lastInvoice: {
				date: '14 October 2019',
				amount: 'R 150.00',
				number: 'INV0001258'
			}
		}
	]
};

export default {
	getMockClient(clientId) {
		return clientDetailData.client.find((x) => x.id == clientId);
	}
};
