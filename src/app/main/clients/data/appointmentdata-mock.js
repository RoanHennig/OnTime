const appointmentData = {
	clientId: 1,
	appointments: [
		{
			id: 1,
			services: {
				label: 'Package - Mens Combo',
				items: [ 'Mens Cut', 'Very short' ]
			},
			staffMember: 'Madre Swart',
			statuses: [ 5 ],
			total: '150',
			date: new Date(2019, 9, 30, 14)
		},
		{
			id: 2,
			services: {
				label: 'Custom',
				items: [ 'Mens Cut', 'Very short' ]
			},
			staffMember: 'Roan Hennig',
			statuses: [ 2, 6 ],
			total: '500.50',
			date: new Date(2019, 9, 25, 14)
		},
		{
			id: 3,
			services: {
				label: 'Mens Cut',
				items: [ 'Mens Cut', 'Very short' ]
			},
			staffMember: 'Madre Swart',
			statuses: [ 2 ],
			total: '150',
			date: new Date(2019, 8, 30, 14)
		},
		{
			id: 4,
			services: {
				label: 'Custom',
				items: [ 'Mens Cut', 'Very short' ]
			},
			staffMember: 'Madre Swart',
			statuses: [ 3 ],
			total: '150',
			date: new Date(2019, 7, 30, 14)
		},
		{
			id: 5,
			services: {
				label: 'Custom',
				items: [ 'Mens Cut', 'Very short' ]
			},
			staffMember: 'Madre Swart',
			statuses: [ 1 ],
			total: '150',
			date: new Date(2019, 11, 30, 14, 30)
		}
	]
};

export default {
	getMockAppointments() {
		return appointmentData;
	}
};
