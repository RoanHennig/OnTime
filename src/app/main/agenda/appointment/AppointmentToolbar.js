import React from 'react';
import { Icon, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const pathToRegexp = require('path-to-regexp');

function AppointmentToolbar(props) {
	const appointment = useSelector(({ agendaApp }) => agendaApp.appointment);

	const toPath = pathToRegexp.compile(props.match.path);
	const matchParams = { ...props.match.params };
	delete matchParams['appointmentId'];
	const deselectUrl = toPath(matchParams);

	if (!appointment) {
		return null;
	}

	return (
		<div className="flex flex-1 items-center justify-between overflow-hidden sm:px-16">
			<IconButton onClick={() => props.history.push(deselectUrl)}>
				<Icon>arrow_back</Icon>
			</IconButton>
		</div>
	);
}

export default withRouter(AppointmentToolbar);
