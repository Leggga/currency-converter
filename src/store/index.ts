import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

// Saga middleware
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// Running saga middleware
sagaMiddleware.run(rootSaga)