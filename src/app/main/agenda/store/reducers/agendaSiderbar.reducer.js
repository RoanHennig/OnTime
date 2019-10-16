import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    staff       : []
};

const agendaSiderbarReducer = function (state = initialState, action) {
    switch ( action.type )
    {
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

export default agendaSiderbarReducer;
