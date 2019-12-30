import React from 'react';
import { authRoles } from 'app/auth';

export const AppointmentAppConfig = {
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
			path: [ '/appointment/:Id/:destination?', '/appointment/:Id?' ],
			component: React.lazy(() => import('./AppointmentApp'))
		}
	]
};
