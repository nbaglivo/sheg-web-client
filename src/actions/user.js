export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';

export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
export const fakeUserFulfilled = email => ({ type: FETCH_USER_FULFILLED, payload: {email} });
export const fetchUserError = error => ({ type: FETCH_USER_REJECTED, payload: error.xhr.response });
