import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    events: [],
    staff: {
        businessId:0,
        staffMembers:[]
    },
    filterStaff:[],
    businessSettings: {
        startingTime: 9,
        endingTime:17
    },
    selectedDates:{}
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
            case Actions.SET_SELECTED_DATES:
                {
    
                    return {
                        ...state,
                        selectedDates: action.payload
                    };
            }
            case Actions.SET_FILTER_STAFF_MEMBERS:
                {
                    const specificStaffMember = state.staff.staffMembers.find(x=> x.id === action.payload);
                    if(specificStaffMember) {
                        return {
                            ...state,
                            filterStaff: [state.staff.staffMembers.find(x=> x.id === action.payload)]
                        };
                    }
                    else if(action.payload == 'working staff') 
                    {
                        return {
                            ...state,
                            filterStaff: state.staff.staffMembers.filter(x=> x.active === true)
                        }; 
                    }
                    else
                    {
                        return {
                            ...state,
                            filterStaff: [...state.staff.staffMembers]
                        };
                    }
            }

        default:
            return state;
    }
};

export default calendarReducer;
