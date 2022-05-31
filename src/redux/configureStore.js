import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetings from './Greetings/greetings';

const rootReducer = combineReducers({
  message_text: greetings,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
