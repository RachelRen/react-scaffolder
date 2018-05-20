import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'

import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import rootSaga from '../sagas/index'
import reducer from '../reducers/index'

const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const historyMiddleware = routerMiddleware(history)

const store = createStore(
  	combineReducers({
  		...reducer,
  		router: routerReducer
  	}),
  	applyMiddleware(compose(sagaMiddleware, historyMiddleware))
)

sagaMiddleware.run(rootSaga)


export {store, history}

