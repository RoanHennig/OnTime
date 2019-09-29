import React from 'react';
import {authRoles} from 'app/auth';

 export const BusinessSetupConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth : authRoles.newBusinessOwner,
    routes  : [
        {
            path     : '/business-setup',
            component: React.lazy(() => import('./BusinessSetup'))
        }
    ]
};
