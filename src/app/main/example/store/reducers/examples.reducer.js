import * as Actions from '../actions';

const initialState = {
    displayMessage        : ''
};


const examplesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_TEST:
        {
            return {
                ...state,
                displayMessage: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default examplesReducer;