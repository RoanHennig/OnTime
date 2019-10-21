import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    events: [],
    staff: [],
    businessSettings: {
        startingTime: 9,
        endingTime:17
    }
};

const calendarReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_EVENTS:
            {

                return {
                    ...state,
                    events: action.payload
                };
            }
            case Actions.GET_STAFF_MEMBERS:
                {
    
                    return {
                        ...state,
                        staff: action.payload
                    };
                }

        default:
            return state;
    }
};

export default calendarReducer;
