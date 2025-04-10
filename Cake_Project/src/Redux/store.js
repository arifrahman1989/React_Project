import { Reducer } from './reducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const selfStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default selfStore;