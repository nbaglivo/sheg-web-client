import React from 'react';
import { render } from 'react-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRedirect } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware, routerActions } from 'react-router-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import createLogger from 'redux-logger';

import authReducer from './reducers/auth';

import { authEpics, signInSuccess }  from './actions/auth';

import App from './components/app';
import Login from './containers/login';
import Home from './components/home';


// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.auth.get('current_user'), // how to get the user state
	redirectAction: routerActions.replace, // the redux action to dispatch for redirect
	wrapperDisplayName: 'UserIsAuthenticatedCORNUDO'
});


const routes = (
	<Route path="/" component={App}>
		<IndexRedirect to="/login" />
		<Route path="login" component={Login}/>
		<Route path="home" component={UserIsAuthenticated(Home)}/>
	</Route>
)

const reducer = combineReducers({
	auth: authReducer,
	routing: routerReducer
});

const epicMiddleware = createEpicMiddleware(authEpics);

const logger = createLogger();

const middlewares = applyMiddleware(routerMiddleware(browserHistory), epicMiddleware, logger);

const store = createStore(reducer, middlewares);

const history = syncHistoryWithStore(browserHistory, store)

const authToken = localStorage.getItem('authToken');
if ('authToken') {
	store.dispatch(signInSuccess({access_token: 'authToken'}));
}

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('root')
)

