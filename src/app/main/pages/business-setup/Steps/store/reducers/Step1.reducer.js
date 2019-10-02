import * as Actions from '../actions';

let initialState = {
    labelLocation: 'top',
    readOnly: false,
    showColon: true,
    minColWidth: 600,
    colCount: 2,
    businessDetails: []
};


const step1Reducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.BUSINESS_NAME_CHANGED:
        {
            return {
                ...state,
                ...state.businessDetails,
                BusinessName: action.payload
            };
        }
        case Actions.BUSINESS_DETAILS_CHANGED:
        {
            return {
                ...state,
                businessDetails: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default step1Reducer;