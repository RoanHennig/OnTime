import React from 'react';

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
	routes: [
		{
			path: '/clients',
			component: React.lazy(() => import('./ClientsApp'))
		}
	]
};
