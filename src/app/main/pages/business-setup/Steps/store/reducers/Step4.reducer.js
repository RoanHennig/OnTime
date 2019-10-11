import * as Actions from '../actions';
import service from '../../data/Step4.data.js';

let initialState = {
    businessOperatingHours: { openingTime: '08:00', closingTime: '17:00' },
    staffOperatingHours: service.createDefaultDataSet()
};


const step4Reducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.OPERATING_HOURS_CHANGED:
            {
                return {
                    ...state,
                    staffOperatingHours: action.payload
                };
            }
        case Actions.BUSINESS_OPERATING_HOURS_CHANGED:
            {
                return {
                    ...state,
                    businessOperatingHours: action.payload
                };
            }
        default:
            {
                return state;
            }
    }
};

export default step4Reducer;