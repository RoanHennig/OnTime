import {combineReducers} from 'redux';
import agendaItems from './agendaItems.reducer';
import agendaSidebar from './agendaSiderbar.reducer';

const reducer = combineReducers({
    agendaItems,
    agendaSidebar
});

export default reducer;