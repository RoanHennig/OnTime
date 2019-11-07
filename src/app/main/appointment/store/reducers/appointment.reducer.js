import * as Actions from '../actions';

const initialState = {
	data: {
		client: {
			id: 0,
			firstName: '',
			lastName: ''
		},
		details: {
			startTime: new Date(),
			endTime: new Date()
		},
		invoice: {
			id: 0,
			date: '',
			reference: '',
			client: {
				firstName: '',
				lastName: '',
				invoiceAddress: {
					address: ''
				},
				mobile: '',
				email: ''
			},
			services: [
				{
					id: 0,
					name: '',
					price: ''
				}
			],
			subtotal: '',
			tax: '',
			discount: '',
			total: ''
		}
	}
};

const appointmentReducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_APPOINTMENT: {
			return {
				...state,
				data: action.payload
			};
		}

		default:
			return state;
	}
};

export default appointmentReducer;
