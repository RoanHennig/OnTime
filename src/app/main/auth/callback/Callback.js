import React, {useEffect} from 'react';
import {FuseSplashScreen} from '@fuse';
import auth0Service from 'app/services/auth0Service';
import * as userActions from 'app/auth/store/actions';
import history from '@history';
import {useDispatch} from 'react-redux';

function Callback(props)
{
    const dispatch = useDispatch();

    useEffect(() => {
        auth0Service.onAuthenticated(() => {
            auth0Service.getUserData().then(tokenData => {
                dispatch(userActions.setUserDataAuth0(tokenData));
          
                if(!auth0Service.isRegistrationComplete()){
                    history.push({
                        pathname: '/business-setup'
                    });
                }
            });
        });
    }, [dispatch]);

    return (
        <FuseSplashScreen/>
    );
}

export default Callback;
