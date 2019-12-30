import * as Actions from '../actions';

let initialState = {
    labelLocation: 'top',
    readOnly: false,
    showColon: true,
    colCount: 2,
    businessDetails: {}
};


const step1Reducer = function (state = initialState, action) {
    switch ( action.type )
    {
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