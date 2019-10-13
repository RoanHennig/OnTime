import * as Actions from '../actions';

let initialState = {
    enableNext: false
};

const businessSetupReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SAVE_BUSINESS_DETAILS:
        {
            return {
                state
            };
        }
        default:
        {
            return state;
        }
    }
};

export default businessSetupReducer;