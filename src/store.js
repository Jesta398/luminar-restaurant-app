import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const reducer=combineReducers({



});
const initialState={};
const Middleware=[thunk]

const store = createStore(reducers,initialState,applyMiddleware(...Middleware));

export default store
