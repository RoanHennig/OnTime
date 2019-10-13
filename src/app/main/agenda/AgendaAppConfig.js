import AgendaApp from './AgendaApp';

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

