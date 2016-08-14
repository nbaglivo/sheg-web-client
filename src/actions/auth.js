import { push } from 'react-router-redux';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_OUT_SUCCES = 'SIGN_OUT_SUCCES';

/*export const loginUserEpic = action$ => (
  action$.ofType(FETCH_USER_FULFILLED).map(() => push('/home'))
);*/

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';


export const loginError = (error) => ({ type: SIGN_IN_ERROR, error });
export const signIn = (email, password) => ({ type: SIGN_IN_REQUEST, email, password });

/*export const fetchUserEpic = action$ => (
  action$.ofType(FETCH_USER)
	.debounceTime(500)
	.mergeMap(action =>
	  ajax.getJSON(`https://api.github.com/users/${action.payload}`)
	  .map(fetchUserFulfilled)
	  .catch(error => Observable.of(fetchUserError(error)))
	  )
);
*/
// url, body, headers
/* 
cu	rl -H "Accept: application/json" my-client-with-secret:secret@localhost:8080/oauth/token -d grant_type=client_credentials
{"access_token":"1bf0c5a8-bb08-47a9-afbe-146ed11bc9b8","token_type":"bearer","expires_in":43199,"scope":"read"}
*/

const headers = (credentials) => ({
	'Accept': 'application/json',
	'Authorization': 'Basic ' + credentials
});

const body = {
	'grant_type': 'client_credentials'
};

const token_url = 'http://192.168.0.6:8080/oauth/token';

// TODO: Use user credentials.
const credentials = 'my-client-with-secret:secret';
console.log(btoa(credentials))

const request = (credentials) => ({
	url: token_url,
	headers: headers(credentials),
	body,
	crossDomain: true,	
	method: 'POST',
	resultSelector: (res) => res.response
});

export const loginEpic = action$ => (
	action$.ofType(SIGN_IN_REQUEST)
	.mergeMap(action =>
		ajax(request(credentials))
		/*ajax.post(token_url, body, headers(credentials))*/
		.catch(error => Observable.of(loginError(error)))
	)
);
