import { combineReducers } from 'redux';
import clients from './clients.reducer';
import client from './client.reducer';
import appointments from './appointments.reducer';

const reducer = combineReducers({
	clients,
	client,
	appointments
});

export default reducer;
