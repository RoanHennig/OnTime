import { combineReducers } from 'redux';
import clients from './clients.reducer';
import client from './client.reducer';

const reducer = combineReducers({
	clients,
	client
});

export default reducer;
