import React from 'react';
import { authRoles } from 'app/auth';

export const CalendarAppConfig = {
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
			path: '/calendar',
			component: React.lazy(() => import('./CalendarApp'))
		}
	]
};
