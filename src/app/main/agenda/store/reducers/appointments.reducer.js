import * as Actions from '../actions';
import _ from '@lodash';
import service from '../../data/appointments-mock.js';

const initialState = {
    entities       : service.getmockappointments(),
    routeParams    : {},
    selectedAgendaItemIds: [],
    searchText     : ''
};

const appointmentsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_APPOINTMENTS:
        {

            return {
                ...state
            };
        }
        
        default:
            return state;
    }
};

export default appointmentsReducer;
