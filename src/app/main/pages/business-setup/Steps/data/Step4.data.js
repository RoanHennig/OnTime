const rows = [
	createData(1, 'Business Hours', [
		{
			id: 1,
			shifts: []
		},
		{
			id: 2,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 3,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 4,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 5,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 6,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 7,
			shifts: []
		}
	]),
	createData(2, 'Staff Member', [
		{
			id: 1,
			shifts: []
		},
		{
			id: 2,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 3,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 4,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 5,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 6,
			shifts: [
				{
					id: 1,
					shiftStart: '08:00',
					shiftEnd: '17:00'
				}
			]
		},
		{
			id: 7,
			shifts: []
		}
	])
];

export default {
	createDefaultDataSet() {
		return rows;
	}
};

function createData(staffID, staffName, week) {
	return { staffID, staffName, week };
}
