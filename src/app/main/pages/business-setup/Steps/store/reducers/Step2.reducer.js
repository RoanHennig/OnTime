import * as Actions from '../actions';

let initialState = {
    labelLocation: 'top',
    readOnly: false,
    showColon: true,
    colCount: 1,
    businessTypeDetails: {
    }
};


const step2Reducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.BUSINESS_TYPE_CHANGED:
        {
            return {
                ...state,
                businessTypeDetails: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default step2Reducer;