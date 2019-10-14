import {combineReducers} from 'redux';
import appointments from './appointments.reducer';

const reducer = combineReducers({
    appointments
});

export default reducer;