import {combineReducers} from 'redux';
import appointments from './appointments.reducer';
import agendaSidebar from './agendaSiderbar.reducer';

const reducer = combineReducers({
    appointments,
    agendaSidebar
});

export default reducer;