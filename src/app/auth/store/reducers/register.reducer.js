import * as Actions from '../actions';

const initialState = {
	success: false,
	error: {
		username: null,
		password: null
	}
};

const register = function(state = initialState, action, payload) {
	switch (action.type) {
		case Actions.REGISTER_SUCCESS: {
			return {
				...initialState,
				success: true,
				authData: payload
			};
		}
		case Actions.REGISTER_ERROR: {
			return {
				success: false,
				error: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default register;
