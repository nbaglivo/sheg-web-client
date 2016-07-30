import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware, routerActions } from 'react-router-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import userReducer from './reducers/user';

import App from './components/app';
import Login from './components/login';
import UserHome from './components/userhome';

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.user.toJS(), // how to get the user state
	redirectAction: routerActions.replace, // the redux action to dispatch for redirect
	wrapperDisplayName: 'UserIsAuthenticated'
});

const routes = (
	<Route path="/" component={App}>
		<Route path="login" component={Login}/>
		<Route path="home" component={UserIsAuthenticated(UserHome)}/>
	</Route>
)

const reducer = combineReducers({
	user: userReducer,
	routing: routerReducer
});

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
);

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('root')
)

