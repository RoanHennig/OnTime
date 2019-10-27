const clientData = {
	businessId: 1,

	clients: [
		{
			id: 1,
			avatar: null,
			fullName: 'Nadine Hennig',
			mobileNumber: '082 317 1611',
			email: 'nadine@gmail.com',
			appointmentsTotal: 10,
			lastAppointment: 'Yesterday'
		},
		{
			id: 2,
			avatar: null,
			fullName: 'Roan Hennig',
			mobileNumber: '082 258 1478',
			email: 'rh@gmail.com',
			appointmentsTotal: 1,
			lastAppointment: 'A month ago'
		},
		{
			id: 3,
			avatar: null,
			fullName: 'Francois Theron',
			mobileNumber: '082 896 1473',
			email: 'ftheron@gmail.com',
			appointmentsTotal: 3,
			lastAppointment: 'A week ago'
		},
		{
			id: 4,
			avatar: null,
			fullName: 'Madre Swart',
			mobileNumber: '082 156 8921',
			email: 'madswart@gmail.com',
			appointmentsTotal: 12,
			lastAppointment: 'A year ago'
		},
		{
			id: 5,
			avatar: null,
			fullName: 'Bernard Heyns',
			mobileNumber: '084 853 1256',
			email: 'bheyns@gmail.com',
			appointmentsTotal: 5,
			lastAppointment: '2 weeks ago'
		},
		{
			id: 6,
			avatar: null,
			fullName: 'Bernard Heyns',
			mobileNumber: '084 853 1256',
			email: 'bheyns@gmail.com',
			appointmentsTotal: 5,
			lastAppointment: '2 weeks ago'
		},
		{
			id: 7,
			avatar: null,
			fullName: 'Bernard Heyns',
			mobileNumber: '084 853 1256',
			email: 'bheyns@gmail.com',
			appointmentsTotal: 5,
			lastAppointment: '2 weeks ago'
		},
		{
			id: 8,
			avatar: null,
			fullName: 'Bernard Heyns',
			mobileNumber: '084 853 1256',
			email: 'bheyns@gmail.com',
			appointmentsTotal: 5,
			lastAppointment: '2 weeks ago'
		},
		{
			id: 9,
			avatar: null,
			fullName: 'Bernard Heyns',
			mobileNumber: '084 853 1256',
			email: 'bheyns@gmail.com',
			appointmentsTotal: 5,
			lastAppointment: '2 weeks ago'
		}
	]
};

export default {
	getMockClients() {
		return clientData;
	}
};
