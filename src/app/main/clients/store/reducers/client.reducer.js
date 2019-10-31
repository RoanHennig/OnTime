import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
	client: null,
	routeParams: {},
	clientDialog: {
		type: 'new',
		props: {
			open: false
		},
		data: null,
		form: {
			colCount: 2,
			labelLocation: 'top',
			showColon: false
		}
	}
};

const clientReducer = function(state = initialState, action) {
	switch (action.type) {
		case Actions.GET_CLIENT: {
			return {
				...state,
				client: action.payload
			};
		}
		case Actions.OPEN_NEW_CLIENT_DIALOG: {
			return {
				...state,
				clientDialog: {
					type: 'new',
					props: {
						open: true
					},
					data: null,
					form: {
						colCount: 2,
						labelLocation: 'top',
						showColon: false
					}
				}
			};
		}
		case Actions.CLOSE_NEW_CLIENT_DIALOG: {
			return {
				...state,
				clientDialog: {
					type: 'new',
					props: {
						open: false
					},
					data: null,
					form: {
						colCount: 2,
						labelLocation: 'top',
						showColon: false
					}
				}
			};
		}
		case Actions.OPEN_EDIT_CLIENT_DIALOG: {
			return {
				...state,
				clientDialog: {
					type: 'edit',
					props: {
						open: true
					},
					data: action.data,
					form: {
						colCount: 2,
						labelLocation: 'top',
						showColon: false
					}
				}
			};
		}
		case Actions.CLOSE_EDIT_CLIENT_DIALOG: {
			return {
				...state,
				clientDialog: {
					type: 'edit',
					props: {
						open: false
					},
					data: null,
					form: {
						colCount: 2,
						labelLocation: 'top',
						showColon: false
					}
				}
			};
		}

		default:
			return state;
	}
};

export default clientReducer;
