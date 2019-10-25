import React from 'react';

export const ClientsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/clients',
			component: React.lazy(() => import('./ClientsApp'))
		}
	]
};
