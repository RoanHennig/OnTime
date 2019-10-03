import * as Actions from '../actions';

let initialState = {
    enableNext: false
};

const businessSetupReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.ENABLE_NEXT:
        {
            return {
                ...state,
                enableNext: true
            };
        }
        case Actions.DISABLE_NEXT:
        {
            return {
                ...state,
                enableNext: false
            };
        }
        default:
        {
            return state;
        }
    }
};

export default businessSetupReducer;