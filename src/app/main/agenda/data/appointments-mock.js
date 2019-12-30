const entities = [
	{
		userId: 'auth0|5da6c12c379f840df8a55437',
		appointments: [
			{
				id: 1,
				title: '08:00 - 09:00',
				summary: 'Madre has an appointment for a Mens Hair Cut',
				labels: [
					{
						id: 1,
						title: 'Mens Cut'
					}
				]
			},
			{
				id: 2,
				title: '11:00 - 11:30',
				summary: 'Jacob Peterson has an appointment for a Hair Coloring - Full - Yellow',
				labels: [
					{
						id: 7,
						title: 'Coloring'
					},
					{
						id: 8,
						title: 'Yellow'
					},
					{
						id: 9,
						title: 'Full'
					}
				]
			},

			{
				id: 3,
				title: '12:00 - 13:30',
				summary: 'Sally Robertson has an appointment for a Consultation regarding a Hair Coloring',
				labels: [
					{
						id: 1,
						title: 'Consulatation'
					},
					{
						id: 2,
						title: 'Coloring'
					}
				]
			},
			{
				id: 4,
				title: '14:00 - 15:00',
				summary: 'Francois has an appointment for a Mens Hair Cut',
				labels: [
					{
						id: 3,
						title: 'Mens Cut'
					},
					{
						id: 4,
						title: 'New Customer'
					}
				]
			}
		]
	},

	{
		userId: 'auth0|5da6c12c379f840df8a55500',
		appointments: [
			{
				id: 5,
				title: '08:00 - 09:00',
				summary: 'Roan has an appointment for a Mens Hair Cut',
				labels: [
					{
						id: 1,
						title: 'Mens Cut'
					}
				]
			}
		]
	}
];

export default {
	getmockappointments(user) {
		return entities.find((x) => x.userId === user).appointments;
	}
};
