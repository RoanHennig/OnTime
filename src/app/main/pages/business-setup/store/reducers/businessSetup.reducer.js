import * as Actions from '../actions';

let initialState = {
	enableNext: false,
	businessSetupSteps: {
		step1: {},
		step2: {}
	}
};

const businessSetupReducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.SAVE_BUSINESS_DETAILS: {
			return {
				...state
			};
		}
		case Actions.GET_BUSINESS_DETAILS: {
			return {
				...state,
				businessSetupSteps: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default businessSetupReducer;
