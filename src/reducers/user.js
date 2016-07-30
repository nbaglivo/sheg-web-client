import Immutable from 'immutable';
import { FETCH_USER_FULFILLED } from '../actions/user'

const initialState = Immutable.fromJS({});

const users = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_FULFILLED:
			return state.set('user', action.payload);

		default:
			return state;
	}
};

export default users;
