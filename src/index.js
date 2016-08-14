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

import userReducer from './reducers/user';
import authReducer from './reducers/auth';

import { loginEpic }  from './actions/auth';

import App from './components/app';
import Login from './containers/login';
import UserHome from './components/userhome';


// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.user.toJS(), // how to get the user state
	redirectAction: routerActions.replace, // the redux action to dispatch for redirect
	wrapperDisplayName: 'UserIsAuthenticated'
});

const routes = (
	<Route path="/" component={App}>
		<IndexRedirect to="/login" />
		<Route path="login" component={Login}/>
		<Route path="home" component={UserIsAuthenticated(UserHome)}/>
	</Route>
)

const reducer = combineReducers({
	user: userReducer,
	auth: authReducer,
	routing: routerReducer
});


const epicMiddleware = createEpicMiddleware(combineEpics(loginEpic));

const middlewares = applyMiddleware(routerMiddleware(browserHistory), epicMiddleware);

const store = createStore(reducer, middlewares);

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('root')
)

