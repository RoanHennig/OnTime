import { combineReducers } from 'redux';
import clients from './clients.reducer';
import client from './client.reducer';
import appointments from './appointments.reducer';
import invoices from './invoices.reducer';

const reducer = combineReducers({
	clients,
	client,
	appointments,
	invoices
});

export default reducer;
