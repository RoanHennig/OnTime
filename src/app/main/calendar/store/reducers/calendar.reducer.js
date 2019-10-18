import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    events: []
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

        default:
            return state;
    }
};

export default calendarReducer;
