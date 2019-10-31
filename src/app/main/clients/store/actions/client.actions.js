import serviceClient from '../../data/clientdetaildata-mock.js';

export const GET_CLIENT = '[CLIENTS APP] GET CLIENT';
export const OPEN_NEW_CLIENT_DIALOG = '[CLIENTS APP] OPEN NEW CLIENT DIALOG';
export const CLOSE_NEW_CLIENT_DIALOG = '[CLIENTS APP] CLOSE NEW CLIENT DIALOG';
export const OPEN_EDIT_CLIENT_DIALOG = '[CLIENTS APP] OPEN EDIT CLIENT DIALOG';
export const CLOSE_EDIT_CLIENT_DIALOG = '[CLIENTS APP] CLOSE EDIT CLIENT DIALOG';
export const ADD_CLIENT = '[CLIENTS APP] ADD CLIENT';
export const UPDATE_CLIENT = '[CLIENTS APP] UPDATE CLIENT';
export const REMOVE_CLIENT = '[CLIENTS APP] REMOVE CLIENT';

export function getClient(user) {
	const client = serviceClient.getMockClient(1);
	return (dispatch) =>
		dispatch({
			type: GET_CLIENT,
			payload: client
		});
}

export function openNewClientDialog() {
	return {
		type: OPEN_NEW_CLIENT_DIALOG
	};
}

export function closeNewClientDialog() {
	return {
		type: CLOSE_NEW_CLIENT_DIALOG
	};
}

export function openEditClientDialog(data) {
	return {
		type: OPEN_EDIT_CLIENT_DIALOG,
		data
	};
}

export function closeEditClientDialog() {
	return {
		type: CLOSE_EDIT_CLIENT_DIALOG
	};
}

/* export function addClient(newClient)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().ClientsApp.Clients;

        const request = axios.post('/api/Clients-app/add-Client', {
            newClient
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_Client
                })
            ]).then(() => dispatch(getClients(routeParams)))
        );
    };
} */

/* export function updateClient(Client)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().ClientsApp.Clients;

        const request = axios.post('/api/Clients-app/update-Client', {
            Client
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: UPDATE_Client
                })
            ]).then(() => dispatch(getClients(routeParams)))
        );
    };
} */
/* 
export function removeClient(ClientId)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().ClientsApp.Clients;

        const request = axios.post('/api/Clients-app/remove-Client', {
            ClientId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_Client
                })
            ]).then(() => dispatch(getClients(routeParams)))
        );
    };
} */
