import AgendaApp from './AgendaApp';
import {authRoles} from 'app/auth';

export const AgendaAppConfig = {
    settings: {
        layout: {
            config: {}
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

