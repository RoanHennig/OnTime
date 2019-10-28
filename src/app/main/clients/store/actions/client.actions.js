import serviceClient from '../../data/clientdetaildata-mock.js';

export const GET_CLIENT = '[CLIENTS APP] GET CLIENT';

export function getClient(user) {
	const client = serviceClient.getMockClient(1);
	return (dispatch) =>
		dispatch({
			type: GET_CLIENT,
			payload: client
		});
}
