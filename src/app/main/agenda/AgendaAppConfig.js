import AgendaApp from './AgendaApp';
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
    auth : authRoles.user,
    routes  : [
        {
            path     : '/agenda',
            component: AgendaApp
        }
    ]
};

