import {
	createStore,
	applyMiddleware,
	compose
} from "redux";
import createSagaMiddleware from "redux-saga";
import {
	reducers
} from "../reducers/newindex";

import rootSaga from '../sagas/index'

import {
	browserHistory
} from "react-router";
import {
	syncHistoryWithStore,
	routerMiddleware
} from "react-router-redux";

import createHistory from 'history/createBrowserHistory'

let middlewares = [];
middlewares.push(routerMiddleware(browserHistory));
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
let middleware = applyMiddleware(...middlewares);
const store = createStore(reducers, middleware);
const history = createHistory();
sagaMiddleware.run(rootSaga);

export {
	store,
	history
};