import React from 'react';
import {authRoles} from 'app/auth';

 export const BusinessSetupConfig = {
    settings: {
        layout: {
            config: {
                navbar        : {
                    display: false
                },
                toolbar       : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
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
