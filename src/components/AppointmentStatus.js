import React from 'react';
import clsx from 'clsx';
import _ from '@lodash';

export const appointmentStatuses = [
	{
		id: 0,
		name: 'Scheduled',
		color: 'bg-blue-400 text-white'
	},
	{
		id: 1,
		name: 'Appointment Scheduled',
		color: 'bg-blue-400 text-white'
	},
	{
		id: 2,
		name: 'Paid using Snapscan',
		color: 'bg-yellow-700 text-white'
	},
	{
		id: 3,
		name: 'Paid using Zapper',
		color: 'bg-yellow-700 text-white'
	},
	{
		id: 4,
		name: 'Processed',
		color: 'bg-yellow-700 text-white'
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
	},
	{
		id: 7,
		name: 'Arrived',
		color: 'bg-green-400 text-white'
	},
	{
		id: 8,
		name: 'Appointment Change',
		color: 'bg-blue-400 text-white'
	}
];

function AppointmentStatus(props) {
	const status = _.find(appointmentStatuses, { id: props.id });
	return <div className={clsx('inline text-12 p-4 rounded truncate mr-8', status.color)}>{status.name}</div>;
}

export default AppointmentStatus;
