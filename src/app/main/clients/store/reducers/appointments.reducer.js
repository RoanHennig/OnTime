import * as Actions from '../actions';

const initialState = {
	data: [],
	searchText: ''
};

const appointmentsReducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_APPOINTMENTS: {
			return {
				...state,
				data: action.payload.appointments
			};
		}
		case Actions.SET_APPOINTMENTS_SEARCH_TEXT: {
			return {
				...state,
				searchText: action.searchText
			};
		}

		default:
			return state;
	}
};

export default appointmentsReducer;
