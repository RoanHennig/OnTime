import React from 'react';
import { authRoles } from 'app/auth';

export const ClientsAppConfig = {
	settings: {
		layout: {
			config: {
				footer: {
					display: false
				}
			}
		}
	},
	auth: authRoles.user,
	routes: [
		{
			path: '/clients/:clientId',
			component: React.lazy(() => import('./client/About'))
		},
		{
			path: '/clients',
			component: React.lazy(() => import('./ClientsApp'))
		}
	]
};
