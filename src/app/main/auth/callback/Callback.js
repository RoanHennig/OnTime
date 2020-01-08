import React, { useEffect } from 'react';
import { FuseSplashScreen } from '@fuse';
import auth0Service from 'app/services/auth0Service';
import * as userActions from 'app/auth/store/actions';
import history from '@history';
import { useDispatch } from 'react-redux';

function Callback(props) {
	const dispatch = useDispatch();

	useEffect(
		() => {
			auth0Service.onAuthenticated(() => {
				auth0Service.getUserData().then((tokenData) => {
					if (tokenData.user_metadata.accountStatus === 'Incomplete') {
						props
							.submitRegister(
								tokenData.user_metadata.business_name,
								tokenData.user_metadata.first_name,
								tokenData.user_metadata.last_name,
								tokenData.user_id,
								tokenData.email
							)
							.then((authData) => {
								tokenData.business_id = authData.payload.data.businessId;
								dispatch(userActions.setUserDataAuth0(tokenData));

								props.showMessage({ message: 'Logged in with Auth0' });
								history.push({
									pathname: '/business-setup'
								});
							});
					} else {
						dispatch(userActions.setUserDataAuth0(tokenData));
					}
				});
			});
		},
		[ dispatch ]
	);

	return <FuseSplashScreen />;
}

export default Callback;
