import React from 'react';
import {Redirect} from 'react-router-dom';
import {authRoles} from 'app/auth';

export const AgendaAppConfig = {
    settings: {
        layout: {
            config: {
                footer        : {
                    display: false
                }
            }
        }
    },
    
    routes  : [
        {
            path     : [
                '/agenda/:agendaHandle/:appointmentId?',
            ],
            component: React.lazy(() => import('./AgendaApp'))
        },
        {
            path     : '/agenda',
            component: () => <Redirect to="/agenda/appointments"/>
        }
    ]
};
