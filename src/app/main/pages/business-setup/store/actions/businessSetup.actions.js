import axios from 'axios';
import auth0Service from 'app/services/auth0Service';

export const SAVE_BUSINESS_DETAILS = '[BUSINESSSETUP] SAVE BUSINESS DETAILS';
export const GET_BUSINESS_DETAILS = '[BUSINESSSETUP] GET BUSINESS DETAILS';

export function saveBusinessDetails(steps) {
	console.log(steps.Step1.businessDetails);
	console.log(steps.userId);
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

export function getBusinessDetails(businessId) {
	const request = axios.get('api/businessSetup/get', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + auth0Service.getAccessToken()
		},
		params: {
			businessId: businessId
		}
	});

	return (dispatch) => {
		request.then((response) => {
			dispatch({
				type: GET_BUSINESS_DETAILS,
				payload: response.data
			});
		});
	};
}
