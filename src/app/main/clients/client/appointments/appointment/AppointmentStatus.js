import React from 'react';
import clsx from 'clsx';
import _ from '@lodash';

export const appointmentStatuses = [
	{
		id: 1,
		name: 'Appointment Pending',
		color: 'bg-blue-400 text-white'
	},
	{
		id: 2,
		name: 'Paid using Snapscan',
		color: 'bg-green-400 text-white'
	},
	{
		id: 3,
		name: 'Paid using Zapper',
		color: 'bg-green-400 text-white'
	},
	{
		id: 4,
		name: 'Paid using cash',
		color: 'bg-green-400 text-white'
	},
	{
		id: 5,
		name: 'Appointment Cancelled',
		color: 'bg-red-400 text-white'
	},
	{
		id: 6,
		name: 'No Show',
		color: 'bg-red-400 text-white'
	}
];

function AppointmentStatus(props) {
	const status = _.find(appointmentStatuses, { id: props.id });
	return <div className={clsx('inline text-12 p-4 rounded truncate mr-8', status.color)}>{status.name}</div>;
}

export default AppointmentStatus;
