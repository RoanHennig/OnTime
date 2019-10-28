import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
	client: null
};

const clientReducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_CLIENT: {
			return {
				...state,
				client: action.payload
			};
		}

		default:
			return state;
	}
};

export default clientReducer;
