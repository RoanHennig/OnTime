import axios from 'axios';
import auth0Service from 'app/services/auth0Service';
export const SAVE_BUSINESS_DETAILS = '[BUSINESSSETUP] SAVE BUSINESS DETAILS';

export function saveBusinessDetails(steps) {
	const request = axios.post(
		'api/businessSetup/save',
		{
			step1: steps.Step1.businessDetails,
			auth0Id: steps.userId
		},
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + auth0Service.getAccessToken()
			}
		}
	);

	return (dispatch) =>
		request.then((response) =>
			dispatch({
				type: SAVE_BUSINESS_DETAILS,
				payload: response.data
			})
		);
}
