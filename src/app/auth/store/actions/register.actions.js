import * as UserActions from './user.actions';
import axios from 'axios';
import auth0Service from 'app/services/auth0Service';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function submitRegister(businessName, firstName, lastName, auth0Id, email) {
	return (dispatch) =>
		axios
			.post(
				'api/auth/register',
				{
					email: email,
					businessName: businessName,
					firstName: firstName,
					lastName: lastName,
					auth0UserId: auth0Id
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + auth0Service.getAccessToken()
					}
				}
			)
			.then((user) => {
				return dispatch({
					type: REGISTER_SUCCESS
				});
			})
			.catch((error) => {
				return dispatch({
					type: REGISTER_ERROR,
					payload: error
				});
			});
}
