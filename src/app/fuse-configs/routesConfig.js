import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse';
import { ExampleConfig } from 'app/main/example/ExampleConfig';
import { AgendaAppConfig } from 'app/main/agenda/AgendaAppConfig';
import { CalendarAppConfig } from 'app/main/calendar/CalendarAppConfig';
import { ClientsAppConfig } from 'app/main/clients/ClientsAppConfig';
import { authRoles } from 'app/auth';
import { LoginConfig } from 'app/main/auth/login/LoginConfig';
import { CallbackConfig } from 'app/main/auth/callback/CallbackConfig';
import { pagesConfigs } from 'app/main/pages/pagesConfigs';

const routeConfigs = [
	...pagesConfigs,
	ExampleConfig,
	,
	CalendarAppConfig,
	AgendaAppConfig,
	ClientsAppConfig,
	LoginConfig,
	CallbackConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, authRoles.user),
	{
		path: '/',
		component: () => <Redirect to="/agenda" />
	}
];

export default routes;
