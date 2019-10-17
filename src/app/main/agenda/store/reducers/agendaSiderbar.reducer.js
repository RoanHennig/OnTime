import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    staff: [],
    agendaItemBadges: {
        appointments: 0,
        notifications: 0,
        consultations: 0
    }
};

const agendaSiderbarReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_STAFF_MEMBERS:
            {

                return {
                    ...state,
                    staff: action.payload
                };
            }
        case Actions.SET_AGENDA_ITEMS_BADGES:
            {

                return {
                    ...state,
                    agendaItemBadges: action.payload
                };
            }

        default:
            return state;
    }
};

export default agendaSiderbarReducer;
