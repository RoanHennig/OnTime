import * as Actions from '../actions';

const initialState = {
	data: []
};

const invoicesReducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_INVOICES: {
			return {
				...state,
				data: action.payload.invoices
			};
		}

		default:
			return state;
	}
};

export default invoicesReducer;
