import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    items: {
        appointments: [],
        notifications: [],
        consultations: []
    },
    selectedItem: [],
    routeParams: {},
    selectedAgendaItemIds: [],
    searchText: ''
};

const agendaItemsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_APPOINTMENTS:
            {
                const newItems = { ...state.items };
                newItems.appointments = action.payload;
                return {
                    ...state,
                    items: newItems
                };
            }
        case Actions.GET_NOTIFICATIONS:
            {
                const newItems = { ...state.items };
                newItems.notifications = action.payload;
                return {
                    ...state,
                    items: newItems
                };
            }
        case Actions.TOGGLE_IN_SELECTED_AGENDA_ITEMS:
            {
                const agendaItemId = action.agendaItemId;

                let selectedAgendaItemIds = [...state.selectedAgendaItemIds];

                if (selectedAgendaItemIds.find(id => id === agendaItemId) !== undefined) {
                    selectedAgendaItemIds = selectedAgendaItemIds.filter(id => id !== agendaItemId);
                }
                else {
                    selectedAgendaItemIds = [...selectedAgendaItemIds, agendaItemId];
                }

                return {
                    ...state,
                    selectedAgendaItemIds
                };
            }
            case Actions.SELECT_ALL_ITEMS:
                {     
                    const selectedAgendaItemIds = action.payload.map(item => item.id);
        
                    return {
                        ...state,
                        selectedAgendaItemIds
                    };
                }
                case Actions.DESELECT_ALL_ITEMS:
                {
                    return {
                        ...state,
                        selectedAgendaItemIds: []
                    };
                }

        default:
            return state;
    }
};

export default agendaItemsReducer;
