import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userDataReducer, LikedDataReducer, DislikedDataReducer} from './userDataReducer';

const rootReducer = combineReducers({
	userDataReducer,
	LikedDataReducer,
	DislikedDataReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;