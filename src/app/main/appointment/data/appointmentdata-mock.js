const appointmentData = [
	{
		client: {
			id: 1,
			avatar: 'assets/images/avatars/profile.jpg',
			firstName: 'Roan',
			lastName: 'Hennig',
			mobile: '082 317 1611',
			email: 'roanhennig@gmail.com',
			invoiceAddress: {
				address: 'De Velde Estate, Somerset West'
			}
		},
		staff: {
			id: 1,
			avatar: 'assets/images/avatars/profile.jpg',
			firstName: 'Madre',
			lastName: 'Swart'
		},
		details: {
			startTime: new Date(2019, 10, 7, 13),
			endTime: new Date(2019, 10, 7, 14, 30),
			appointmentStatus: 'Processed',
			services: [
				{
					id: 1,
					name: 'Mens Cut',
					price: '150',
					duration: '1H 30M'
				},
				{
					id: 2,
					name: 'Coloring',
					price: '500',
					additionalResouces: [
						{
							prompt: 'Color',
							type: 1,
							input: 'Red'
						}
					],
					duration: '1H 30M'
				}
			],
			history: [
				{
					id: 1,
					date: new Date(2019, 10, 7, 14, 30),
					note: 'Client phoned and requested a specific hair gel'
				},

				{
					id: 8,
					date: new Date(2019, 10, 9, 14, 30),
					note: 'Client requested a re-schedule'
				},
				{
					id: 7,
					date: new Date(2019, 10, 11, 14, 30),
					note: ''
				},
				{
					id: 2,
					date: new Date(2019, 10, 9, 14, 30),
					note: ''
				}
			],
			payment: {
				transactionId: 1,
				method: 'cash',
				amount: '150',
				date: new Date(2019, 10, 7)
			}
		},
		invoice: {
			id: 1,
			date: '2019-10-21',
			reference: '#00001',
			subtotal: '135',
			client: {
				id: 1,
				firstName: 'Roan',
				lastName: 'Hennig',
				mobile: '082 317 1611',
				email: 'roanhennig@gmail.com',
				invoiceAddress: {
					address: 'De Velde Estate, Somerset West',
					lat: '',
					lng: ''
				}
			},
			services: [
				{
					id: 1,
					name: 'Mens Cut',
					price: '150',
					duration: '1H 30M'
				}
			],
			tax: '15',
			discount: '10',
			total: '150'
		}
	}
];

export default {
	getMockAppointmentByInvoice(invoiceId) {
		//return appointmentData.find((x) => x.invoice.id === invoiceId);
		return appointmentData[0];
	},

	getMockAppointmentByAppointment(appointmentId) {
		return appointmentData[0];
	}
};
