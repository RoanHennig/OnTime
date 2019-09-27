import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {authRoles} from 'app/auth';

const routeConfigs = [
    ExampleConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs,authRoles.user),
    {
        path     : '/',
        component: () => <Redirect to="/login"/>
    }
];

export default routes;
