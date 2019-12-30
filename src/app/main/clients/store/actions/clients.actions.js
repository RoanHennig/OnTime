import serviceClients from '../../data/clientdata-mock.js';

export const GET_CLIENTS = '[CLIENTS APP] GET CLIENTS';
export const SET_CLIENTS_SEARCH_TEXT = '[CLIENTS APP] SET CLIENTS SEARCH TEXT';

export function getClients(user) {
	const clients = serviceClients.getMockClients(user);
	return (dispatch) =>
		dispatch({
			type: GET_CLIENTS,
			payload: clients
		});
}

export function setClientsSearchText(event) {
	return {
		type: SET_CLIENTS_SEARCH_TEXT,
		searchText: event.target.value
	};
}
