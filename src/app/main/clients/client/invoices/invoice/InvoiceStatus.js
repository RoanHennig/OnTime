import React from 'react';
import clsx from 'clsx';
import _ from '@lodash';

export const invoicesStatuses = [
	{
		id: 1,
		name: 'Processed',
		color: 'bg-blue-400 text-white'
	},
	{
		id: 2,
		name: 'Processed & Sent',
		color: 'bg-green-400 text-white'
	}
];

function InvoiceStatus(props) {
	const status = _.find(invoicesStatuses, { id: props.id });
	return <div className={clsx('inline text-12 p-4 rounded truncate mr-8', status.color)}>{status.name}</div>;
}

export default InvoiceStatus;
