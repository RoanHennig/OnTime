import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Tooltip } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import ServiceItemChip from '../../../../components/ServiceItemChip';

const useStyles = makeStyles((theme) => ({
	tooltip: {
		marginLeft: '10px',
		verticalAlign: 'top',
		textAlign: 'left'
	},
	text: {
		fontSize: '1.5em',
		lineHeight: '30px'
	},
	client: {
		fontSize: '1.5em',
		fontWeight: 'bold',
		lineHeight: '30px'
	}
}));

function AppointmentTooltipTemplate(props) {
	const classes = useStyles();

	return (
		<div className={'h-96 mb-10'}>
			{props.data.type === 1 ? (
				<div className={classes.tooltip}>
					<div className={classes.client}>John Smith</div>
					<div className={classes.text}>{props.data.text}</div>
					<div>
						{props.data.startDate.toLocaleTimeString()} - {props.data.endDate.toLocaleTimeString()}
					</div>
					<div className="flex justify-between w-full">
						<div className="flex items-center">
							<Tooltip title="Cancel Appointment" placement="right">
								<IconButton aria-label="Cancel Appointment">
									<EventBusyIcon />
								</IconButton>
							</Tooltip>

							<Tooltip title="Reschedule" placement="right">
								<IconButton aria-label="Reschedule">
									<RestoreIcon />
								</IconButton>
							</Tooltip>
						</div>

						<div className="flex items-center">
							<ServiceItemChip className="mr-4 float-right" title="red" key={1} />
							<ServiceItemChip className="mr-4 float-right" title="long-hair" key={2} />
						</div>
					</div>
				</div>
			) : (
				<div className={classes.tooltip}>
					<div className={classes.client}>Lunch Break</div>
					<div>
						{props.data.startDate.toLocaleTimeString()} - {props.data.endDate.toLocaleTimeString()}
					</div>
				</div>
			)}
		</div>
	);
}

export default AppointmentTooltipTemplate;
