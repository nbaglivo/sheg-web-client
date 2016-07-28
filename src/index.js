import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import App from './components/app';

const routes = (
	<Route path="/" component={App}>
	</Route>
)

const reducer = combineReducers({
	routing: routerReducer
});

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
)

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('root')
)
