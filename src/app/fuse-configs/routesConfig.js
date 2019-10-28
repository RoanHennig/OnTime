import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse';
import { authRoles } from 'app/auth';
import { LoginConfig } from 'app/main/auth/login/LoginConfig';
import { CallbackConfig } from 'app/main/auth/callback/CallbackConfig';
import { pagesConfigs } from 'app/main/pages/pagesConfigs';
import { mainConfig } from 'app/main/mainConfig';

const routeConfigs = [ ...pagesConfigs, ...mainConfig, LoginConfig, CallbackConfig ];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, authRoles.user),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/agenda" />
	}
];

export default routes;
