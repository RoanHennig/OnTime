import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {authRoles} from 'app/auth';
import {LoginConfig} from 'app/main/auth/login/LoginConfig';

const routeConfigs = [
    ExampleConfig,
    LoginConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs,authRoles.user),
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    }
];

export default routes;
