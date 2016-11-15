import Immutable from 'immutable';

import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT, CURRENT_USER_FETCHED } from '../actions/auth';

const initialState = Immutable.fromJS({token: undefined});

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN_SUCCESS:
			localStorage.setItem('authToken', action.access_token);
			return state.merge({
				'token': action.access_token,
				'errorMessage': undefined
			});
		case SIGN_OUT:
			localStorage.removeItem('authToken');
			return state.set('token', undefined);
		case SIGN_IN_ERROR:
			let response = action.error.xhr.response;
			return state.set('errorMessage', response? response.error : 'An error occurred. Please try again.');
		case CURRENT_USER_FETCHED:
			return state.merge({
				'current_user': {isAdmin: true}
			});
		default:
			return state;
	}
};

export default authReducer;
