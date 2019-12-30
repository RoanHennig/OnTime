import * as Actions from '../actions';
import service from '../../data/Step4.data.js';

let initialState = {
	operatingHours: service.createDefaultDataSet()
};

const step4Reducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.OPERATING_HOURS_CHANGED: {
			return {
				...state,
				operatingHours: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default step4Reducer;
