import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
	clients: [],
	searchText: ''
};

const clientsReducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_CLIENTS: {
			return {
				...state,
				clients: action.payload.clients
			};
		}
		case Actions.SET_CLIENTS_SEARCH_TEXT: {
			return {
				...state,
				searchText: action.searchText
			};
		}

		default:
			return state;
	}
};

export default clientsReducer;
