import { push } from 'react-router-redux';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const loginError = (error) => ({ type: SIGN_IN_ERROR, error });
export const signIn = (email, password) => ({ type: SIGN_IN_REQUEST, email, password });
export const signInSuccess = ({access_token}) => ({ type: SIGN_IN_SUCCESS, access_token });
export const signUp = (email, password) => ({ type: SIGN_UP_REQUEST, email, password });
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS });


const credentials = 'my-client-with-secret:secret';

//TODO: Use passwd and email
const headers = (pass, email) => ({
	'Accept': 'application/json',
	'Authorization': 'Basic ' + btoa(credentials),
	'Content-Type': 'application/x-www-form-urlencoded'
});

const body = {
	'grant_type': 'client_credentials'
};

const token_url = 'http://localhost:8080/oauth/token';

const loginRequest = ({pass, email}) => ({
	url: token_url,
	headers: headers(pass, email),
	body,
	crossDomain: true,	
	method: 'POST',
	resultSelector: (res) => res.response
});

export const loginEpic = action$ => (
	action$.ofType(SIGN_IN_REQUEST)
	.mergeMap(action =>
		ajax(loginRequest(action))
		.map(signInSuccess)
		.catch(error => Observable.of(loginError(error)))
	)
);

export const redirectToHomeEpic = action$ => (
	action$.ofType(SIGN_IN_SUCCESS).map(() => push('/home'))
);
